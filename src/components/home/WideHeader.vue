<template>
  <section>
    <img
      class="main-icon"
      src="@/assets/images/icons/home-icon.png"
      alt="메인으로"
      @click="routing"
    />
    <br />
    <br />
    <img
      class="write-diary-icon"
      src="@/assets/images/icons/writer-cat.png"
      alt="일기쓰기"
      @click="callWriteDiaryModal"
    />
    <br />
    <br />
    <img
      class="arrange-diary-icon"
      src="@/assets/images/icons/note-icon.png"
      alt="일기목록읽기"
      @click="routing(enums.pageState.ARRANGE_DIARY)"
    />
    <br />
    <br />
    <img
      class="arrange-diary-icon"
      src="@/assets/images/icons/board-icon.png"
      alt="공지사항"
      @click="routing(enums.pageState.NOTICE)"
    />
    <br />
    <br />
    <img
      class="arrange-diary-icon"
      src="@/assets/images/icons/community-icon.png"
      alt="커뮤니티"
      @click="routing(enums.pageState.COMMUNITY)"
    />
    <auth-section
      :header-state="enums.headerState.STRAIT"
    />
  </section>
</template>

<script>
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'
import { EventBus } from '@/assets/js/plugin/eventBus'
import AuthSection from '@/components/home/AuthSection.vue'

export default {
  name: 'WideHeader',
  components: {
    AuthSection,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
      },
      enums: {
        pageState: PageState,
        headerState: HeaderState,
      },
    }
  },
  computed: {
    isClientLogin() {
      return this.$store.getters['login/isClientLogin']
    },
    whetherCatExist() {
      return this.$store.getters['cat/whetherCatExist']
    },
  },
  methods: {
    callWriteDiaryModal() {
      if (this.isClientLogin) {
        if (this.whetherCatExist) {
          EventBus.$emit('callWriteCatDiaryModal')
        } else {
          EventBus.$emit('callMustAddCatAnnounceModal')
          // EventBus.$emit('callAddCatModal')
        }
      } else {
        EventBus.$emit('callSignInModal')
      }
    },
    routing(pageEnum) {
      switch (pageEnum) {
        case this.enums.pageState.ARRANGE_DIARY:
          if (this.isClientLogin) {
            return this.$router.push('/ArrangeDiary')
          } else {
            return EventBus.$emit('callSignInModal')
          }
        case this.enums.pageState.NOTICE:
          return this.$router.push('/Notice')
        case this.enums.pageState.COMMUNITY:
          return this.$router.push('/Community')
        default:
          if (this.$router.history.current.path !== '/') {
            return this.$router.push('/')
          } else {
            return ''
          }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
    .main-icon {
        margin-bottom: 30px;
    }

    img {
        transition: 0.3s;
        &:hover {
            cursor: pointer;
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }
    }
</style>
