import React from 'react';

import Item from './item';

import { ListContainer, Title } from '../../styled/main.style';

const List = ({ list, dispatch }) => (
  <React.Fragment>
    <Title>Список задач</Title>
    <ListContainer>
      {list.length > 0
        ? list.map(el => <Item el={el} dispatch={dispatch} key={el.id} />)
        : <p>Список пуст</p>
      }
    </ListContainer>
  </React.Fragment>
);

export default List;
