import { createStore } from 'redux';
import reducer from './reducers';


const storeOm = createStore(reducer);

export default storeOm;
