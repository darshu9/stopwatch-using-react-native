import { combineReducers } from 'redux';

// Imports: Reducers
import HomeScreenReducer from '../../HomeScreen/HomeScreenReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    HomeScreenReducer: HomeScreenReducer,
});

// Exports
export default rootReducer;