<template>
  <section>
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
        <p @click="callWriteDiaryModal">
          <span class="font-bold">W</span>rite diary
        </p>
        <p @click="routing(enums.pageState.ARRANGE_DIARY)">
          <span class="font-bold">A</span>rrange diary
        </p>
        <p @click="routing(enums.pageState.NOTICE)">
          <span class="font-bold">N</span>otice
        </p>
        <p @click="routing(enums.pageState.COMMUNITY)">
          <span class="font-bold">C</span>ommunity
        </p>
      </div>
    </div>
    <sd-clear-both />
    <div class="login-menu">
      <div class="login-menu__inner">
        <p>Sign in</p>
        <p>Sign up</p>
      </div>
    </div>
  </section>
</template>

<script>
import SdClearBoth from '@/components/util/SdClearBoth.vue'

export default {
  name: 'StraitHeader',
  components: {
    SdClearBoth,
  },
  methods: {
    callWriteDiaryModal() {},
    routing(pageEnum) {
      switch (pageEnum) {
        case this.enums.pageState.ARRANGE_DIARY:
          return false
        case this.enums.pageState.NOTICE:
          return false
        case this.enums.pageState.COMMUNITY:
          return false
        default:
          return false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
        margin-bottom: 60px;
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
</style>
