import { createStore } from 'redux';
import todoApp from '../reducers/reducers';

let mystore = createStore(todoApp);
export default mystore;