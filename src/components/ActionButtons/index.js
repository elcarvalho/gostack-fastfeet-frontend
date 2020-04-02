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
    show: (id, item) => (
      <li key={String(`show-${id}`)}>
        <button type="button" onClick={() => item.action(id)}>
          <MdRemoveRedEye size={16} color="#8E5BE8" />
          {item.buttonTitle || 'Visualizar'}
        </button>
      </li>
    ),
    edit: (id, item) => (
      <li key={String(`edit-${id}`)}>
        <button type="button" onClick={() => item.action(id)}>
          <MdModeEdit size={16} color="#4D85EE" />
          {item.buttonTitle || 'Editar'}
        </button>
      </li>
    ),
    delete: (id, item) => (
      <li key={String(`delete-${id}`)}>
        <button type="button" onClick={() => item.action(id)}>
          <MdDeleteForever size={16} color="#DE3B3B" />
          {item.buttonTitle || 'Excluir'}
        </button>
      </li>
    ),
  };

  const handleToggleMenu = () => setIsVisible(!isVisible);

  return (
    <Actions
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <button type="button" onClick={handleToggleMenu}>
        <MdMoreHoriz size={21} color="#C6C6C6" />
      </button>
      <ListAction show={isVisible} onMouseOut={() => setIsVisible(false)}>
        {options.length > 0 && (
          <ul>{options.map((item) => listItens[item.type](id, item))}</ul>
        )}
      </ListAction>
    </Actions>
  );
}
