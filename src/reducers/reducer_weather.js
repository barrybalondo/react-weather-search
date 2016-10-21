import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  //console.log('Action received', action);

  switch(action.type){
    case FETCH_WEATHER: 
      //return state.concat([ actoon.payload.data ]);  // careful mutating state by setting it directly
      // CAREFUL OF MUTATION
      return [ action.payload.data, ...state ];  // <-- ES6 SYNTAX, Nearly Identical
  }
  return state;
}