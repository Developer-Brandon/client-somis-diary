import { HeaderType } from '@/assets/js/enums/HeaderType'

const state = () => ({
  headerType: HeaderType.WIDE,
})
const getters = {
  headerType: (state) => state.headerType,
}
const mutations = {
  setHeaderTypeState(state, params) {
    state.headerType = params.headerType
  },
}
const actions = {
  SET_HEADER_STATE: ({ commit }, params) => new Promise((resolve) => {
    commit('setHeaderTypeState', params)
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
