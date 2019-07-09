import React, {useState} from 'react';

import Form from '../../components/form'

import { Title } from '../../styled/main.style';

import { addTask } from '../../store/actions';
import random from '../../utils/randomId'


const TaskCreate = () => {
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
      <Form onSubmit={onSubmit} />
    </React.Fragment>
  );
};

export default TaskCreate;
