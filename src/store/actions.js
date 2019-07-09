export function setTask(task) {
  return {
    type: 'SET_TASK',
    payload: task,
  };
}

export function addTask(task) {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
}

export function removeTask(task, id) {
  return {
    type: 'REMOVE_TASK',
    payload: task,
    id,
  };
}

export function updateTask(task, id) {
  return {
    type: 'UPDATE_TASK',
    payload: task,
    id,
  };
}
export function filtrationTask(filter) {
  return {
    type: 'UPDATE_TASK',
    payload: filter,
  };
}
export function setCompleted(id) {
  return {
    type: 'SET_COMPLETED',
    payload: id,
  };
}
