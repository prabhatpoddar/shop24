import {
    applyMiddleware,
    legacy_createStore as createStore,
    compose,
    combineReducers,
  } from "redux";
  import thunk from "redux-thunk";
  
  import {reducer as userReducer} from './UserRedux/reducer'
  const rootreducer = combineReducers({
   userReducer
  });
  
  export const store = createStore(rootreducer, compose(applyMiddleware(thunk)));
  