import React from 'react';

import ActionButtons from '~/components/ActionButtons';
import TableWrapper from '~/components/TableWrapper';

export default function OrderProblems() {
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
          <tr>
            <td>#01</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
              mauris et felis eleifend elementum vel quis lectus…
            </td>
            <td>
              <ActionButtons id={1} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#02</td>
            <td>Destinatário ausente</td>
            <td>
              <ActionButtons id={2} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#03</td>
            <td>Carga roubada</td>
            <td>
              <ActionButtons id={3} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#04</td>
            <td>Destinatário ausente</td>
            <td>
              <ActionButtons id={4} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#05</td>
            <td>Infelizmente sofri um acidente que danificou a encomenda</td>
            <td>
              <ActionButtons id={5} options={actionOptions} />
            </td>
          </tr>
        </tbody>
      </TableWrapper>
    </main>
  );
}
