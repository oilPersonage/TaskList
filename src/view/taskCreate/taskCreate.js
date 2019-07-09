import React from 'react';

import Store from '../../store/store'

import Form from '../../components/form'

import { Title } from '../../styled/main.style';

import { addTask } from '../../store/actions';
import random from '../../utils/randomId'

const {dispatch} = Store


const TaskCreate = () => {
  const onSubmit = ({name, description}) => {
    const body = {
      name,
      description,
      id: random(10),
    };
    dispatch(addTask(body));
  };
  return (
    <React.Fragment>
      <Title>Создание задачи</Title>
      <Form onSubmit={onSubmit} />
    </React.Fragment>
  );
};

export default TaskCreate;
