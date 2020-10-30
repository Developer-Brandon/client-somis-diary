const state = () => ({
  title: '',
  dateTime: '',
  contents: '',
})
const getters = {
  title: (state) => state.title,
  dateTime: (state) => state.dateTime,
  contents: (state) => state.contents,
}
const mutations = {
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
  SET_TITLE: ({ commit, params }) => new Promise((resolve) => {
    commit('setTitle', params)
    resolve()
  }),
  SET_DATETIME: ({ commit, params }) => new Promise((resolve) => {
    commit('setDateTime', params)
    resolve()
  }),
  SET_CONTENTS: ({ commit, params }) => new Promise((resolve) => {
    commit('setContents', params)
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
