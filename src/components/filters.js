import React, { useRef } from 'react';

import { FilterBox } from '../styled/main.style';
import { filtrationTask } from '../store/actions';

const Filters = ({ dispatch }) => {
  const input = useRef(null);
  return (
    <FilterBox>
      <p>Фильтрация:</p>
      <input
        ref={input}
        type="text"
        placeholder="Введите текст"
        onChange={(e) => {
          dispatch(filtrationTask(e.target.value));
        }}
      />
      <select
        name="select"
        onChange={(e) => {
          if (e.target.value === '') input.current.value = '';
          dispatch(filtrationTask(e.target.value));
        }}
        id=""
      >
        <option value="">Сбросить</option>
        <option value="completed">Выполнена</option>
        <option value="noCompleted">Не выполнена</option>
      </select>
    </FilterBox>
  );
};


export default Filters;
