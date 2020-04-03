import React, { useEffect, useState, useCallback } from 'react';

import api from '~/services/api';
import transformHashId from '~/utils/transformHashId';

import ActionButtons from '~/components/ActionButtons';
import TableWrapper from '~/components/TableWrapper';

export default function OrderProblems() {
  const [problemsList, setProblemsList] = useState([]);

  const handleEdit = (id) => {
    alert(`Editando ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Remover ${id}`);
  };

  const actionOptions = [
    {
      type: 'edit',
      buttonTitle: 'Visualizar',
      action: handleEdit,
    },
    {
      type: 'delete',
      buttonTitle: 'Cancelar encomenda',
      action: handleDelete,
    },
  ];

  const remapOrdersProblems = useCallback(
    (ordersProblems) =>
      ordersProblems.map((problem) => {
        problem.hashId = transformHashId(problem.id, 3);
        return problem;
      }),
    []
  );

  const getOrderProblems = useCallback(async () => {
    const response = await api.get('deliveries/problems');
    return response.data;
  }, []);

  const loadOrderProblems = useCallback(async () => {
    const response = await getOrderProblems();
    const orderProblems = remapOrdersProblems(response);
    setProblemsList(orderProblems);
  }, [getOrderProblems, remapOrdersProblems]);

  useEffect(() => {
    loadOrderProblems();
  }, [loadOrderProblems]);

  return (
    <main>
      <h2>Problemas na entrega</h2>

      <TableWrapper>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th align="center">Ações</th>
          </tr>
        </thead>

        <tbody>
          {problemsList &&
            problemsList.map((problem) => (
              <tr key={problem.hashId}>
                <td>{problem.hashId}</td>
                <td>{problem.description}</td>
                <td>
                  <ActionButtons id={problem.id} options={actionOptions} />
                </td>
              </tr>
            ))}
        </tbody>
      </TableWrapper>
    </main>
  );
}
