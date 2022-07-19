import {combineReducers} from '@reduxjs/toolkit';
import reducers from './pokemon/reducers';

export default combineReducers({
  pokemon: reducers,
});
