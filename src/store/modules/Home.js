import { HeaderState } from '@/assets/js/enums/HeaderState'

const state = () => ({
  headerType: HeaderState.WIDE,
})
const getters = {
  headerType: (state) => state.headerType,
}
const mutations = {
  setHeaderStateState(state, params) {
    state.headerType = params.headerType
  },
}
const actions = {
  SET_HEADER_STATE: ({ commit }, params) => new Promise((resolve) => {
    commit('setHeaderStateState', params)
    resolve()
  }),
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
