import React, { useState } from 'react';

import { FormContainer, Label } from '../styled/main.style';

const Form = ({ storeName, storeDescription, onSubmit }) => {
  const [name, setName] = useState(storeName || '');
  const [description, setDescription] = useState(storeDescription || '');

  const onHandle = (e) => {
    e.preventDefault()
    const body = {
      name, description,
    };
    onSubmit(body);
    setName("")
    setDescription("")
  };

  return (
    <FormContainer onSubmit={onHandle}>
      <Label short htmlFor="inputName">
        <p>Наименование</p>
        <input type="text" id="inputName" value={name} onChange={e => setName(e.target.value)} />
      </Label>

      <Label htmlFor="inputDescription">
        <p>Описание</p>
        <textarea id="inputDescription" value={description} onChange={e => setDescription(e.target.value)} />
      </Label>
      <input type="submit" value="Добавить" />

    </FormContainer>
  );
};

export default Form;
