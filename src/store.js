import {createStore} from 'redux'
import Reducers from './reducers/index';

// console.log('REDUCERS', Reducers)

export default createStore(Reducers);