<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="my-cat-list-modal"
    >
      <div class="my-cat-list-modal__inner">
        <div class="my-cat-list-modal__inner__header">
          <div class="wrap-image">
            <img
              class="sensitive-cat-icon"
              src="@/assets/images/icons/sensitive-cat.png"
              alt="섬세한고양이"
            />
          </div>
        </div>
        <div class="my-cat-list-modal__inner__contents">
          <div
            id="scroll-element"
            class="wrap-list"
          >
            <ul
              v-for="(cat, index) in myCatList"
              :key="index"
              class="list"
            >
              <li
                class="list__item"
                @click="clickCat(cat)"
              >
                {{ cat.name }}
              </li>
            </ul>
          </div>
          <div class="wrap-button">
            <button
              class="sd-transparent-button wrap-button__close"
              @click="clickClose"
            >
              닫기
            </button>
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
      return this.$store.getters['arrangeDiary/catList']
    },
  },
  methods: {
    moveModalScrollToTop() {
      const scroll = document.getElementById('scroll-element')
      scroll.scrollTop = 0
    },
    clickCat(selectedCat) {
      this.$store.dispatch('arrangeDiary/SET_SELECTED_CAT', { selectedCat })
        .then(() => {
          this.close()
        })
    },
    clickClose() {
      this.close()
    },
    show() {
      this.values.check.lifeCycle = true
      this.$nextTick(() => {
        this.moveModalScrollToTop()
      })
    },
    close() {
      this.values.check.lifeCycle = false
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Utils
    // @Classes
    .my-cat-list-modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: $sd-transparent-black;
        padding-top: 15px;
        padding-bottom: 15px;
        @media (max-width: $screen-mobile) {
            padding: 25px;
        }
        &__inner {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 300px;
            height: 500px;
            padding: 30px;
            background-color: $sd-blue;
            border-radius: 15px;
            overflow: visible;
            @media (max-width: $screen-mobile) {
                width: 90%;
                overflow: hidden;
                height: 400px;
            }
            &__header {
                padding-top: 5px;
                .wrap-image {
                    text-align: center;
                    .sensitive-cat-icon {
                        width: 40px;
                        height: 40px;
                    }
                }
            }
            &__contents {
                padding-top: 20px;
                width: 100%;
                height: 100%;
                .wrap-list {
                    height: 70%;
                    overflow-y: auto;
                    &:hover {
                        cursor: pointer;
                    }
                    &::-webkit-scrollbar {
                        width: 8px;
                    }
                    &::-webkit-scrollbar-thumb {
                        background: $sd-gray;
                        transition: 0.3s;
                        &:hover {
                            background: $sd-opacity-deep-gray;
                        }
                    }
                    .list {
                        cursor: default;
                        &__item {
                            text-align: center;
                            padding-top: 10px;
                            padding-bottom: 10px;
                            font-size: 20px;
                            color: $sd-white;
                            &:hover {
                                cursor: pointer;
                                background-color: $sd-transparent-white;
                                transition: 0.1s;
                            }
                        }
                    }
                }
                .wrap-button {
                    position: absolute;
                    right: 30px;
                    bottom: 30px;
                    &__close {
                        width: 70px;
                        height: 40px;
                        border: 1px $sd-white solid;
                        border-radius: 3px;
                    }
                }
            }
        }
    }
</style>
