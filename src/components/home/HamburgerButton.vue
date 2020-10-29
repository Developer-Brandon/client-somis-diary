<template>
  <Slide
    width="150"
    :close-on-navigation="true"
    disable-esc
    @openMenu="handleOpenMenu"
    @closeMenu="handleCloseMenu"
  >
    <div class="slider__header">
      <p class="slider__header__main-title">
        <router-link
          class="menus font-regular"
          to="/"
        >
          <img
            class="logo-by-hb"
            :alt="getCommonAnnouncement()"
            src="@/assets/images/icons/home-icon.png"
          />
        </router-link>
      </p>
    </div>
    <span
      class="menus-from-hb"
      @click="callWriteDiaryModal"
    >
      <span>
        Write diary
      </span>
    </span>
    <span
      class="menus-from-hb font-regular"
      @click="routing(enums.pageState.ARRANGE_DIARY)"
    >
      <span>
        Arrange<br />diary
      </span>
    </span>
    <span
      class="menus-from-hb font-regular"
      @click="routing(enums.pageState.NOTICE)"
    >
      <span>
        Notice
      </span>
    </span>
    <span
      class="menus-from-hb font-regular"
      @click="routing(enums.pageState.COMMUNITY)"
    >
      <span>
        Community
      </span>
    </span>
    <div class="slider__footer">
      <div class="login-section">
        <div
          class="sign-in-text menus-from-hb"
          @click="callSignInModal"
        >
          <span class="font-bold">
            Sign In
          </span>
        </div>
        <div
          class="sign-up-text menus-from-hb"
          @click="callSignUpModal"
        >
          <span class="font-bold">
            Sign Up
          </span>
        </div>
      </div>
      <div class="sns-channels">
        <div class="wrap-sns-logo">
          <img
            class="logo"
            alt="인스타그램"
            src="@/assets/images/sns/icon-instagram.png"
            @click="goInstagram"
          />
        </div>
        <div class="wrap-sns-logo">
          <img
            class="logo"
            alt="네이버 블로그"
            src="@/assets/images/sns/icon-naverblog.png"
            @click="goNaverBlog"
          />
        </div>
        <div class="wrap-sns-logo">
          <img
            class="logo"
            alt="카카오톡"
            src="@/assets/images/sns/icon-kakaotalk.png"
            @click="goKakaotalkChannel"
          />
        </div>
      </div>
    </div>
  </Slide>
</template>

<script>
import { EventBus } from '@/assets/js/plugin/eventBus'
import { Slide } from 'vue-burger-menu'
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'

export default {
  name: 'HamburgerButton',
  components: {
    Slide,
  },
  data() {
    return {
      enums: {
        pageState: PageState,
        headerState: HeaderState,
      },
    }
  },
  computed: {
    isClientLogin() {
      return this.$store.getters['login/isClientLogin']
    },
    getWhetherCatExist() {
      return this.$store.getters['login/getWhetherCatExist']
    },
  },
  methods: {
    handleOpenMenu() {
    },
    handleCloseMenu() {
    },
    callWriteDiaryModal() {
      if (this.isClientLogin) {
        if (this.getWhetherCatExist) {
          EventBus.$emit('callWriteCatDiaryModal')
        } else {
          EventBus.$emit('callMustEstablishCatAnnounceModal')
          // EventBus.$emit('callEstablishCatModal')
        }
      } else {
        EventBus.$emit('callSignInModal')
      }
    },
    routing(pageEnum) {
      switch (pageEnum) {
        case this.enums.pageState.ARRANGE_DIARY:
          if (this.isClientLogin) {
            return this.$router.push('/ArrangeDiary')
          } else {
            return EventBus.$emit('callSignInModal')
          }
        case this.enums.pageState.NOTICE:
          return this.$router.push('/Notice')
        case this.enums.pageState.COMMUNITY:
          return this.$router.push('/Community')
        default:
          if (this.$router.history.current.path !== '/') {
            return this.$router.push('/')
          } else {
            return ''
          }
      }
    },
    callSignInModal() {
      EventBus.$emit('callSignInModal')
    },
    callSignUpModal() {
      EventBus.$emit('callSignUpModal')
    },
    callSignOut() {
      return new Promise((resolve) => {
        this.$store.dispatch('login/REQUEST_LOGOUT')
          .then(() => {
            resolve()
          })
      })
    },
    goInstagram() {
    },
    goNaverBlog() {
    },
    goKakaotalkChannel() {
    },
  },
}
</script>

<style lang="scss" scoped>

    // @Local Utils
    .menus-from-hb {
        margin-top: 5px;
        margin-bottom: 5px;
        text-align: center;
        font-size: 20px;
    }

    // @Classes
    .slider {
        position: relative;
        &__header {
            @media (max-width: $screen-mobile) {
                text-align: center;
            }
            &__main-title {
                @media (max-width: $screen-mobile) {
                    margin: 0 auto;
                    padding-bottom: 10px;
                }
                #home-from-hb {
                    .logo-by-hb {
                        @media (max-width: $screen-mobile) {
                            width: 75px !important;
                            height: 75px !important;
                            margin-bottom: 5px;
                        }
                    }
                }
            }
        }
        &__footer {
            @media (max-width: $screen-mobile) {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 150px;
                height: 100px;
                border-top: 1px dotted $sd-white;
            }
            .login-section {
                display: block !important;
                position: absolute !important;
                right: 25px;
                bottom: 115px;
                text-align: center;
                .sign-up-text {
                    color: $sd-white;
                    font-size: 20px;
                }
                .sign-in-text {
                    padding-bottom: 10px;
                    font-size: 20px;
                    color: $sd-white;
                }
            }
            .sns-channels {
                @media (max-width: $screen-mobile) {
                    width: 120px;
                    height: 45px;
                    padding-top: 10px;
                    margin: 0 auto;
                }
                .wrap-sns-logo {
                    @media (max-width: $screen-mobile) {
                        display: inline-block;
                        float: right;
                    }
                    .logo {
                        @media (max-width: $screen-mobile) {
                            width: 40px;
                            height: 40px;
                            margin-right: 10px;
                            transition: 0.3s;
                        }
                        &:last-child {
                            @media (max-width: $screen-mobile) {
                                margin-right: 0;
                            }
                        }
                        &:hover {
                            @media (max-width: $screen-mobile) {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
