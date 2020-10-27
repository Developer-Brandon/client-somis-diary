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
        <p @click="callSignInPopUp">
          Sign in
        </p>
        <p @click="callSignUpPopUp">
          Sign up
        </p>
      </div>
      <div v-else-if="headerState === enums.headerState.STRAIT">
        <!-- TODO: 회원가입, 로그인 아이콘 찾아서 삽입하기 -->
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
        <!-- TODO: 로그아웃 아이콘 찾아서 삽입하기 -->
      </div>
    </div>
  </div>
</template>

<script>
import { HeaderState } from '@/assets/js/enums/HeaderState'

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
    callSignInPopUp() {
      // TODO: 로그인 모달
    },
    callSignUpPopUp() {
      // TODO: 회원가입 모달
    },
    callSignOut() {
      return new Promise((resolve) => {
        this.$store.dispatch('login/REQUEST_LOGOUT')
          .then(() => {
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
                    letter-spacing: 1.2px;
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
                    letter-spacing: 1.2px;
                }
            }
        }
    }
</style>
