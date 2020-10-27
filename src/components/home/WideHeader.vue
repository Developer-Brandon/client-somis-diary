<template>
  <section>
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
      src="@/assets/images/icons/cat-milk.png"
      alt="목록읽기"
      @click="routing(enums.pageState.ARRANGE_DIARY)"
    />
    <br />
    <br />
    <img
      class="arrange-diary-icon"
      src="@/assets/images/icons/wonder-cat.png"
      alt="공지사항"
      @click="routing(enums.pageState.NOTICE)"
    />
    <br />
    <br />
    <img
      class="arrange-diary-icon"
      src="@/assets/images/icons/winter-cat.png"
      alt="커뮤니티"
      @click="routing(enums.pageState.COMMUNITY)"
    />
    <auth-section :header-state="enums.headerState.STRAIT" />
  </section>
</template>

<script>
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'
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
    getWhetherCatExist() {
      return this.$store.getters['login/getWhetherCatExist']
    },
  },
  methods: {
    callWriteDiaryModal() {
      if (this.isClientLogin) {
        // 2.로그인이 되어있다면,
        // 2-(1).기존에 등록되어있는 고양이가 있는지 없는지 확인하는 모달 필요
        if (this.getWhetherCatExist) {
          // 2-(1)-1.기존에 등록되어있는 고양이가 있다면 다이어리 쓰는 모달 띄우기
        } else {
          // 2-(1)-2.기존에 등록되어있는 고양이가 없다면 고양이를 등록해야 한다는 모달을 띄우기
          // 고양이를 등록하겠다고 한다면, 고양이를 등록할 수 있는 모달 띄우기
        }
      } else {
        // 1.로그인이 안되어있다면, 로그인 창 띄우기

      }
    },
    routing(pageEnum) {
      switch (pageEnum) {
        case this.enums.pageState.ARRANGE_DIARY:
          return false
        case this.enums.pageState.NOTICE:
          return false
        case this.enums.pageState.COMMUNITY:
          return false
        default:
          return false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
    .write-diary-icon {
        cursor: pointer;
    }

    .arrange-diary-icon {
        cursor: pointer;
    }
</style>
