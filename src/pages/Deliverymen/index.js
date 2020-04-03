import React, { useEffect, useState, useCallback } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import { Form } from '@unform/web';
import Input from '~/components/Input';
import transformHashId from '~/utils/transformHashId';

import api from '~/services/api';

import ActionsBar from '~/components/ActionsBar';
import AvatarName from '~/components/AvatarName';
import ActionButtons from '~/components/ActionButtons';
import TableWrapper from '~/components/TableWrapper';

export default function Deliverymen() {
  const [deliverymanList, setDeliverymanList] = useState([]);

  const handleEdit = (id) => {
    alert(`Editando ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Remover ${id}`);
  };

  const actionOptions = [
    {
      type: 'edit',
      action: handleEdit,
    },
    {
      type: 'delete',
      action: handleDelete,
    },
  ];

  const handleSubmit = async (data) => {
    const response = await getDeliverymen(data);
    const mappedDeliverymen = remapDeliverymen(response);
    setDeliverymanList(mappedDeliverymen);
  };

  const getDeliverymen = useCallback(async (queryParam) => {
    const query = queryParam ? { params: queryParam } : {};
    const response = await api.get('deliverymen', query);
    return response.data;
  }, []);

  const remapDeliverymen = useCallback(
    (deliverymen) =>
      deliverymen.map((deliveryman) => {
        deliveryman.hashId = transformHashId(deliveryman.id, 3);
        return deliveryman;
      }),
    []
  );

  const loadDeliverymen = useCallback(async () => {
    const response = await getDeliverymen();
    const mappedDeliverymen = remapDeliverymen(response);
    setDeliverymanList(mappedDeliverymen);
  }, [getDeliverymen, remapDeliverymen]);

  useEffect(() => {
    loadDeliverymen();
  }, [loadDeliverymen]);

  return (
    <main>
      <h2>Gerenciando entregadores</h2>

      <ActionsBar>
        <Form onSubmit={handleSubmit}>
          <MdSearch size={21} color="#999999" />
          <Input type="text" name="q" placeholder="Buscar por entregadores" />
        </Form>

        <button type="button">
          <MdAdd size={21} color="#FFFFFF" />
          CADASTRAR
        </button>
      </ActionsBar>

      <TableWrapper>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th align="center">Ações</th>
          </tr>
        </thead>

        <tbody>
          {deliverymanList &&
            deliverymanList.map((deliveryman) => (
              <tr key={deliveryman.hashId}>
                <td>{deliveryman.hashId}</td>
                <td>
                  <AvatarName size={36} originalName={deliveryman.name} />
                </td>
                <td>{deliveryman.name}</td>
                <td>{deliveryman.email}</td>
                <td>
                  <ActionButtons id={deliveryman.id} options={actionOptions} />
                </td>
              </tr>
            ))}
        </tbody>
      </TableWrapper>
    </main>
  );
}
