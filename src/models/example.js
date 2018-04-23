
import {query} from '../services/example.js';
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch',payload:{page:1}});
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const data = yield call(query,payload)
      console.log('data',data);
      yield put({ type: 'save',payload:data });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
