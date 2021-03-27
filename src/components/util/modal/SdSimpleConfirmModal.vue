<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="sd-simple-confirm-modal"
    >
      <div
        class="sd-simple-confirm-modal__inner"
        :class="{
          'page-state-default': isPageStateDefault || values.check.isPageStateDefault,
          'page-state-arrange-diary': isPageStateArrangeDiary || values.check.isPageStateArrangeDiary,
          'page-state-notice': isPageStateNotice || values.check.isPageStateNotice,
          'page-state-community': isPageStateCommunity || values.check.isPageStateCommunity,
        }"
      >
        <div class="sd-simple-confirm-modal__inner__contents">
          <div
            class="wrap-image"
          >
            <img
              class="icon"
              src="@/assets/images/icons/icon-information.png"
              alt="sign-in-image"
            />
          </div>
          <div class="wrap-message">
            <p
              class="contents"
              :class="{'change-font-size-to-small': values.string.message.length >= 20}"
              v-html="values.string.message"
            >
            </p>
          </div>
          <div
            class="add-button"
          >
            <button
              class="sd-positive-reversal-button cancel"
              @click.stop="cancel"
            >
              취소
            </button>
            <button
              class="sd-negative-reversal-button confirm"
              @click.stop="confirm"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { SimpleConfirmModalState } from '@/assets/js/enums/SimpleConfirmModalState'
import { EventBus } from '@/assets/js/plugin/eventBus'
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'

export default {
  name: 'SdSimpleConfirmModal',
  data() {
    return {
      values: {
        string: {
          message: '',
        },
        boolean: {
          confirm: false,
        },
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
    close() {
      this.values.check.lifeCycle = false
    },
    show(type, message) {
      this.values.check.lifeCycle = true
      this.values.string.message = message
    },
    cancel() {
      this.values.boolean.confirm = false
      this.close()
    },
    confirm() {
      this.values.boolean.confirm = true
      if (SimpleConfirmModalState.URL) EventBus.$emit('callAgreementPageAtTheNewTab')
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
    .sd-simple-confirm-modal {
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
            height: 275px;
            padding: 30px;
            background-color: $sd-white;
            border-radius: 15px;
            overflow: visible;
            @media (max-width: $screen-mobile) {
                width: 90%;
                overflow-x: hidden;
                height: 315px;
            }
            &__contents {
                position: relative;
                height: 100%;
                .wrap-image {
                    text-align: center;
                    .icon {
                        width: 50px !important;
                        height: 80px !important;
                    }
                    img {
                        padding-bottom: 25px;
                    }
                }
                .wrap-message {
                    margin-bottom: 40px;
                    .contents {
                        text-align: center;
                        color: $sd-white;
                        font-size: 25px;
                        @media (max-width: $screen-mobile) {
                            font-size: 18px;
                        }
                    }
                }
                .add-button {
                    .cancel {
                        position: absolute;
                        bottom: 0;
                        right: 130px;
                        width: 120px;
                        height: 45px;
                        float: right;
                        clear: right;
                        @media (max-width: $screen-mobile) {
                            position: relative;
                            width: 100%;
                            height: 50px;
                            clear: both;
                            bottom: auto;
                            right: auto;
                            margin-bottom: 10px;
                        }
                    }
                    .confirm {
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        width: 120px;
                        height: 45px;
                        float: right;
                        clear: right;
                        @media (max-width: $screen-mobile) {
                            position: relative;
                            width: 100%;
                            height: 50px;
                            clear: both;
                            bottom: auto;
                            right: auto;
                        }
                    }
                }
            }
        }
    }
</style>
