import Vue from 'vue'
import Vuex from 'vuex'

import arrangeDiary from './modules/ArrangeDiary'
import community from './modules/Community'
import join from './modules/Join'
import login from './modules/Login'
import notice from './modules/Notice'
import writeDiary from './modules/WriteDiary'

Vue.use(Vuex)

const entryPointOfStore = () => new Vuex.Store({
  namespaced: true,
  modules: {
    app,
    arrangeDiary,
    community,
    join,
    login,
    notice,
    writeDiary
  },
})

export default entryPointOfStore()
