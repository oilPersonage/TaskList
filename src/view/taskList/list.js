import React from 'react';
import PropTypes from 'prop-types';

import Filters from '../../components/filters';
import Sorted from '../../components/sorted';

import Item from './item';

import { ListContainer, Title, Header } from '../../styled/main.style';

const List = ({ list, dispatch, sorted }) => (
  <React.Fragment>
    <Title>Список задач</Title>
    <Header>
      <Filters dispatch={dispatch} />
      <Sorted dispatch={dispatch} sorted={sorted} />
    </Header>
    <ListContainer>
      {list.length > 0
        ? list.map(el => <Item el={el} dispatch={dispatch} key={el.id} />)
        : <p>Список пуст</p>
      }
    </ListContainer>
  </React.Fragment>
);

List.propTypes = {
  list: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  sorted: PropTypes.bool.isRequired,
};

export default List;
