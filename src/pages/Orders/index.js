import React, { useEffect, useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

import transformHashId from '~/utils/transformHashId';

import api from '~/services/api';

import ActionsBar from '~/components/ActionsBar';
import AvatarName from '~/components/AvatarName';
import ActionButtons from '~/components/ActionButtons';
import TableWrapper from '~/components/TableWrapper';
import Search from '~/components/Search';

import { StatusTag, Deliveryman } from './styles';

export default function Orders() {
  const [orderList, setOrderList] = useState([]);

  const handleShow = (id) => {
    alert(`Visualizando ${id}`);
  };

  const handleEdit = (id) => {
    alert(`Editando ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Removendo ${id}`);
  };

  const actionOptions = [
    {
      type: 'show',
      action: handleShow,
    },
    {
      type: 'edit',
      action: handleEdit,
    },
    {
      type: 'delete',
      action: handleDelete,
    },
  ];

  const getStatus = (order) => {
    const { startDate, endDate, canceledAt } = order;

    if (canceledAt) return 'CANCELADA';
    if (!startDate && !endDate) return 'PENDENTE';
    if (startDate && endDate) return 'ENTREGUE';
    if (startDate && !endDate) return 'RETIRADA';
  };

  const handleSubmit = async (data) => {
    const response = await getOrders(data);
    const mappedOrders = remapOrders(response);
    setOrderList(mappedOrders);
  };

  const remapOrders = useCallback(
    (orders) =>
      orders.map((order) => {
        order.hashId = transformHashId(order.id, 3);
        order.status = getStatus(order);
        return order;
      }),
    []
  );

  const getOrders = useCallback(async (queryParam) => {
    const query = queryParam ? { params: queryParam } : {};
    const response = await api.get('orders', query);
    return response.data;
  }, []);

  const loadOrders = useCallback(async () => {
    const orders = await getOrders();
    const mappedOrders = remapOrders(orders);
    setOrderList(mappedOrders);
  }, [getOrders, remapOrders]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  return (
    <main>
      <h2>Gerenciando encomendas</h2>

      <ActionsBar>
        <Search
          handleSubmit={handleSubmit}
          placeholder="Buscar por encomendas"
        />

        <button type="button">
          <MdAdd size={21} color="#FFFFFF" />
          CADASTRAR
        </button>
      </ActionsBar>

      <TableWrapper>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th align="center">Ações</th>
          </tr>
        </thead>

        <tbody>
          {orderList.map((order) => (
            <tr key={order.hashId}>
              <td>{order.hashId}</td>
              <td>{order.recipient.name}</td>
              <td>
                <Deliveryman>
                  <AvatarName size={36} originalName={order.deliveryman.name} />
                  {order.deliveryman.name}
                </Deliveryman>
              </td>
              <td>{order.recipient.city}</td>
              <td>{order.recipient.state}</td>
              <td>
                <StatusTag status={order.status}>{order.status}</StatusTag>
              </td>
              <td>
                <ActionButtons id={order.id} options={actionOptions} />
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </main>
  );
}
