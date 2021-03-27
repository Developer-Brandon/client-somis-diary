<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="cat-type-list-modal sd-block-select"
    >
      <div class="cat-type-list-modal__inner"
           :class="{
          'page-state-default': isPageStateDefault || values.check.isPageStateDefault,
          'page-state-arrange-diary': isPageStateArrangeDiary || values.check.isPageStateArrangeDiary,
          'page-state-notice': isPageStateNotice || values.check.isPageStateNotice,
          'page-state-community': isPageStateCommunity || values.check.isPageStateCommunity,
        }"
      >
        <div class="cat-type-list-modal__inner__contents">
          <div class="search-bar">
            <div
              class="wrap-image"
            >
              <img
                class="searching-icon"
                src="@/assets/images/icons/searching.png"
                alt="searching-image"
              />
            </div>
            <div class="wrap-searching-input">
              <input
                v-model="keyword"
                placeholder="고양이종을 입력해주세요"
                maxlength="20"
                class="name-input sd-input"
                type="text"
                @keyup.enter="searching"
              />
            </div>
            <div class="wrap-searching-button">
              <button
                class="sd-positive-button searching"
                @click.stop="searching"
              >
                검색
              </button>
            </div>
          </div>

          <sd-clear-both />
          <div
            v-if="catTypeList.length === 0"
            class="no-result"
          >
            <p class="no-result__contents">
              검색 결과가 <br />없습니다
            </p>
          </div>
          <div
            v-else
            class="list"
          ></div>
          <div
            class="confirm-button"
          >
            <button
              class="sd-positive-button confirm"
              @click.stop="confirm"
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
import { EventBus } from '@/assets/js/plugin/eventBus'
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'

export default {
  name: 'CatTypeListModal',
  components: {
    SdClearBoth,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
          isPageStateDefault: false,
          isPageStateArrangeDiary: false,
          isPageStateNotice: false,
          isPageStateCommunity: false,
        },
      },
      enums: {
        headerState: HeaderState,
        pageState: PageState,
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
    // State
    headerState() {
      return this.$store.getters['home/headerType']
    },
    pageState() {
      return this.$store.getters['home/pageType']
    },
    // Judgement between State and Enum
    isPageStateDefault() {
      return this.pageState === this.enums.pageState.DEFAULT
    },
    isPageStateArrangeDiary() {
      return this.pageState === this.enums.pageState.ARRANGE_DIARY
    },
    isPageStateNotice() {
      return this.pageState === this.enums.pageState.NOTICE
    },
    isPageStateCommunity() {
      return this.pageState === this.enums.pageState.COMMUNITY
    },
  },
  created() {
    EventBus.$on('globalHeaderColorWatcher', (headerType) => this.changeModalBackgroundColor(headerType))
  },
  methods: {
    changeModalBackgroundColor(headerType) {
      switch (headerType.name) {
        case 'DEFAULT':
          this.values.check.isPageStateDefault = true
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = false
          return null
        case 'ARRANGE_DIARY':
          this.values.check.isPageStateDefault = false
          this.values.check.isPageStateArrangeDiary = true
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = false
          return null
        case 'NOTICE':
          this.values.check.isPageStateDefault = false
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = true
          this.values.check.isPageStateCommunity = false
          return null
        case 'COMMUNITY':
          this.values.check.isPageStateDefault = false
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = true
          return null
        default:
          this.values.check.isPageStateDefault = true
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = false
          return null
      }
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
    confirm() {
      this.close()
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Utils
    .change-font-size-to-small {
        font-size: 20px !important;
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
            width: 315px;
            height: 350px;
            padding: 30px;
            background-color: $sd-blue;
            border-radius: 15px;
            overflow: visible;
            @media (max-width: $screen-mobile) {
                width: 85%;
                overflow-x: hidden;
                height: 400px;
            }
            &__contents {
                position: relative;
                height: 100%;
                .search-bar {
                    .wrap-image {
                        display:inline-block;
                        line-height: 30px;
                        vertical-align: middle;
                        padding-right: 10px;
                        .searching-icon {
                            width: 30px !important;
                            height: 30px !important;
                        }
                    }
                    .wrap-searching-input {
                        display:inline-block;
                        line-height: 30px;
                        vertical-align: middle;
                        width: calc(100% - 90px);
                        padding-right: 10px;
                        .contents {
                            text-align: center;
                            color: $sd-ivory;
                            font-size: 25px;
                            @media (max-width: $screen-mobile) {
                                font-size: 18px;
                                padding: 10px 0;
                            }
                        }
                    }
                    .wrap-searching-button {
                        display:inline-block;
                        width: 50px;
                        line-height: 30px;
                        vertical-align: middle;
                        .searching {
                            width: 50px;
                            height: 33px;
                        }
                    }
                }
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
                }
                .list {
                }
                .confirm-button {
                    .confirm {
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
