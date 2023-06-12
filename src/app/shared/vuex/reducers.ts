import ResultAction from "./actions"

const INITIAL_STATE = "null"

const MyReducer = {
  namespaced: true,
  state: {
    result: INITIAL_STATE
  },
  mutations: {
    myResult (state: any, payload: any) {
      state.result = payload
    }
  },
  actions: ResultAction
}

export default MyReducer
