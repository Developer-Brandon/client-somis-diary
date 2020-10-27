<template>
  <div id="app">
    <div class="container">
      <sd-header />
      <router-view />
    </div>
    <whether-login-state-modal ref="whtherLoginStateModal" />
    <sign-in-modal ref="signInModal" />
    <sign-up-modal ref="signUpModal" />
    <sign-up-client-modal ref="signUpClientModal" />
    <must-establish-cat-announce-modal ref="mustEstablishCatAnnounceModal"/>
    <establish-cat-modal ref="establishCatModal" />
    <write-cat-diary-modal ref="writeCatDiaryModal" />
  </div>
</template>

<script>
import SdHeader from '@/components/home/Header.vue'
import SignInModal from '@/components/util/modal/SignInModal.vue'
import SignUpModal from '@/components/util/modal/SignUpModal.vue'
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
    SignInModal,
    SignUpModal,
    SignUpClientModal,
    MustEstablishCatAnnounceModal,
    EstablishCatModal,
    WriteCatDiaryModal,
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
