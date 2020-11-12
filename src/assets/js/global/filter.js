import Vue from 'vue'

Vue.filter('ValidateCatSpecies', (str) => {
  if (!str) {
    return '길냥이'
  }
  return str
})

Vue.filter('ValidateCatIntroduce', (str) => {
  if (!str) {
    return '특이사항 없음'
  }
  return str
})
