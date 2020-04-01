import React, { useState } from 'react';
import { MdSearch, MdAdd, MdMoreHoriz } from 'react-icons/md';

import AvatarName from '~/components/AvatarName';
import ActionButtons from './ActionButtons';

import { Container, NavBar, TableContent, StatusTag, Actions } from './styles';

export default function Deliverymen() {
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
      <h2>Gerenciando entregadores</h2>

      <NavBar>
        <div>
          <MdSearch size={21} color="#999999" />
          <input type="text" placeholder="Buscar por entregadores" />
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
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th align="center">Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#01</td>
            <td>
              <AvatarName size={36} originalName="Luiz Henrique" />
            </td>
            <td>Luiz Henrique</td>
            <td>luiz.henrique@gmail.com</td>
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
            <td>
              <AvatarName size={36} originalName="Wolfgang Amadeus" />
            </td>
            <td>Wolfgang Amadeus</td>
            <td>wolfang.amadeus@gmail.com</td>
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
            <td>
              <AvatarName size={36} originalName="Johann Sebastian Bach" />
            </td>
            <td>Johann Sebastian Bach</td>
            <td>johann.sebastian@gmail.com</td>
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
            <td>
              <AvatarName size={36} originalName="ILkui" />
            </td>
            <td>ILkui</td>
            <td>ilkui@gmail.com</td>
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
            <td>
              <AvatarName size={36} originalName="Eric" />
            </td>
            <td>Eric</td>
            <td>lessa.eric@gmail.com</td>
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
