import { createStore } from "redux";
import subscribersReducer from "./reducer";
/*
createStore 
If you want to use createStore without this visual deprecation warning, use the legacy_createStore import instead:

import { legacy_createStore as createStore} from 'redux'
*/

const store = createStore(subscribersReducer);

export default store;
