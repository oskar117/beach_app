<template>
  <v-ons-page>
    <v-ons-list>
      <template v-for="place, name_of_place in places">
        <v-ons-list-header>{{name_of_place}}</v-ons-list-header>
        <template v-for="data, key in place">
          <v-ons-list-item>
            {{key}}: {{data}}<br>
          </v-ons-list-item>
        </template>
      </template>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      places: {
        'Gdańsk': {
          temperature: '12',
          weather: 'clouds'
        },
        'Gdynia': {
          temperature: '40',
          weather: 'sunny'
        },
        'Sopot': {}
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
