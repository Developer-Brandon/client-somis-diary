// import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'

const state = () => ({
  headerType: '',
  pageType: '',
  heroColorHexCode: '#06468E',
})
const getters = {
  headerType: (state) => state.headerType,
  pageType: (state) => state.pageType,
  heroColor: (state) => state.heroColor,
}
const mutations = {
  setHeaderTypeState(state, params) {
    state.headerType = params.headerType
  },
  setPageTypeState(state, params) {
    state.pageType = params.pageType
  },
  judgeHeroColor(state) {
    switch (state.pageType) {
      case PageState.DEFAULT:
        state.heroColorHexCode = '#06468E'
        break
      case PageState.ARRANGE_DIARY:
        state.heroColorHexCode = '#353535'
        break
      case PageState.NOTICE:
        // TODO: hero color가 생기면 교체 예정입니다.
        state.heroColorHexCode = '#06468E'
        break
      case PageState.COMMUNITY:
        // TODO: hero color가 생기면 교체 예정입니다.
        state.heroColorHexCode = '#06468E'
        break
      default:
        state.heroColorHexCode = '#06468E'
        break
    }
  },
}
const actions = {
  SET_HEADER_STATE: ({ commit }, params) => new Promise((resolve) => {
    commit('setHeaderTypeState', params)
    resolve()
  }),
  SET_PAGE_STATE: ({ commit }, params) => new Promise((resolve) => {
    commit('setPageTypeState', params)
    commit('judgeHeroColor')
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
