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
        Arrange diary
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
    <span
      class="menus-from-hb font-regular"
      @click="callInquiryEstimateModal"
    >
      <span>
        Community
      </span>
    </span>
    <br />
    <br />
    <span
      class="menus-from-hb font-regular"
      @click="callSignUpModal"
    >
      <span>
        SignUp
      </span>
    </span>
    <span
      class="menus-from-hb font-regular"
      @click="callLoginModal"
    >
      <span>
        Login
      </span>
    </span>
    <div class="slider__footer">
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
    callSignUpModal() {
    },
    callLoginModal() {
    },
  },
}
</script>

<style lang="scss" scoped>
    .slider {
        position: relative;
        .menus-from-hb {
            margin-top: 5px;
            margin-bottom: 5px;
            text-align: center;
        }
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
                /*background-color: rgba(211, 211, 211, 0.4);*/
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
