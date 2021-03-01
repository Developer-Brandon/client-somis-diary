import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'

// TODO: 아래 두개의 state들이 중요한데, 새로고침하면 날라가는 상황이니 이 부분에 대한 대책이 필요합니다.
// 정말 Cookie 밖에 없는건지 검토해봐야 합니다.
const state = () => ({
  headerType: HeaderState.WIDE,
  pageType: PageState.DEFAULT,
})
const getters = {
  headerType: (state) => state.headerType,
  pageType: (state) => state.pageType,
}
const mutations = {
  setHeaderTypeState(state, params) {
    state.headerType = params.headerType
  },
  setPageTypeState(state, params) {
    state.pageType = params.pageType
  },
}
const actions = {
  SET_HEADER_STATE: ({ commit }, params) => new Promise((resolve) => {
    commit('setHeaderTypeState', params)
    resolve()
  }),
  SET_PAGE_STATE: ({ commit }, params) => new Promise((resolve) => {
    commit('setPageTypeState', params)
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
