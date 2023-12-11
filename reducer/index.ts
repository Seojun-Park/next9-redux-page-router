import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user, { UserProps } from './user';
import post, { PostProps } from './post';

export interface ModelProps {
  user: UserProps;
  post: PostProps;
}

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
