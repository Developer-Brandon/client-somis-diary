const state = () => ({
  previewCat: {
    name: '',
    birthday: '',
    gender: '',
    species: '',
    kg: '',
    introduce: '',
  },
  title: '',
  dateTime: '',
  contents: '',
})
const getters = {
  previewCat: (state) => state.previewCat,
  title: (state) => state.title,
  dateTime: (state) => state.dateTime,
  contents: (state) => state.contents,
}
const mutations = {
  setPreviewCat(state, params) {
    state.previewCat = params.previewCat
  },
  setTitle(state, params) {
    state.title = params.title
  },
  setDateTime(state, params) {
    state.dateTime = params.dateTime
  },
  setContents(state, params) {
    state.contents = params.contents
  },
}
const actions = {
  SET_PREVIEW_CAT: ({ commit }, params) => new Promise((resolve) => {
    commit('setPreviewCat', params)
    resolve()
  }),
  SET_TITLE: ({ commit }, params) => new Promise((resolve) => {
    commit('setTitle', params)
    resolve()
  }),
  SET_DATETIME: ({ commit }, params) => new Promise((resolve) => {
    commit('setDateTime', params)
    resolve()
  }),
  SET_CONTENTS: ({ commit }, params) => new Promise((resolve) => {
    commit('setContents', params)
    resolve()
  }),
  SAVE_DIARY: ({ commit }, params) => new Promise((resolve) => {
    // TODO: Call save diary api
    // cat vuex에서 catId를 가져와서 save 직전에 같이 전송해야 함.
    commit('', params)
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
