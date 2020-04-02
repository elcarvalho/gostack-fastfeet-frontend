import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import ActionsBar from '~/components/ActionsBar';
import AvatarName from '~/components/AvatarName';
import ActionButtons from '~/components/ActionButtons';

import { Container, TableContent, StatusTag, Deliveryman } from './styles';

export default function Orders() {
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

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>

      <ActionsBar>
        <div>
          <MdSearch size={21} color="#999999" />
          <input type="text" placeholder="Buscar por encomendas" />
        </div>

        <button type="button">
          <MdAdd size={21} color="#FFFFFF" />
          CADASTRAR
        </button>
      </ActionsBar>

      <TableContent>
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
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <Deliveryman>
                <AvatarName size={36} originalName="Ludwig van Beethoven" />
                Ludwig van Beethoven
              </Deliveryman>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <StatusTag status="ENTREGUE">ENTREGUE</StatusTag>
            </td>
            <td>
              <ActionButtons id={1} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#02</td>
            <td>Wolfgang Amadeus</td>
            <td>
              <Deliveryman>
                <AvatarName size={36} originalName="Wolfgang Amadeus" />
                Wolfgang Amadeus
              </Deliveryman>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <StatusTag status="PENDENTE">PENDENTE</StatusTag>
            </td>
            <td>
              <ActionButtons id={2} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#03</td>
            <td>Johann Sebastian Bach</td>
            <td>
              <Deliveryman>
                <AvatarName size={36} originalName="Johann Sebastian Bach" />
                Johann Sebastian Bach
              </Deliveryman>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <StatusTag status="RETIRADA">RETIRADA</StatusTag>
            </td>
            <td>
              <ActionButtons id={3} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#04</td>
            <td>ILkui</td>
            <td>
              <Deliveryman>
                <AvatarName size={36} originalName="Ramon Gonzales" />
                Ramon Gonzales
              </Deliveryman>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <StatusTag status="CANCELADA">CANCELADA</StatusTag>
            </td>
            <td>
              <ActionButtons id={4} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#05</td>
            <td>Eric</td>
            <td>
              <Deliveryman>
                <AvatarName size={36} originalName="Eric" />
                Eric
              </Deliveryman>
            </td>
            <td>Rio de Janeiro</td>
            <td>Rio de Janeiro</td>
            <td>
              <StatusTag status="ENTREGUE">ENTREGUE</StatusTag>
            </td>
            <td>
              <ActionButtons id={5} options={actionOptions} />
            </td>
          </tr>
        </tbody>
      </TableContent>
    </Container>
  );
}
