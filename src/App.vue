<template>
  <div id="app">
    <div class="container">
      <sd-header />
      <router-view />
    </div>
    <whether-login-state-modal ref="whtherLoginStateModal" />
    <sign-in-client-modal ref="signInClientModal" />
    <sign-up-client-modal ref="signUpClientModal" />
    <must-establish-cat-announce-modal ref="mustEstablishCatAnnounceModal" />
    <establish-cat-modal ref="establishCatModal" />
    <write-cat-diary-modal ref="writeCatDiaryModal" />
  </div>
</template>

<script>
import { EventBus } from '@/assets/js/plugin/eventBus'
import SdHeader from '@/components/home/Header.vue'
import SignInClientModal from '@/components/util/modal/SignInClientModal.vue'
import SignUpClientModal from '@/components/util/modal/SignUpClientModal.vue'
import WhetherLoginStateModal from '@/components/util/modal/WhetherLoginStateModal.vue'
import MustEstablishCatAnnounceModal from '@/components/util/modal/MustEstablishCatAnnounceModal.vue'
import EstablishCatModal from '@/components/util/modal/EstablishCatModal.vue'
import WriteCatDiaryModal from '@/components/util/modal/WriteCatDiaryModal.vue'

export default {
  name: 'App',
  components: {
    WhetherLoginStateModal,
    SdHeader,
    SignInClientModal,
    SignUpClientModal,
    MustEstablishCatAnnounceModal,
    EstablishCatModal,
    WriteCatDiaryModal,
  },
  mounted() {
    EventBus.$on('callSignUpModal', () => this.$refs.signUpClientModal.show('간편하게 회원가입 해보라냥!'))
    EventBus.$on('callSignInModal', () => this.$refs.signInClientModal.show('로그인해달라냥~'))
    EventBus.$on('callMustEstablishCatAnnounceModal', () => this.$refs.mustEstablishCatAnnounceModal.show('먼저 반려냥이를 등록해야한다냥~!\n등록하겠냥?'))
    EventBus.$on('callEstablishCatModal', () => this.$refs.establishCatModal.show(null))
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
        }
    }
</style>
