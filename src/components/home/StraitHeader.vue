<template>
  <section class="wrap-wide-header">
    <div class="title">
      <div class="title__inner">
        <h3 class="font-semi-bold title-diary-fade-in">
          소미일기
        </h3>
      </div>
    </div>
    <sd-clear-both />
    <div
      class="description contents-diary-fade-in"
      @click="routing"
    >
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
        <p
          class="write-diary-fade-in"
          @click="callWriteDiaryModal"
        >
          <span class="font-bold">일</span>기 쓰기
        </p>
        <p
          class="arrange-diary-fade-in"
          @click="routing(enums.pageState.ARRANGE_DIARY)"
        >
          <span class="font-bold">일</span>기 목록
        </p>
        <p
          class="notice-fade-in"
          @click="routing(enums.pageState.NOTICE)"
        >
          <span class="font-bold">공</span>지
        </p>
        <p
          class="community-fade-in"
          @click="routing(enums.pageState.COMMUNITY)"
        >
          <span class="font-bold">커</span>뮤니티
        </p>
      </div>
    </div>
    <sd-clear-both />
    <auth-section />
  </section>
</template>

<script>
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'
import SdClearBoth from '@/components/util/SdClearBoth.vue'
import AuthSection from '@/components/home/AuthSection.vue'

export default {
  name: 'StraitHeader',
  components: {
    SdClearBoth,
    AuthSection,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
      },
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
    whetherCatExist() {
      return this.$store.getters['cat/whetherCatExist']
    },
  },
  methods: {
    callWriteDiaryModal() {
      this.$parent.callWriteDiaryModal()
    },
    routing(pageEnum) {
      this.$parent.routing(pageEnum)
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Utils
    .title-diary-fade-in {
        @include primary-fade-in-bottom-to-top(0.4, 0.1);
    }

    .contents-diary-fade-in {
        @include primary-fade-in-bottom-to-top(0.4, 0.1);
    }

    .write-diary-fade-in {
        @include primary-fade-in-bottom-to-top(0.4, 0.1);
    }

    .arrange-diary-fade-in {
        @include primary-fade-in-bottom-to-top(0.4, 0.3);
    }

    .notice-fade-in {
        @include primary-fade-in-bottom-to-top(0.4, 0.5);
    }

    .community-fade-in {
        @include primary-fade-in-bottom-to-top(0.4, 0.7);
    }

    // @Classes;
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
            cursor: pointer;
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
            right: 70px;
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
                        -webkit-transform: scale(1.1);
                        -moz-transform: scale(1.1);
                        -ms-transform: scale(1.1);
                        transform: scale(1.1);
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
