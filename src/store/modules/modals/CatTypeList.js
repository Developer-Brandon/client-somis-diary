const state = () => ({
  searchedCatName: '',
  catTypeList: [],
})
const getters = {
  searchedCatName: (state) => state.searchedCatName,
  catTypeList: (state) => state.catTypeList,
}
const mutations = {
  setSearchedCatName(state, params) {
    state.searchedCatName = params.searchedCatName
  },
  setCatTypeList(state, params) {
    state.catTypeList = params.catTypeList
  },
}
const actions = {
  SET_SEARCH_KEYWORD: ({ commit }, params) => new Promise((resolve) => {
    // TODO: '확인'버튼을 누르면 키워드를 검색하도록 구현
    commit('setSearchedCatName', params)
    // TODO: 검색결과에 해당하는 List가 내려온다면, List를 set하도록 구현
    // commit('setCatTypeList', params)
    resolve()
  }),
  SEARCHING_CAT_TYPE: ({ commit }) => new Promise((resolve) => {
    // TODO: 검색의 결과로 내려온 결과 리스트들을 아래에 setting
    commit('setCatTypeList')
    resolve()
  }),
  // SET_CAT_TYPE_LIST: ({ commit }, params) => new Promise((resolve) => {
  //   // TODO:
  //   commit('setCatTypeList', params)
  //   resolve()
  // }),
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
