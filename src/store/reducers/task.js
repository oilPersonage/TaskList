const initState = {
  list: [],
};

export default function (state = initState, action) {
  const { type, paylaod } = action;
  console.log(paylaod, type)
  switch (type) {
    case 'ADD_TASK': {
      const newState = state.splice(0);
      newState.push(paylaod);
      return { ...state, ...newState };
    }
    default:
      return state;
  }
}
