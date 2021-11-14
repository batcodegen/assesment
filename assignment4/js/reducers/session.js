const initialState = {
  isSessionActive: false,
};

export const sessionData = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SESSION':
      return Object.assign({}, state, {
        ...state,
        isSessionActive: action.payload,
      });
    default:
      return state;
  }
};
