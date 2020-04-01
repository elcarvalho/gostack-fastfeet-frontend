import React from 'react';
import { MdRemoveRedEye, MdModeEdit, MdDeleteForever } from 'react-icons/md';

import { ListAction } from './styles';

export default function ButtonActions({ showActions }) {
  return (
    <ListAction show={showActions}>
      <ul>
        <li>
          <a href="/">
            <MdModeEdit size={16} color="#4D85EE" />
            Editar
          </a>
        </li>
        <li>
          <a href="/">
            <MdDeleteForever size={16} color="#DE3B3B" />
            Excluir
          </a>
        </li>
      </ul>
    </ListAction>
  );
}
