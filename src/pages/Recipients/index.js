import React, { useEffect, useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import transformHashId from '~/utils/transformHashId';

import ActionsBar from '~/components/ActionsBar';
import ActionButtons from '~/components/ActionButtons';
import TableWrapper from '~/components/TableWrapper';
import Search from '~/components/Search';

export default function Recipients() {
  const [recipientList, setRecipientList] = useState([]);

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
    const response = await getRecipients(data);
    const mappedRecipients = remapRecipients(response);
    setRecipientList(mappedRecipients);
  };

  const getRecipients = useCallback(async (queryParam) => {
    const query = queryParam ? { params: queryParam } : {};

    const response = await api.get('recipients', query);
    return response.data;
  }, []);

  const remapRecipients = useCallback(
    (recipients) =>
      recipients.map((recipient) => {
        recipient.hashId = transformHashId(recipient.id, 3);
        recipient.fullRecipient = `${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`;
        return recipient;
      }),
    []
  );

  const loadRecipients = useCallback(async () => {
    const response = await getRecipients();
    const recipents = remapRecipients(response);
    setRecipientList(recipents);
  }, [getRecipients, remapRecipients]);

  useEffect(() => {
    loadRecipients();
  }, [loadRecipients]);

  return (
    <main>
      <h2>Gerenciando destinatários</h2>

      <ActionsBar>
        <Search
          handleSubmit={handleSubmit}
          placeholder="Buscar por destinatários"
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
            <th>Nome</th>
            <th>Endereço</th>
            <th align="center">Ações</th>
          </tr>
        </thead>

        <tbody>
          {recipientList &&
            recipientList.map((recipient) => (
              <tr key={recipient.hashId}>
                <td>{recipient.hashId}</td>
                <td>{recipient.name}</td>
                <td>{recipient.fullRecipient}</td>
                <td>
                  <ActionButtons id={recipient.id} options={actionOptions} />
                </td>
              </tr>
            ))}
        </tbody>
      </TableWrapper>
    </main>
  );
}
