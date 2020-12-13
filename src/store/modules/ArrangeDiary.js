import { ArrangeState } from '@/assets/js/enums/ArrangeState'

const state = () => ({
  searchBarElements: {
    catList: [
      // {
      // index
      // name
      // birthday
      // gender
      // species
      // kg
      // introduce
      // },
      // .
      // .
      // .
    ],
    selectedCatName: '',
    startDateTime: '',
    endDateTime: '',
    searchDiaryTitle: '',
    searchDiaryContents: '',
  },
  searchDiaryTitle: '',
  arrangeDiaryList: [],
  arrangeListType: ArrangeState.NORMAL_TYPE, // NormalType 은 일반적인 게시판 리스트입니다.
})
const getters = {
  searchBarElements: (state) => state.searchBarElements,
  catList: (state) => state.searchBarElements.catList,
  arrangeListType: (state) => state.arrangeListType,
  searchDiaryTitle: (state) => state.searchBarElements.searchDiaryTitle,
  searchDiaryContents: (state) => state.searchBarElements.searchDiaryContents,
}
const mutations = {
  setSearchBarElements(state, params) {
    state.searchBarElements = params.searchBarElements
  },
  setCatList(state, params) {
    state.searchBarElements.catList = params.searchBarElements.catList
  },
  setSearchDiaryTitle(state, params) {
    // state.searchBarElements.searchDiaryTitle = params.searchDiaryTitle
    state.searchDiaryTitle = params.searchDiaryTitle
  },
  setSearchDiaryContents(state, params) {
    state.searchBarElements.searchDiaryContents = params.searchDiaryContents
  },
  clearSearchData(state) {
    state.searchBarElements = {}
  },
  clearListType(state) {
    state.arrangeListType = ArrangeState.NORMAL_TYPE
  },
}
const actions = {
  GET_CAT_LIST: ({ commit }) => new Promise((resolve) => {
    // TODO: Call cat list api
    commit('setCatList', {})
    resolve()
  }),
  SET_SEARCH_DIARY_TITLE: ({ commit }, params) => new Promise((resolve) => {
    commit('setSearchDiaryTitle', params)
    resolve()
  }),
  SET_SEARCH_DIARY_CONTENTS: ({ commit }, params) => new Promise((resolve) => {
    commit('setSearchDiaryContents', params)
    resolve()
  }),
  GET_DIARY_LIST_BY_VALUES: ({ commit }) => new Promise((resolve) => {
    commit('setSearchBarElements')
    resolve()
  }),
  CLEAR_SEARCH_DATA: ({ commit }) => new Promise((resolve) => {
    commit('clearSearchData')
    resolve()
  }),
  CLEAR_LIST_TYPE: ({ commit }) => new Promise((resolve) => {
    commit('clearListType')
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
