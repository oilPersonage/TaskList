import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/fontawesome-free-solid/index';
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
        onChange={(e) => dispatch(filtrationTask(e.target.value))}
        id=""
      >
        <option value="">Не выбрано</option>
        <option value="completed">Выполнена</option>
        <option value="noCompleted">Не выполнена</option>
      </select>
      <FontAwesomeIcon
        onClick={() => {
          input.current.value = '';
          dispatch(filtrationTask(''));
        }}
        icon={faRedo}
      />
    </FilterBox>
  );
};


export default Filters;
