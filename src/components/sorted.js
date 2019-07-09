import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSortAmountDown, faSortAmountUp } from '@fortawesome/fontawesome-free-solid/index';
import { FilterBox } from '../styled/main.style';
import { setSorted } from '../store/actions';
import PropTypes from "prop-types";
import Filters from "./filters";

const Sorted = ({ sorted, dispatch }) => (
  <FilterBox>
    <FontAwesomeIcon
      onClick={() => dispatch(setSorted(!sorted))}
      icon={sorted ? faSortAmountUp : faSortAmountDown}
    />
  </FilterBox>
);

Sorted.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sorted: PropTypes.bool.isRequired,
};

export default Sorted;
