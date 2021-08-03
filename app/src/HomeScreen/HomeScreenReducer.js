// Initial State
const initialState = {
    lapArray: [],
  };
  
const HomeScreenReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case 'ADD_LAP': {
      return {
        ...state,
        lapArray: [action.payload,...state.lapArray],
      }
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default HomeScreenReducer;