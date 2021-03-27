<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="wrap-sign-up-modal"
    >
      <div
        class="wrap-sign-up-modal__inner"
        :class="{
          'page-state-default': isPageStateDefault || values.check.isPageStateDefault,
          'page-state-arrange-diary': isPageStateArrangeDiary || values.check.isPageStateArrangeDiary,
          'page-state-notice': isPageStateNotice || values.check.isPageStateNotice,
          'page-state-community': isPageStateCommunity || values.check.isPageStateCommunity,
        }"
      >
        <div class="wrap-image">
          <img
            src="@/assets/images/icons/wonder-cat.png"
            alt="sign-up-image"
          />
        </div>
        <div class="wrap-message">
          <p class="contents">
            {{ values.string.message }}
          </p>
        </div>
        <div class="wrap-auth-buttons">
          <img
            class="google-auth-button"
            src="@/assets/images/icons/google-icon.png"
            alt="google"
            @click="googleSignUp"
          />
          <img
            class="insta-auth-button"
            src="@/assets/images/icons/instagram-icon.png"
            alt="insta"
            @click="instaSignUp"
          />
          <img
            class="twitter-auth-button"
            src="@/assets/images/icons/twitter-icon.png"
            alt="twitter"
            @click="twitterSignUp"
          />
        </div>
        <div
          class="wrap-already-have-an-account"
        >
          <p
            class="wrap-already-have-an-account__contents"
            @click="callSignInModal"
          >
            로그인
          </p>
          <p
            class="close-button"
            @click="close"
          >
            닫기
          </p>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { EventBus } from '@/assets/js/plugin/eventBus'
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'

export default {
  name: 'SingUpClientModal',
  data() {
    return {
      values: {
        string: {
          message: '',
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
    show(message) {
      this.values.check.lifeCycle = true
      this.values.string.message = message
    },
    googleSignUp() {
      // TODO: 구글 Auth login 구현 예정, 로그인이 완료되면 추가정보를 입력할 수 있도록 도와야 함
    },
    instaSignUp() {
      // TODO: 인스타 Auth login 구현 예정, 로그인이 완료되면 추가정보를 입력할 수 있도록 도와야 함
    },
    twitterSignUp() {
      // TODO: 트위터 Auth login 구현 예정, 로그인이 완료되면 추가정보를 입력할 수 있도록 도와야 함
    },
    callSignInModal() {
      this.close()
      EventBus.$emit('callSignInModal')
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Classes;
    .wrap-sign-up-modal {
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
            padding: 15px;
        }
        &__inner {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 500px;
            height: 300px;
            padding: 30px;
            background-color: $sd-blue;
            border-radius: 15px;
            overflow: visible;
            @media (max-width: $screen-mobile) {
                width: 90%;
                height: 280px;
                max-height: 280px;
                padding: 15px;
                overflow-x: hidden;
            }
            .wrap-image {
                text-align: center;
                img {
                    padding-bottom: 20px;
                }
            }
            .wrap-message {
                margin-bottom: 20px;
                .contents {
                    text-align: center;
                    color: $sd-ivory;
                    font-size: 24px;
                    @media (max-width: $screen-mobile) {
                        font-size: 18px;
                    }
                }
            }
            .wrap-auth-buttons {
                text-align: center;
                margin-bottom: 20px;
                .google-auth-button {
                    cursor: pointer;
                    margin-right: 25px;
                    border: $sd-yellow;
                }
                .insta-auth-button {
                    cursor: pointer;
                    margin-right: 25px;
                }
                .twitter-auth-button {
                    cursor: pointer;
                }
            }
            .wrap-already-have-an-account {
                width: 100%;
                &__contents {
                    width: 50%;
                    padding-left: 20px;
                    display: block;
                    float: left;
                    cursor: pointer;
                    color: $sd-ivory;
                    text-align: left;
                    font-size: 20px;
                }
                .close-button {
                    width: 50%;
                    padding-right: 20px;
                    float: right;
                    display: block;
                    cursor: pointer;
                    text-align: right;
                    color: $sd-ivory;
                    padding-bottom: 3px;
                    font-size: 20px;
                }
            }
        }
    }
</style>
