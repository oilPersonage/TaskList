import React from 'react';

import TaskCreate from './view/taskCreate/taskCreate';
import TaskList from './view/taskList/taskWrapper';

import {Container} from './styled/main.style'

function App() {
  return (
    <Container>
      <TaskCreate />
      <TaskList />
    </Container>
  );
}

export default App;
