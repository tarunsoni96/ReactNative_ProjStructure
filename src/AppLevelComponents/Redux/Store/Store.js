import {createStore,combineReducers} from 'redux'
import { addRemoveServiceReducer } from '../Reducers/Reducer'

const rootReducer = combineReducers({
    reducer : addRemoveServiceReducer,

})
const configureStore = () => createStore(rootReducer)

export default configureStore