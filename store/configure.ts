import { Context, createWrapper } from 'next-redux-wrapper';
import { AnyAction, Store, createStore } from 'redux';

export interface State {}

const reducer = (state: State, action: AnyAction) => {
  switch (action.type) {
    case 'tmp':
      return { ...state, action: 't' };

    default:
      return state;
  }
};

const makeStore = (context: Context) => createStore(reducer);

const wrapper = createWrapper<Store<State>>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
