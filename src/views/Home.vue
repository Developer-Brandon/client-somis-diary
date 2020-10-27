<template>
  <section
    v-show="values.check.lifeCycle"
    onmousedown="return false"
    class="home"
    :class="{
      'wide-width': headerState === enums.headerState.WIDE,
      'strait-width': headerState === enums.headerState.STRAIT,
    }"
  >
    <div
      class="home__inner"
    >
      <div
        class="opposite-arrows"
        @click="clickHeaderChangeButton"
      >
        <img
          class="left-arrow desktop-visible-block-only"
          src="@/assets/images/icons/opposite-arrows.png"
          alt="left arrow"
        />
      </div>
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

export default {
  name: 'Home',
  components: {},
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
  methods: {
    clickHeaderChangeButton() {
      let headerType
      if (this.headerState === HeaderState.WIDE) {
        headerType = HeaderState.STRAIT
      } else {
        headerType = HeaderState.WIDE
      }
      this.$store.dispatch('home/SET_HEADER_STATE', { headerType })
    },
  },
}
</script>

<style lang="scss" scoped>
    $max-width: 400px;

    // @Local util
    .wide-width {
        width: calc(100% - 400px) !important;
        @media (max-width: $screen-mobile) {
            width: 100% !important;
        }
    }

    .strait-width {
        width: calc(100% - 100px) !important;
        @media (max-width: $screen-mobile) {
            width: 100% !important;
        }
    }

    // @Classes
    .home {
        float: right;
        width: calc(100% - 400px);
        height: 100vh;
        background-color: $sd-yellow;
        background-image: url('~@/assets/images/main/banner/silent-cat.png');
        @media (max-width: $screen-mobile) {
            background-position: 20% center;
        }
        &__inner {
            position: relative;
            padding: 50px;
            @media (max-width: $screen-mobile) {
                padding: 65px 50px 0 50px;
            }
            .opposite-arrows {
                position: absolute;
                display: flex;
                align-items: center;
                top: 0;
                left: 0;
                width: 50px;
                height: 50px;
                cursor: pointer;
                background-color: $sd-blue;
                border-radius: 0 0 10px 0;
                @media (max-width: $screen-mobile) {
                    display: none;
                }
                .left-arrow {
                  width: 27px;
                  height: 27px;
                  margin: 0 auto;
                  transition: 0.1s;
                  &:hover {
                      -webkit-transform: scale(1.1);
                      -moz-transform: scale(1.1);
                      -ms-transform: scale(1.1);
                      transform: scale(1.1);
                    }
                }
            }

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
                    color: $sd-white;
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 25px;
                    @media (max-width: $screen-mobile) {
                        font-size: 15px;
                    }
                }
            }
        }
    }
</style>
