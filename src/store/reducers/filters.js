const initState = {
  field: '',
  sorted: false,
};

export default function (state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'FILTERS_TASK': {
      const field = payload;
      return { ...state, field };
    }
    case 'SORTED_TASK': {
      const sorted = payload;
      return { ...state, sorted };
    }
    default:
      return state;
  }
}
