const initState = {
  list: [],
};

export default function (state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TASK': {
      const list = state.list.splice(0);
      list.push(payload);
      return { ...state, list };
    }
    case 'REMOVE_TASK': {
      const list = state.list.splice(0);
      list.forEach((el, index) => {
        if (el.id === payload) list.splice(index, 1)
      })
      console.log({list})
      return { ...state, list };
    }
    case 'SET_COMPLETED': {
      const list = state.list.splice(0);
      list.forEach(el => {
        if (el.id === payload) el.completed = true
      })
      return { ...state, list };
    }
    default:
      return state;
  }
}
