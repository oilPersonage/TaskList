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

export function removeTask(id) {
  return {
    type: 'REMOVE_TASK',
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
export function filtrationTask(value) {
  return {
    type: 'FILTERS_TASK',
    payload: value,
  };
}
export function setSorted(value) {
  return {
    type: 'SORTED_TASK',
    payload: value,
  };
}

export function setCompleted(id) {
  return {
    type: 'SET_COMPLETED',
    id,
  };
}
