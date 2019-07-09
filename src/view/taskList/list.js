import React from 'react'

import Item from './item'

import {ListContainer} from '../../styled/main.style'

const List = ({list}) => {
  console.log(list)
  return <ListContainer>
    {list.map(el => <Item></Item>)}
  </ListContainer>
}

export default List
