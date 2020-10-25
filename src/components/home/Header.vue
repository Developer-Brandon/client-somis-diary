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
      <hamburger-button />
    </div>
  </section>
</template>

<script>
import HamburgerButton from '@/components/home/HamburgerButton.vue'
import { HeaderType } from '@/assets/js/enums/HeaderType'
import SdClearBoth from '@/components/util/SdClearBoth.vue'

export default {
  name: 'Header',
  components: {
    HamburgerButton,
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
  },
}
</script>

<style lang="scss" scoped>
    $max-width:400px;

    // @Classes
    .header {
        &__pc {
            position: relative;
            max-width: $max-width;
            width: $max-width;
            height: 100vh;
            background-color: $sd-blue;
            border: 0;
            padding: 50px 30px;
            float: left;
            transition: 0.5s;
            @media (max-width: $screen-mobile) {
            }
            &.wide {
                max-width: $max-width;
                width: $max-width;
                padding: 50px 70px !important;
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
                    margin-bottom: 50px;
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
                        text-align: right;
                        p {
                            color: $sd-white;
                            font-size: 30px;
                            line-height: 45px;
                            letter-spacing: -0.1px;
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
                            line-height: 45px;
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
                position: relative;
                display: block;
                width: 100%;
                height: 65px;
                margin: 0 auto;
                padding: 0 20px;
            }
            // Import Hamburger button(slider)
        }
    }
</style>
