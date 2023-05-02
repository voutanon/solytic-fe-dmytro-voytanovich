import { queryLoginUser, variablesLoginUser } from "@/services/graphql"
export const state = () => ({
  tokenAuth: '',
  userInfo: {}
})
export const actions = {
  async loginUser({ commit }, { email, password }) {
    try {
      const variables = variablesLoginUser(email, password)
      const { mutate } = useMutation(queryLoginUser, { variables })
      const { data } = await mutate()
      commit('setTokenAuth', data.loginUser.accessToken.token)
      commit('setUserInfo', data.loginUser.user)
    } catch(error) {
      console.error(error)
    }
  }
  
}
export const mutations = {
  setTokenAuth(state, token) {
    state.tokenAuth = token
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  }
}
export const getters = {
  getTokenAuth(state) {
    return state.tokenAuth
  },
  getUserInfo(state) {
    return state.userInfo
  },
}
export default { state, actions, mutations, getters }
