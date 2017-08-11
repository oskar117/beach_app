<template>
    <v-ons-page>
      <v-ons-toolbar>
        <div id="toolbar" class="center">
          Bicz_Aplikacja
        </div>
      </v-ons-toolbar>

      <v-ons-tabbar position="auto"
        :index="active_index_local"
        :tabs="tabs"
        :visible="true"
        @update="active_index_local = $event"
      >
      </v-ons-tabbar>
    </v-ons-page>
</template>

<script>

import List from './List'
import Map from './Map'

import { mapState } from 'vuex'

export default {
  name: 'tabsview-page',
  data () {
    return {
      active_index_local: this.$store.state.active_index,
      tabs: [
        {
          icon: 'md-calendar-text',
          label: 'Lista',
          page: List
        },
        {
          icon: 'md-earth',
          label: 'Mapa',
          page: Map
        }
      ]
    }
  },
  computed: mapState({
    active_index_global: 'active_index'
  }),
  watch: {
    active_index_local () {
      if (this.active_index_local !== this.active_index_global) {
        this.$store.commit('set_active_index', this.active_index_local)
      }
    },
    active_index_global () {
      if (this.active_index_global !== this.active_index_local) {
        this.active_index_local = this.active_index_global
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
