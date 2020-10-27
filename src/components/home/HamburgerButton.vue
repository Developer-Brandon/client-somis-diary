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
            src="@/assets/images/icons/ol-cat-house.png"
          />
        </router-link>
      </p>
    </div>
    <router-link
      class="menus-from-hb"
      to="/Products"
    >
      <span>
        Write diary
      </span>
    </router-link>
    <router-link
      class="menus-from-hb font-regular"
      to="/About"
    >
      <span>
        Arrange<br />diary
      </span>
    </router-link>
    <router-link
      class="menus-from-hb font-regular"
      to="/Notice"
    >
      <span>
        Notice
      </span>
    </router-link>
    <router-link
      class="menus-from-hb font-regular"
      to="/Community"
    >
      <span>
        Community
      </span>
    </router-link>
    <div class="slider__footer">
      <div class="login-section">
        <div
          class="sign-up-text menus-from-hb"
          @click="callSignUpPopUp"
        >
          <span class="font-bold">
            Sign Up
          </span>
        </div>
        <div
          class="sign-in-text menus-from-hb"
          @click="callSignInPopUp"
        >
          <span class="font-bold">
            Sign In
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
import { Slide } from 'vue-burger-menu'

export default {
  name: 'HamburgerButton',
  components: {
    Slide,
  },
  methods: {
    handleOpenMenu() {
    },
    handleCloseMenu() {
    },
    callSignInPopUp() {
      // TODO: 로그인 모달
    },
    callSignUpPopUp() {
      // TODO: 회원가입 모달
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
                right: 20px;
                bottom: 115px;
                .sign-up-text {
                    padding-bottom: 15px;
                    color: $sd-white;
                    font-size: 20px;
                }
                .sign-in-text {
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
