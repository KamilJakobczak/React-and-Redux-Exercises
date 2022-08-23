import _ from 'lodash';
import {
  CREATE_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  UPDATE_STREAM,
} from '../actions/types';

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
  }
};

export default streamReducer;
