<template>
  <section
    v-show="values.check.lifeCycle"
    onmousedown="return false"
    class="home sd-common-page"
    :class="{
      'sd-wide-width': headerState === enums.headerState.WIDE,
      'sd-strait-width': headerState === enums.headerState.STRAIT,
    }"
  >
    <div
      class="home__inner sd-common-page__inner"
    >
      <sd-opposite-arrows />
      <div class="pc-title desktop-visible-block-only">
        <img
          class="pc-title__icon"
          src="@/assets/images/icons/somis-diary-main-icon.png"
          alt="somi"
        />
        <!--<span class="pc-title__text">{{ getProjectTitle() }}</span>-->
      </div>
      <div class="mobile-title mobile-visible-block-only">
        <!-- 혹시 몰라서 남겨둡니다 -->
        <!--<div class="mobile-title__wrap-icon">-->
        <!--<img-->
        <!--class="mobile-title__wrap-icon__icon"-->
        <!--src="@/assets/images/icons/primary-cat.png"-->
        <!--alt="somi"-->
        <!--/>-->
        <!--</div>-->
        <!--<h2 class="title-text font-bold">-->
        <!--소 미<br />일 기-->
        <!--</h2>-->
        <!--</div>-->
        <div class="mobile-title__wrap-single-icon">
          <img
            class="mobile-title__wrap-single-icon__icon"
            src="@/assets/images/icons/somis-diary-main-icon.png"
            alt="somi"
          />
        </div>
      </div>
      <div class="sub-title">
        <p v-html="getProjectExplain()"></p>
      </div>
    </div>
  </section>
</template>

<script>
import { HeaderState } from '@/assets/js/enums/HeaderState'
import SdOppositeArrows from '@/components/util/SdOppositeArrows.vue'

export default {
  name: 'Home',
  components: {
    SdOppositeArrows,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
      },
      enums: {
        headerState: HeaderState,
      },
    }
  },
  computed: {
    headerState() {
      return this.$store.getters['home/headerType']
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.values.check.lifeCycle = true
    })
  },
}
</script>

<style lang="scss" scoped>
    // @Classes
    .home {
        position: relative;
        &__inner {
            position: relative;
            .pc-title {
                text-align: center;
                margin-top: 130px;
                margin-bottom: 10px;
                &__icon {
                    width: 400px;
                    height: 400px;
                }
                /*
                  &__text {
                      color: $sd-blue;
                      font-size: 100px;
                      font-weight: 900;
                      letter-spacing: 1.5px;
                  }
                  */
            }
            .mobile-title {
                /* &__wrap-icon {
                      position: relative;
                      width: 150px;
                      height: 150px;
                      background-color: $sd-blue;
                      margin: 0 auto;
                      border-radius: 20px;
                      &__icon {
                          position: absolute;
                          left: 50%;
                          top: 50%;
                          width: 100px;
                          height: 100px;
                          transform: translate(-50%, -50%);
                      }
                  } */
                &__wrap-single-icon {
                    position: relative;
                    text-align: center;
                    &__icon {
                        width: 200px;
                        height: 200px;
                    }
                }
                .title-text {
                    color: $sd-blue;
                    text-shadow: -1px 0 $sd-deep-blue, 0 1px $sd-deep-blue, 1px 0 $sd-deep-blue, 0 -1px $sd-deep-blue;
                    font-size: 60px;
                    text-align: center;
                    padding: 20px 0;
                    letter-spacing: 2px;
                }
            }
            .sub-title {
                text-align: center;
                @media (max-width: $screen-mobile) {
                    text-align: center;
                    margin-right: 0;
                }
                p {
                    color: $sd-ivory;
                    text-shadow: -1px 0 $sd-yellow, 0 1px $sd-yellow, 1px 0 $sd-yellow, 0 -1px $sd-yellow;
                    font-size: 25px;
                    font-weight: 700;
                    line-height: 40px;
                    letter-spacing: 1px;
                    &:hover {
                        // ?
                    }
                    @media (max-width: $screen-mobile) {
                        letter-spacing: 0.5px;
                        font-size: 15px;
                        line-height: 30px;
                    }
                }
            }
        }
    }
</style>
