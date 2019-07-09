import React from 'react';

import Item from './item';

import { ListContainer, Title } from '../../styled/main.style';

const List = ({ list }) => (
  <React.Fragment>
    <Title>Список задач</Title>
    <ListContainer>
      {list.length > 0
        ? list.map(el => <Item />)
        : <p>Список пуст</p>
      }
    </ListContainer>
  </React.Fragment>
);

export default List;
