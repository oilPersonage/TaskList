import React from 'react';

import Form from '../../components/form'

import { Title } from '../../styled/main.style';

import { addTask } from '../../store/actions';
import random from '../../utils/randomId'


const TaskCreate = ({storeName, storeDescription}) => {

  const onSubmit = ({name, description}) => {
    const body = {
      name,
      description,
      id: random(10),
    };
    addTask(body);
  };

  return (
    <React.Fragment>
      <Title>Создание задачи</Title>
      <Form storeName={storeName} storeDescription={storeDescription} onSubmit={onSubmit} />
    </React.Fragment>
  );
};

export default TaskCreate;
