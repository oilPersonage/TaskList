import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FormContainer, Label } from '../styled/main.style';

const Form = ({
  storeName, storeDescription, onSubmit, edited,
}) => {
  const [name, setName] = useState(storeName || '');
  const [description, setDescription] = useState(storeDescription || '');
  const noValid = name === '' || description === '';
  const onHandle = (e) => {
    e.preventDefault();
    if (noValid) {
      return;
    }
    const body = {
      name, description,
    };
    onSubmit(body);
    setName('');
    setDescription('');
  };

  return (
    <FormContainer noValid={noValid} onSubmit={onHandle}>
      <Label short htmlFor="inputName">
        <p>Наименование</p>
        <input type="text" id="inputName" value={name} onChange={e => setName(e.target.value)} />
      </Label>

      <Label htmlFor="inputDescription">
        <p>Описание</p>
        <textarea id="inputDescription" value={description} onChange={e => setDescription(e.target.value)} />
      </Label>
      <input type="submit" value={edited ? 'Изменить' : 'Добавить'} />

    </FormContainer>
  );
};

Form.propTypes = {
  storeName: PropTypes.string,
  storeDescription: PropTypes.string,
  onSubmit: PropTypes.func,
  edited: PropTypes.bool,
};

export default Form;
