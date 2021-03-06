import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MdAdd } from 'react-icons/md';

import transformHashId from '~/utils/transformHashId';

import api from '~/services/api';
import history from '~/services/history';

import ActionsBar from '~/components/ActionsBar';
import AvatarName from '~/components/AvatarName';
import ActionButtons from '~/components/ActionButtons';
import TableWrapper from '~/components/TableWrapper';
import Search from '~/components/Search';

import { removeRequest } from '~/store/modules/deliveryman/actions';

export default function Deliverymen() {
  const [deliverymanList, setDeliverymanList] = useState([]);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    history.push(`/deliverymen/edit/${id}`);
  };

  const handleDelete = (id) => {
    const deliveryman = deliverymanList.find((d) => d.id === id);
    const confirmMessage = `Deseja remover o usuário: ${deliveryman.name}`;
    const confirmed = window.confirm(confirmMessage);

    if (confirmed) {
      dispatch(removeRequest(id));
    }
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
        <Search
          handleSubmit={handleSubmit}
          placeholder="Buscar por entregadores"
        />

        <button type="button" onClick={() => history.push('/deliverymen/new')}>
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
