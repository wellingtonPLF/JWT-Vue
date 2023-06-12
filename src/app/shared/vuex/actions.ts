import { ActionContext } from "vuex/types/index.js";

type MyResult = {
  value: number
}

const ResultAction = {
    setResult ({ commit } : ActionContext<string, number>, { value }: MyResult) {
      commit('myResult', value)
    }
}

export default ResultAction
  