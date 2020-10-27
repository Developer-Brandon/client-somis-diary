<template>
  <section class="wrap-wide-header">
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
    <auth-section />
  </section>
</template>

<script>
import SdClearBoth from '@/components/util/SdClearBoth.vue'
import AuthSection from '@/components/home/AuthSection.vue'

export default {
  name: 'StraitHeader',
  components: {
    SdClearBoth,
    AuthSection,
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
    callWriteDiaryModal() {
      if (this.isClientLogin) {
        // 2.로그인이 되어있다면,
        // 2-(1).기존에 등록되어있는 고양이가 있는지 없는지 확인하는 모달 필요
        if (this.getWhetherCatExist) {
          // 2-(1)-1.기존에 등록되어있는 고양이가 있다면 다이어리 쓰는 모달 띄우기
        } else {
          // 2-(1)-2.기존에 등록되어있는 고양이가 없다면 고양이를 등록해야 한다는 모달을 띄우기
          // 고양이를 등록하겠다고 한다면, 고양이를 등록할 수 있는 모달 띄우기
        }
      } else {
        // 1.로그인이 안되어있다면, 로그인 창 띄우기

      }
    },
    routing(pageEnum) {
      switch (pageEnum) {
        case this.enums.pageState.ARRANGE_DIARY:
          return this.$router.push('/ArrangeDiary')
        case this.enums.pageState.NOTICE:
          return this.$router.push('/Notice')
        case this.enums.pageState.COMMUNITY:
          return this.$router.push('/Community')
        default:
          return this.$router.push('/ArrangeDiary')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
    .wrap-wide-header {
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
            position: absolute;
            bottom: 170px;
            right: 35px;
            &__inner {
                width: max-content;
                float: right;
                text-align: right;
                p {
                    color: $sd-white;
                    font-size: 30px;
                    line-height: 45px;
                    letter-spacing: -0.1px;
                    transition: 0.3s;
                    &:hover {
                      cursor: pointer;
                      letter-spacing: 1px;
                    }
                }
            }
            &:after {
                clear: both;
                content: "";
                display: table;
            }
        }
    }
</style>
