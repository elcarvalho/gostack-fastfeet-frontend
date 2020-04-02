import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import ActionsBar from '~/components/ActionsBar';
import AvatarName from '~/components/AvatarName';
import ActionButtons from '~/components/ActionButtons';

import { Container, TableContent } from './styles';

export default function Deliverymen() {
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

  return (
    <Container>
      <h2>Gerenciando entregadores</h2>

      <ActionsBar>
        <div>
          <MdSearch size={21} color="#999999" />
          <input type="text" placeholder="Buscar por entregadores" />
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
              <ActionButtons id={1} options={actionOptions} />
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
              <ActionButtons id={2} options={actionOptions} />
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
              <ActionButtons id={3} options={actionOptions} />
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
              <ActionButtons id={4} options={actionOptions} />
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
              <ActionButtons id={5} options={actionOptions} />
            </td>
          </tr>
        </tbody>
      </TableContent>
    </Container>
  );
}
