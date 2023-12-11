import { Context, createWrapper } from 'next-redux-wrapper';
import { AnyAction, Store, createStore } from 'redux';
import reducer from '../reducer';

export interface State {}

const makeStore = (context: Context) => createStore(reducer);

const wrapper = createWrapper<Store<State>>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
