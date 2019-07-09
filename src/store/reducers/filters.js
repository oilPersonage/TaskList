const initState = {
  field: 'reset',
  sorted: false,
};

export default function (state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'FILTERS_TASK': {
      const field = payload;
      return { ...state, field };
    }
    default:
      return state;
  }
}
