import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active_index: 0
  },
  mutations: {
    set_active_index (state, index) {
      state.active_index = index
    }
  }
})
