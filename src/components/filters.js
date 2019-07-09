import React from 'react';

import { FilterBox } from '../styled/main.style';
import { filtrationTask } from '../store/actions';

const Filters = ({ dispatch }) => (
  <FilterBox>
    <p>Фильтрация:</p>
    <input
      type="text"
      placeholder="Введите текст"
      onChange={(e) => {
        dispatch(filtrationTask(e.target.value));
      }}
    />
    <select name="select" onChange={e => dispatch(filtrationTask(e.target.value))} id="">
      <option value="reset">Сбросить</option>
      <option value="completed">Выполнена</option>
      <option value="noCompleted">Не выполнена</option>
    </select>
  </FilterBox>
);

export default Filters;
