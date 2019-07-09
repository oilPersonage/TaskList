import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ el }) => {
  const {name, description, id} = el
  return <div>
    <FontAwesomeIcon icon="plus" />
    <p>{name}</p>
  </div>
}

export default Item;
