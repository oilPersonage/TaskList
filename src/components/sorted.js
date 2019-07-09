import React from 'react';
import {FilterBox} from '../styled/main.style'
import {setCompleted} from "../store/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSort} from "@fortawesome/fontawesome-free-solid/index";

const Sorted = () => (
  <FilterBox>
    <FontAwesomeIcon
      onClick={() => {
        // dispatch(setCompleted(id));
      }}
      icon={faSort}
    />
  </FilterBox>
);

export default Sorted;
