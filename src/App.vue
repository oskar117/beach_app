<template>
  <div id="app">
    <v-ons-page>
      <v-ons-toolbar></v-ons-toolbar>
      <h1>daszke nie ma i {{test}}</h1>
    </v-ons-page>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      test: this.$store.state.test
    }
  },
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
