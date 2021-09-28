import { createStore, combineReducers } from "redux";

import reduceCounter from "./modules/counter/reducer";

const reducers = combineReducers({result: reduceCounter})

const store = createStore(reducers)

export default store