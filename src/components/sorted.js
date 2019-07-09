import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSortAmountDown, faSortAmountUp } from '@fortawesome/fontawesome-free-solid/index';
import { FilterBox } from '../styled/main.style';
import { setSorted } from '../store/actions';

const Sorted = ({ sorted, dispatch }) => (
  <FilterBox>
    <FontAwesomeIcon
      onClick={() => dispatch(setSorted(!sorted))}
      icon={sorted ? faSortAmountUp : faSortAmountDown}
    />
  </FilterBox>
);

export default Sorted;
