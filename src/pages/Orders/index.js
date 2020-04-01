import React, { useState } from 'react';
import { MdSearch, MdAdd, MdMoreHoriz } from 'react-icons/md';

import AvatarName from '~/components/AvatarName';
import ActionButtons from './ActionButtons';

import {
  Container,
  NavBar,
  TableContent,
  StatusTag,
  Actions,
  Deliveryman,
} from './styles';

export default function Orders() {
  const [selectedRow, setSelectedRow] = useState(0);

  const handleMenuActions = (id) => {
    if (id === selectedRow) {
      setSelectedRow(0);
      return;
    }

    setSelectedRow(id);
  };

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>

      <NavBar>
        <div>
          <MdSearch size={21} color="#999999" />
          <input type="text" placeholder="Buscar por encomendas" />
        </div>

        <button type="button">
          <MdAdd size={21} color="#FFFFFF" />
          CADASTRAR
        </button>
      </NavBar>

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
              <Actions>
                <button type="button" onClick={() => handleMenuActions(1)}>
                  <MdMoreHoriz size={21} color="#C6C6C6" />
                </button>
                <ActionButtons showActions={1 === selectedRow} />
              </Actions>
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
              <Actions>
                <button type="button" onClick={() => handleMenuActions(2)}>
                  <MdMoreHoriz size={16} color="#C6C6C6" />
                </button>
                <ActionButtons showActions={2 === selectedRow} />
              </Actions>
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
              <Actions>
                <button type="button" onClick={() => handleMenuActions(3)}>
                  <MdMoreHoriz size={16} color="#C6C6C6" />
                </button>
                <ActionButtons showActions={3 === selectedRow} />
              </Actions>
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
              <Actions>
                <button type="button" onClick={() => handleMenuActions(4)}>
                  <MdMoreHoriz size={16} color="#C6C6C6" />
                </button>
                <ActionButtons showActions={4 === selectedRow} />
              </Actions>
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
              <Actions>
                <button type="button" onClick={() => handleMenuActions(5)}>
                  <MdMoreHoriz size={16} color="#C6C6C6" />
                </button>
                <ActionButtons showActions={5 === selectedRow} />
              </Actions>
            </td>
          </tr>
        </tbody>
      </TableContent>
    </Container>
  );
}
