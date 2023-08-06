import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers';

const { devToolsEnhancer } = require('@redux-devtools/extension');

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
