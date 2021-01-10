<template>
  <div id="app">
    <div class="container sd-block-select">
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
    <sd-simple-modal ref="sdSimpleModal" />
    <sd-simple-confirm-modal ref="sdSimpleConfirmModal" />
    <cat-type-list-modal ref="catTypeListModal" />
    <my-cat-list-modal ref="myCatListModal"/>
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
import SdSimpleModal from '@/components/util/modal/SdSimpleModal.vue'
import SdSimpleConfirmModal from '@/components/util/modal/SdSimpleConfirmModal.vue'
import CatTypeListModal from '@/components/util/modal/CatTypeListModal.vue'
import MyCatListModal from '@/components/arrangeDiary/modal/MyCatListModal.vue'

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
    SdSimpleModal,
    SdSimpleConfirmModal,
    CatTypeListModal,
    MyCatListModal,
  },
  mounted() {
    EventBus.$on('callSignUpModal', () => this.$refs.signUpClientModal.show('간편하게 회원가입 해보라냥!'))
    EventBus.$on('callSignInModal', () => this.$refs.signInClientModal.show('로그인해달라냥~'))
    EventBus.$on('callMustAddCatAnnounceModal', () => this.$refs.mustAddCatAnnounceModal.show('먼저 반려냥이를 <br class="mobile-visible-block-only"/>등록해야한다냥~!<br />등록하겠냥?'))
    EventBus.$on('callAddCatModal', () => this.$refs.addCatModal.show())
    EventBus.$on('callSummaryAddedCatModal', (message) => this.$refs.summaryAddedCatModal.show(message))
    EventBus.$on('callWriteCatDiaryModal', () => this.$refs.writeCatDiaryModal.show())
    EventBus.$on('callSdSimpleModal', (message) => this.$refs.sdSimpleModal.show(message))
    EventBus.$on('callSdSimpleConfirmModal', (type, message) => this.$refs.sdSimpleConfirmModal.show(type, message))
    EventBus.$on('callCatTypeListModal', () => this.$refs.catTypeListModal.show())
    EventBus.$on('callMyCatListModal', () => this.$refs.myCatListModal.show())
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
