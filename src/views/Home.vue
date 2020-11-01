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
          src="@/assets/images/icons/primary-cat.png"
          alt="somi"
        />
        <span class="pc-title__text">{{ getProjectTitle() }}</span>
      </div>
      <div class="mobile-title mobile-visible-block-only">
        <div class="mobile-title__wrap-icon">
          <img
            class="mobile-title__wrap-icon__icon"
            src="@/assets/images/icons/primary-cat.png"
            alt="somi"
          />
        </div>
        <h2 class="title-text font-bold">
          SOMI'S<br />DIARY
        </h2>
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
        &__inner {
            .pc-title {
                text-align: right;
                margin-bottom: 25px;
                margin-right: 80px;
                &__icon {
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                }
                &__text {
                    color: $sd-blue;
                    font-size: 60px;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                }
            }
            .mobile-title {
                &__wrap-icon {
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
                }
                .title-text {
                    color: $sd-blue;
                    font-size: 60px;
                    text-align: center;
                    padding: 20px 0;
                    letter-spacing: 2px;
                }
            }
            .sub-title {
                text-align: right;
                margin-right: 80px;
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
