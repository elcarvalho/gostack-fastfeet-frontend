import React, { useState } from 'react';
import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Actions, ListAction } from './styles';

export default function ActionButtons({ id, options }) {
  const [isVisible, setIsVisible] = useState(false);

  const listItens = {
    show: (id, action) => (
      <li key={String(`show-${id}`)}>
        <button type="button" onClick={() => action(id)}>
          <MdRemoveRedEye size={16} color="#8E5BE8" />
          Visualizar
        </button>
      </li>
    ),
    edit: (id, action) => (
      <li key={String(`edit-${id}`)}>
        <button type="button" onClick={() => action(id)}>
          <MdModeEdit size={16} color="#4D85EE" />
          Editar
        </button>
      </li>
    ),
    delete: (id, action) => (
      <li key={String(`delete-${id}`)}>
        <button type="button" onClick={() => action(id)}>
          <MdDeleteForever size={16} color="#DE3B3B" />
          Excluir
        </button>
      </li>
    ),
  };

  const handleToggleMenu = () => setIsVisible(!isVisible);

  return (
    <Actions>
      <button type="button" onClick={handleToggleMenu}>
        <MdMoreHoriz size={21} color="#C6C6C6" />
      </button>
      <ListAction show={isVisible}>
        {options.length > 0 && (
          <ul>
            {options.map((item) => listItens[item.type](id, item.action))}
          </ul>
        )}
      </ListAction>
    </Actions>
  );
}
