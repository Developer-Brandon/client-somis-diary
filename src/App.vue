<template>
  <div id="app">
    <div class="container">
      <sd-header />
      <router-view />
    </div>
    <whether-login-state-modal ref="whtherLoginStateModal" />
    <sign-in-client-modal ref="signInClientModal" />
    <sign-up-client-modal ref="signUpClientModal" />
    <must-add-cat-announce-modal ref="mustAddCatAnnounceModal" />
    <add-cat-modal ref="addCatModal" />
    <summary-added-cat-modal ref="summaryAddedCatModal" />
    <write-cat-diary-modal ref="writeCatDiaryModal" />
  </div>
</template>

<script>
import { EventBus } from '@/assets/js/plugin/eventBus'
import SdHeader from '@/components/home/Header.vue'
import SignInClientModal from '@/components/util/modal/SignInClientModal.vue'
import SignUpClientModal from '@/components/util/modal/SignUpClientModal.vue'
import WhetherLoginStateModal from '@/components/util/modal/WhetherLoginStateModal.vue'
import MustAddCatAnnounceModal from '@/components/util/modal/MustAddCatAnnounceModal.vue'
import AddCatModal from '@/components/util/modal/AddCatModal.vue'
import SummaryAddedCatModal from '@/components/util/modal/SummaryAddedCatModal.vue'
import WriteCatDiaryModal from '@/components/util/modal/WriteCatDiaryModal.vue'

export default {
  name: 'App',
  components: {
    WhetherLoginStateModal,
    SdHeader,
    SignInClientModal,
    SignUpClientModal,
    MustAddCatAnnounceModal,
    AddCatModal,
    SummaryAddedCatModal,
    WriteCatDiaryModal,
  },
  mounted() {
    EventBus.$on('callSignUpModal', () => this.$refs.signUpClientModal.show('간편하게 회원가입 해보라냥!'))
    EventBus.$on('callSignInModal', () => this.$refs.signInClientModal.show('로그인해달라냥~'))
    EventBus.$on('callMustAddCatAnnounceModal', () => this.$refs.mustAddCatAnnounceModal.show('먼저 반려냥이를 등록해야한다냥~!\n등록하겠냥?'))
    EventBus.$on('callAddCatModal', () => this.$refs.addCatModal.show())
    EventBus.$on('callSummaryAddedCatModal', () => this.$refs.summaryAddedCatModal.show())
    EventBus.$on('callWriteCatDiaryModal', () => this.$refs.writeCatDiaryModal.show())
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
