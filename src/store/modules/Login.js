// const loginAPI = '/login'

const state = () => ({
  // 1. COOKIE에 accessToken이 있는지 없는지 체크. 모든것이 accessToken cookie에서부터 시작됨
  // 2. 만약 accessToken이 없으면, 로그인 창을 띄워주어야 한다.
  // 3. 로그인이 되어있는 상태라면 관리해야 될 것이
  // 4. Header의  Sign in, Sign up <-> Log out 보여지는 글자들 변환
  // 5. Write diary 클릭시 매번 검사
  // 6. Arrange diary 클릭시 매번 검사
  // 7. Write diary 클릭시 로그인 되어있으면 고양이 목록 가져와야 함
  accessToken: false, // TODO: cookie에서 끌어오게 개발 예정
})
const getters = {
  isClientLogin: (state) => !!state.accessToken,
  getAccessToken: (state) => state.accessToken,
}
const mutations = {
  setAccessToken(state, params) {
    state.accessToken = params.accessToken
  },
}
const actions = {
  REQUEST_LOGIN: ({ commit }) => new Promise((resolve) => {
    const params = {
      accessToken: '1234123450',
    }
    commit('setAccessToken', params)
    resolve()
  }),
  // SET_ACCESS_TOKEN: ({ commit }) => new Promise((resolve) => {
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
