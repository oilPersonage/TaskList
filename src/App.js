import React, {useEffect} from 'react';
import store from './store/store';

import TaskCreate from './view/taskCreate/taskCreate';
import TaskList from './view/taskList/taskWrapper';

import { Container } from './styled/main.style';
import { setTask } from './store/actions';

const { dispatch } = store;

function App() {
  useEffect(() => {
    const task = window.localStorage.getItem('task');
    dispatch(setTask(JSON.parse(task)));
  }, [])
  return (
    <Container>
      <TaskCreate />
      <TaskList />
    </Container>
  );
}

export default App;
