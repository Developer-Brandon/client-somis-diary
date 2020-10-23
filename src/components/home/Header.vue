<template>
  <section class="header">
    <div
      class="header__pc desktop-visible-block-only"
      :class="{
        'wide': headerTypeState === enums.headerType.WIDE,
        'strait': headerTypeState === enums.headerType.STRAIT,
      }"
    >
      <div v-if="headerTypeState === enums.headerType.WIDE">
        <div class="title">
          <div class="title__inner">
            <h3 class="font-semi-bold">
              소미일기
            </h3>
          </div>
        </div>
        <sd-clear-both />
        <div class="description">
          <div class="description__inner">
            <p>간단하게</p><br />
            <p>쉽게</p><br />
            <p>꾸준하게</p><br />
            <p>작성할 수 있는</p><br />
            <p class="font-bold">
              반려묘 다이어리
            </p><br />
          </div>
        </div>
        <sd-clear-both />
        <div class="menu">
          <div class="menu__inner">
            <p><span class="font-bold">W</span>rite diary</p>
            <p><span class="font-bold">A</span>rrange diary</p>
            <p><span class="font-bold">N</span>otice</p>
            <p><span class="font-bold">C</span>ommunity</p>
          </div>
        </div>
        <sd-clear-both />
        <div class="login-menu">
          <div class="login-menu__inner">
            <p>Sign in</p>
            <p>Sign up</p>
          </div>
        </div>
      </div>
      <div v-else-if="headerTypeState === enums.headerType.STRAIT">
        <img
          class="write-diary-icon"
          src="@/assets/images/icons/writer-cat.png"
          alt="일기쓰기"
        />
        <br />
        <br />
        <img
          class="arrange-diary-icon"
          src="@/assets/images/icons/cat-milk.png"
          alt="목록읽기"
        />
        <br />
        <br />
        <img
          class="arrange-diary-icon"
          src="@/assets/images/icons/wonder-cat.png"
          alt="공지사항"
        />
        <br />
        <br />
        <img
          class="arrange-diary-icon"
          src="@/assets/images/icons/winter-cat.png"
          alt="커뮤니티"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    <div
      class="header__mobile mobile-visible-block-only"
    >
      <Slide
        width="150"
        :close-on-navigation="true"
        disable-esc
        @openMenu="handleOpenMenu"
        @closeMenu="handleCloseMenu"
      >
        <!--<div class="slider__header">-->
        <!--<p class="slider__header__main-title">-->
        <!--<router-link-->
        <!--id="home-from-hb"-->
        <!--class="menus font-regular"-->
        <!--to="/"-->
        <!--&gt;-->
        <!--<img-->
        <!--class="logo-by-hb"-->
        <!--:alt="getCommonAnnouncement()"-->
        <!--src="@/assets/images/logos/main-title-logo-black-version.png"-->
        <!--/>-->
        <!--</router-link>-->
        <!--</p>-->
        <!--</div>-->
        <!--<router-link-->
        <!--id="products-from-hb"-->
        <!--class="menus-from-hb"-->
        <!--to="/Products"-->
        <!--&gt;-->
        <!--<span>-->
        <!--시공소개-->
        <!--</span>-->
        <!--</router-link>-->
        <!--<router-link-->
        <!--id="introduce-company-from-hb"-->
        <!--class="menus-from-hb font-regular"-->
        <!--to="/About"-->
        <!--&gt;-->
        <!--<span>-->
        <!--회사소개-->
        <!--</span>-->
        <!--</router-link>-->
        <!--<router-link-->
        <!--id="notice-from-hb"-->
        <!--class="menus-from-hb font-regular"-->
        <!--to="/Notice"-->
        <!--&gt;-->
        <!--<span>-->
        <!--공지사항-->
        <!--</span>-->
        <!--</router-link>-->
        <!--<span-->
        <!--id="inquiry-from-hb"-->
        <!--class="menus-from-hb font-regular"-->
        <!--@click="callInquiryEstimateModal"-->
        <!--&gt;-->
        <!--<span>-->
        <!--견적문의-->
        <!--</span>-->
        <!--</span>-->
        <!--<div class="slider__footer">-->
        <!--<div class="sns-channels">-->
        <!--<div class="wrap-sns-logo">-->
        <!--<img-->
        <!--class="logo"-->
        <!--alt="인스타그램"-->
        <!--src="@/assets/images/logos/sns/icon-instagram.png"-->
        <!--@click="goInstagram"-->
        <!--/>-->
        <!--</div>-->
        <!--<div class="wrap-sns-logo">-->
        <!--<img-->
        <!--class="logo"-->
        <!--alt="네이버 블로그"-->
        <!--src="@/assets/images/logos/sns/icon-naverblog.png"-->
        <!--@click="goNaverBlog"-->
        <!--/>-->
        <!--</div>-->
        <!--<div class="wrap-sns-logo">-->
        <!--<img-->
        <!--class="logo"-->
        <!--alt="카카오톡"-->
        <!--src="@/assets/images/logos/sns/icon-kakaotalk.png"-->
        <!--@click="goKakaotalkChannel"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
      </Slide>
    </div>
  </section>
</template>

<script>
import { HeaderType } from '@/assets/js/enums/HeaderType'
import SdClearBoth from '@/components/util/SdClearBoth.vue'

export default {
  name: 'Header',
  components: {
    SdClearBoth,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
      },
      enums: {
        headerType: HeaderType,
      },
    }
  },
  computed: {
    headerTypeState() {
      return this.$store.getters['home/headerType']
    },
  },
  mounted() {
  },
  methods: {
    handleOpenMenu() {},
    handleCloseMenu() {},
  },
}
</script>

<style lang="scss" scoped>
  .header{
    &__pc {
      position: relative;
      max-width: 300px;
      width: 300px;
      height: 100vh;
      background-color: $sd-blue;
      border-right: 1.5px solid $sd-ivory;
      padding: 50px 30px;
      float: left;
      transition: 0.5s;
      @media (max-width: $screen-mobile) {
      }
      &.wide {
        max-width: 300px;
        width: 300px;
        padding: 50px 30px !important;
        .title {
          margin-bottom: 30px;
          &__inner {
            width: max-content;
            border-bottom: 1px solid $sd-light-white;
            h3 {
              display: inline-block;
              color: $sd-white;
              letter-spacing: 2px;
              font-size: 20px;
              padding-bottom: 7px;
            }
          }
        }

        .description {
          display: block;
          margin-bottom: 100px;
          &__inner {
            width: max-content;
            border-bottom: 1px solid $sd-light-white;
            p {
              color: $sd-white;
              font-size: 30px;
              line-height: 30px;
              letter-spacing: 2px;
            }
          }
        }

        .menu {
          display: block;
          margin-bottom: 80px;
          &__inner {
            width: max-content;
            float: right;
            p {
              color: $sd-white;
              font-size: 25px;
              line-height: 45px;
              letter-spacing: 0.8px;
              &:hover {
                cursor: pointer;
              }
            }
          }
          &:after {
            clear: both;
            content: "";
            display: table;
          }
        }

        .login-menu {
          position: absolute;
          bottom: 50px;
          right: 30px;
          width: 50%;
          min-height: 70px;
          &__inner {
            padding-right: 10px;
            p {
              text-align: right;
              color: $sd-white;
              font-size: 25px;
              line-height: 35px;
              letter-spacing: 0.8px;
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
      &.strait {
        max-width: 100px;
        width: 100px;
        padding: 30px 10px !important;
        text-align: center;
        .write-diary-icon {
          cursor: pointer;
        }
        .arrange-diary-icon {
          cursor: pointer;
        }
      }
    }
    &__mobile {
      @media (max-width: $screen-mobile) {
        background-color: $sd-blue;
        display: block;
        width: 100%;
        height: 45px;
        margin: 0 auto;
        padding: 0 20px;
      }
    }
  }
</style>
