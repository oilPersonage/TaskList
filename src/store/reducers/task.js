const initState = {
  list: [],
};

export default function (state = initState, action) {
  const { type, payload, id } = action;
  switch (type) {
    case 'ADD_TASK': {
      const list = state.list.splice(0);
      list.push(payload);
      return { ...state, list };
    }
    case 'REMOVE_TASK': {
      const list = state.list.splice(0);
      list.forEach((el, index) => {
        if (el.id === id) list.splice(index, 1);
      });
      return { ...state, list };
    }
    case 'UPDATE_TASK': {
      const list = state.list.map((el) => {
        if (el.id === id) {
          return payload;
        }
        return el;
      });
      return { ...state, list };
    }
    case 'SET_COMPLETED': {
      const list = state.list.splice(0);
      list.forEach((el) => {
        if (el.id === id) el.completed = true;
      });
      return { ...state, list };
    }
    default:
      return state;
  }
}
