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
  diaryListType: '',
  diaryList: [],
})
const getters = {
  previewCat: (state) => state.previewCat,
  title: (state) => state.title,
  dateTime: (state) => state.dateTime,
  contents: (state) => state.contents,
  diaryListType: (state) => state.diaryListType,
  diaryList: (state) => state.diaryList,
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
  clearAllData(state) {
    state.previewCat = ''
    state.title = ''
    state.dateTime = ''
    state.contents = ''
  },
  setDiaryListType(state, params) {
    state.diaryListType = params.diaryListType
  },
  setDiaryList(state, params) {
    console.log(params)
    state.diaryList = [{
      index: 0,
      title: '첫번째 일기입니다',
      contents: '첫번째 일기의 글입니다',
      registeredDate: '2020-01-01',
    }, {
      index: 1,
      title: '두번째 일기입니다',
      contents: '두번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 2,
      title: '세번째 일기입니다',
      contents: '세번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 3,
      title: '네번째 일기입니다',
      contents: '네번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 4,
      title: '다섯번째 일기입니다',
      contents: '다섯번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 5,
      title: '여섯번째 일기입니다',
      contents: '여섯번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 6,
      title: '일곱번째 일기입니다',
      contents: '일곱번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    },
    {
      index: 7,
      title: '여덟번째 일기입니다',
      contents: '여덟번째 공지사항의 글입니다',
      registeredDate: '2020-01-01',
    }]
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
  CLEAR_ALL_DATA: ({ commit }, params) => new Promise((resolve) => {
    commit('', params)
    resolve()
  }),
  SET_DIARY_LIST_TYPE: ({ commit }, params) => new Promise((resolve) => {
    commit('setDiaryListType', params)
    resolve()
  }),
  CALL_DIARY_LIST: ({ commit }, params) => new Promise((resolve) => {
    commit('setDiaryList', params)
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
