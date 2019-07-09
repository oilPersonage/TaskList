import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ name, description }) => (
  <div>
    <FontAwesomeIcon icon="plus" />
    <p>{name}</p>
  </div>
);

export default Item;
