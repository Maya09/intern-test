const initialState = {
  inputValue: ''
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'search':
      return {state};
    default:
      return state;
  }

};

export default search;
