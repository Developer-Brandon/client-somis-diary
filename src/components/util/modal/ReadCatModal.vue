<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="cat-type-list-modal sd-block-select"
    >
      <div class="cat-type-list-modal__inner">
        <div class="cat-type-list-modal__inner__contents">
          <sd-clear-both />
          <div
            v-if="catTypeList.length === 0"
            class="no-result"
          >
            <p class="no-result__contents">
              등록된 반려묘가<br class="mobile-visible-block-only" />없습니다
            </p>
            <button class="no-result__cat-publish-button sd-positive-button">
              반려묘 등록하기
            </button>
          </div>
          <div
            v-else
            class="wrap-list"
          >
            <ul class="list">
              <li
                v-for="(cat, index) in catTypeList"
                :key="index"
                class="list__item"
                :class="{'add-selected-item-style':index === values.readCatListState.selectedItemIndex}"
                @click="clickReadCatListItem(cat)"
              >
                {{ cat.name }}
              </li>
            </ul>
          </div>
          <div
            class="wrap-close-button"
          >
            <button
              class="sd-positive-button close"
              @click.stop="close"
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
import SdClearBoth from '@/components/util/SdClearBoth.vue'

export default {
  name: 'CatTypeListModal',
  components: {
    SdClearBoth,
  },
  data() {
    return {
      values: {
        readCatListState: {
          selectedItemIndex: -1,
        },
        check: {
          lifeCycle: false,
        },
      },
    }
  },
  computed: {
    keyword: {
      set(keyword) {
        this.$store.dispatch('catTypeList/SET_SEARCH_KEYWORD', { keyword })
      },
      get() {
        return this.$store.getters['catTypeList/searchedCatName']
      },
    },
    catTypeList() {
      return this.$store.getters['catTypeList/catTypeList']
    },
  },
  methods: {
    clickReadCatListItem(catObject) {
      this.values.readCatListState.selectedItemIndex = catObject.index
    },
    searching() {
      const searchingKeyword = this.keyword
      this.$store.dispatch('catTypeList/SEARCHING_CAT_TYPE', { searchingKeyword })
        .then(() => {
          // TODO: 검색하고 할일이 있다면 처리
        })
    },
    close() {
      this.values.check.lifeCycle = false
    },
    show() {
      this.values.check.lifeCycle = true
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Utils
    .change-font-size-to-small {
        font-size: 20px !important;
    }

    .add-selected-item-style {
        background-color: $sd-ivory;
        color: $sd-blue;
        opacity: 0.5;
    }

    // @Classes;
    .cat-type-list-modal {
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
            width: 350px;
            height: 350px;
            padding: 30px;
            background-color: $sd-blue;
            border-radius: 15px;
            overflow: visible;
            @media (max-width: $screen-mobile) {
                width: 90%;
                overflow-x: hidden;
                height: 400px;
            }
            &__contents {
                position: relative;
                height: 100%;
                .no-result {
                    display: block;
                    position: relative;
                    cursor: default;
                    width: 100%;
                    height: 200px;
                    @media (max-width: $screen-mobile) {
                        height: 240px;
                    }
                    &__contents {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        margin: 0 auto;
                        color: $sd-ivory;
                        font-size: 18px;
                        text-align: center;
                        @media (max-width: $screen-mobile) {
                            font-size: 25px;
                        }
                    }
                    &__cat-publish-button {
                        padding-top: 20px;
                        padding-bottom: 20px;
                        font-size: 20px;
                        text-align: center;
                        @media (max-width: $screen-mobile) {
                            font-size: 18px;
                        }
                    }
                }
                .list {

                }
                .wrap-close-button {
                    .close {
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        width: 120px;
                        height: 45px;
                        float: right;
                        clear: right;
                        @media (max-width: $screen-mobile) {
                            width: 100%;
                            height: 50px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
