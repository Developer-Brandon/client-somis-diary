import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/Home'
import community from './modules/Community'
import join from './modules/Join'
import login from './modules/Login'
import notice from './modules/Notice'
import cat from './modules/Cat'
import diary from './modules/Diary'
import arrangeDiary from './modules/ArrangeDiary'

import catTypeList from './modules/modals/CatTypeList'

Vue.use(Vuex)

const entryPointOfStore = () => new Vuex.Store({
  namespaced: true,
  modules: {
    home,
    community,
    join,
    login,
    notice,
    cat,
    diary,
    arrangeDiary,
    catTypeList,
  },
})

export default entryPointOfStore()
