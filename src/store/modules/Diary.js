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
  SAVE_DIARY: ({ commit, params }) => new Promise((resolve) => {
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
