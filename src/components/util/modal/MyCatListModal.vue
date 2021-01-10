<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="my-cat-list-modal"
    >
      <div class="my-cat-list-modal__inner">
        <div class="my-cat-list-modal__inner__header">
          <div class="wrap-img">
            <img
              class="sensitive-cat-icon"
              src="@/assets/images/icon/sensitive-cat"
              alt="섬세한고양이"
            />
          </div>
        </div>
        <div class="my-cat-list-modal__inner__contents">
          <div class="wrap-list">
            <ul
              v-for="(cat, index) in myCatList"
              :key="index"
              class="list"
            >
              <li
                class="list__item"
                @click="clickCat(selectedCat)"
              >
                {{ cat.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'MyCatListModal',
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
      },
    }
  },
  computed: {
    myCatList() {
      return this.$store.getters['diary/myCatList']
    },
  },
  methods: {
    clickCat(selectedCat) {
      this.$store.dispatch('diary/SET_SELECTED_CAT', { selectedCat })
        .then(() => {
          this.close()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    show() {
      this.$store.dispatch('diary/CALL_MY_CAT_LIST')
        .then(() => {
          this.values.check.lifeCycle = true
        })
        .catch((error) => {
          console.log(error)
          this.values.check.lifeCycle = false
        })
    },
    close() {
      this.values.check.lifeCycle = false
    },
  },
}
</script>

<style type="scss" scoped>
    // @Local Utils
    // @Classes
    .my-cat-list-modal {
        &__inner {
            &__contents {
                .wrap-list {

                }
            }

        }
    }
</style>
