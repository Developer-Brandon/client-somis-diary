<template>
  <div id="app">
    <div class="container">
      <div class="left-side-header">
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
        <sd-clear-both />
      </div>
      <div class="right-side-contents">
        <div class="right-side-contents__inner">
          <img
            class="left-arrow"
            src="@/assets/images/icons/left-and-right-arrow.png"
            alt="left arrow"
          />
          <div class="title">
            <img
              class="title__icon"
              src="@/assets/images/icons/primary-cat.png"
              alt="somi"
            />
            <span class="title__text">DIARY OF SOMI</span>
          </div>
          <div class="sub-title">
            <p>
              You would record for your cat<br />
              This diary can record history of your cat<br />
              Record your cat's childhood memory for future
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SdClearBoth from '@/components/util/SdClearBoth.vue'

export default {
  name: 'App',
  components: {
    SdClearBoth,
  },
}
</script>

<style lang="scss">
    #app {
        .container {
            overflow-x: hidden;
            overflow-y: auto;
            max-width: 100%;
            margin: 0;
            &.modal-has-opened {
                -ms-overflow-style: none;
                overflow-y: hidden;
                &::-webkit-scrollbar {
                    display: none;
                    width: 0;
                    background: transparent;
                }
            }
            &.modal-has-close {
                height: 100%;
                overflow-y: auto;
            }
            .left-side-header {
                position: relative;
                width: 400px;
                height: 100vh;
                background-color: $sd-blue;
                padding: 50px 30px;
                float: left;
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
                            line-height: 35px;
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
            .right-side-contents {
                float: right;
                width: calc(100% - 400px);
                height: 100vh;
                background-color: $sd-yellow;
                background-image: url('~@/assets/images/main/banner/silent-cat.png');
                &__inner {
                    position: relative;
                    padding: 50px;
                    .left-arrow {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        width: 50px;
                        height: 50px;
                        cursor: pointer;
                    }
                    .title {
                        text-align: right;
                        margin-bottom: 15px;
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
                    .sub-title {
                        text-align: right;
                        margin-right: 80px;
                        p {
                            color: $sd-white;
                            font-size: 20px;
                            font-weight: 700;
                            line-height: 25px;
                        }
                    }
                }
            }
        }
    }
</style>
