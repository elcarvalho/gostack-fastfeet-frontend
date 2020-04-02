import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import ActionsBar from '~/components/ActionsBar';
import ActionButtons from '~/components/ActionButtons';
import TableWrapper from '~/components/TableWrapper';

export default function Recipients() {
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
    <main>
      <h2>Gerenciando destinatários</h2>

      <ActionsBar>
        <div>
          <MdSearch size={21} color="#999999" />
          <input type="text" placeholder="Buscar por destinatários" />
        </div>

        <button type="button">
          <MdAdd size={21} color="#FFFFFF" />
          CADASTRAR
        </button>
      </ActionsBar>

      <TableWrapper>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th align="center">Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#01</td>
            <td>Luiz Henrique</td>
            <td>Rua das camélias, 100, Rio de Janeiro - RJ</td>
            <td>
              <ActionButtons id={1} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#02</td>
            <td>Wolfgang Amadeus</td>
            <td>Av. Américas, 1000, Rio de Janeiro - RJ</td>
            <td>
              <ActionButtons id={2} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#03</td>
            <td>Johann Sebastian Bach</td>
            <td>Largo do Arouche, 300, São Paulo - SP</td>
            <td>
              <ActionButtons id={3} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#04</td>
            <td>ILkui</td>
            <td>Hikarigaoka, 179, Nerima - Tokyo</td>
            <td>
              <ActionButtons id={4} options={actionOptions} />
            </td>
          </tr>

          <tr>
            <td>#05</td>
            <td>Eric</td>
            <td>Rua Tabelião Luiz Guaraná, 260, Rio de Janeiro - RJ</td>
            <td>
              <ActionButtons id={5} options={actionOptions} />
            </td>
          </tr>
        </tbody>
      </TableWrapper>
    </main>
  );
}
