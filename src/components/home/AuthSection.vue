<template>
  <div
    v-show="values.lifeCycle"
    class="login-menu"
  >
    <div
      v-if="!isClientLogin"
      class="login-menu__log-out"
    >
      <div v-if="headerState === enums.headerState.WIDE">
        <p @click="callSignInModal">
          Sign in
        </p>
        <p @click="callSignUpModal">
          Sign up
        </p>
      </div>
      <div v-else-if="headerState === enums.headerState.STRAIT">
        <img
          class="sign-up-icon"
          src="@/assets/images/icons/join.png"
          alt="sign-up-image"
          @click="callSignUpModal"
        />
        <img
          class="sign-in-icon"
          src="@/assets/images/icons/log-in.png"
          alt="sign-in-image"
          @click="callSignInModal"
        />
      </div>
    </div>
    <div
      v-else-if="isClientLogin"
      class="login-menu__log-in"
    >
      <div v-if="headerState === enums.headerState.WIDE">
        <p @click="callSignOut">
          Sign out
        </p>
      </div>
      <div v-else-if="headerState === enums.headerState.STRAIT">
        <img
          class="log-out-icon"
          src="@/assets/images/icons/log-out.png"
          alt="log-out-image"
          @click="callSignOut"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { EventBus } from '@/assets/js/plugin/eventBus'

export default {
  name: 'AuthSection',
  props: {
    headerState: {
      type: Object,
      default() {
        return HeaderState.WIDE
      },
    },
  },
  data() {
    return {
      values: {
        lifeCycle: false,
      },
      enums: {
        headerState: HeaderState,
      },
    }
  },
  computed: {
    isClientLogin() {
      return this.$store.getters['login/isClientLogin']
    },
  },
  mounted() {
    this.values.lifeCycle = true
  },
  methods: {
    callSignInModal() {
      EventBus.$emit('callSignInModal')
    },
    callSignUpModal() {
      EventBus.$emit('callSignUpModal')
    },
    callSignOut() {
      return new Promise((resolve) => {
        this.$store.dispatch('login/REQUEST_LOGOUT')
          .then(() => {
            // TODO: Cookie는 store에서 파괴해주면 되고, 이외에 처리해주어야 할 부분 찾아서 처리해주기
            resolve()
          })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Classes
    .login-menu {
        position: absolute;
        bottom: 50px;
        right: 30px;
        width: 50%;
        min-height: 70px;
        &__log-out {
            padding-right: 10px;
            p {
                text-align: right;
                color: $sd-white;
                font-size: 25px;
                line-height: 45px;
                letter-spacing: 0.8px;
                transition: 0.3s;
                &:hover {
                    cursor: pointer;
                    -webkit-transform: scale(1.1);
                    -moz-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    transform: scale(1.1);
                }
            }
            .sign-up-icon {
              margin-bottom: 30px;
              cursor: pointer;
              transition: 0.3s;
              &:hover {
                cursor: pointer;
                -webkit-transform: scale(1.1);
                -moz-transform: scale(1.1);
                -ms-transform: scale(1.1);
                transform: scale(1.1);
              }
            }
            .sign-in-icon {
              cursor: pointer;
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
        &__log-in {
            padding-top: 10px;
            padding-right: 10px;
            p {
                text-align: right;
                color: $sd-white;
                font-size: 25px;
                line-height: 45px;
                letter-spacing: 0.8px;
                transition: 0.3s;
                &:hover {
                    cursor: pointer;
                    -webkit-transform: scale(1.1);
                    -moz-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    transform: scale(1.1);
                }
            }
            .log-out-icon {
                cursor: pointer;
            }
        }
    }
</style>
