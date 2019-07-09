import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTrash } from '@fortawesome/fontawesome-free-solid';

import {setCompleted, removeTask, updateTask} from '../../store/actions';

import { ItemBox, Header } from '../../styled/main.style';
import Form from '../../components/form';

const Item = ({ el, dispatch }) => {
  const [open, setOpen] = useState(false);

  const {
    name, description, id, completed,
  } = el;

  const onSubmit = (body) => {
    setOpen(false)
    dispatch(updateTask(body, id))
  };

  return (
    <ItemBox completed={completed}>
      <Header>
        {!completed && (
        <FontAwesomeIcon
          onClick={() => {
            if (completed) return;
            dispatch(setCompleted(id));
          }}
          icon={faCheckSquare}
        />
        )
        }
        <p>{name}</p>
        {!completed && <FontAwesomeIcon onClick={() => setOpen(true)} icon={faEdit} />}
        <FontAwesomeIcon
          onClick={() => dispatch(removeTask(id))}
          icon={faTrash}
        />
      </Header>
      {open && <Form edited onSubmit={onSubmit} storeName={name} storeDescription={description} />
      }
    </ItemBox>
  );
};

export default Item;
