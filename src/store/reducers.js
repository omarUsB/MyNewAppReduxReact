const initial = {
  liststg: [],
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case 'adding':
      return {
        ...state,
        liststg: [...state.liststg, action.payload],
      };
    case 'removing':
      return {
        ...state,
        liststg: state.liststg.filter((elm) => elm.id !== action.payload),
      };
    case 'updating':
      const { id, updstg } = action.payload;
      return {
        ...state,
        liststg: state.liststg.map((elm) => (elm.id === id ? updstg : elm)),
      };
   
    default:
      return state;
  }
};

export default reducer;

  