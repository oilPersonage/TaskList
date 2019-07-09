const initState = {
  list: [],
};

export default function (state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TASK': {
      const list = state.list.splice(0);
      list.push(payload);
      console.log(list, { ...state, list });
      return { ...state, list };
    }
    default:
      return state;
  }
}
