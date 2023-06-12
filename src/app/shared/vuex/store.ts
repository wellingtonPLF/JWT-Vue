// @ts-ignore
import { createStore } from 'vuex';
import MyReducer from './reducers'

const store = createStore({
  modules: {
    myReducer: MyReducer
  }
});

export default store
