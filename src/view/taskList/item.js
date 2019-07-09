import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTrash } from '@fortawesome/fontawesome-free-solid';

import { setCompleted, removeTask } from '../../store/actions';

import { ItemBox } from '../../styled/main.style';

const Item = ({ el, dispatch }) => {
  const {
    name, description, id, completed,
  } = el;
  console.log(el);
  return (
    <ItemBox completed={completed}>
      <FontAwesomeIcon
        onClick={() => {
          if (completed) return;
          dispatch(setCompleted(id));
        }}
        icon={faCheckSquare}
      />
      <p>{name}</p>
      {!completed && <FontAwesomeIcon icon={faEdit} />}
      <FontAwesomeIcon
        onClick={() => dispatch(removeTask(id))}
        icon={faTrash}
      />
    </ItemBox>
  );
};

export default Item;
