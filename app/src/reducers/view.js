import {SET_VIEW} from '../constants/actionTypes';
import {POSSIBLE_VIEWS, DEFAULT_VIEW} from '../constants/views';


const view = (state = DEFAULT_VIEW, action) => {
  switch (action.type) {
    case SET_VIEW:
      return action.view;
    default:
      return state;
  }
}

export default view;
