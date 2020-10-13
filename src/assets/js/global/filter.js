import Vue from 'vue'

Vue.filter('globalFilter', (str) => {
  console.log(str)
})
