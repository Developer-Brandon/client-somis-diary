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
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </section>
</template>

<script>
import { PageState } from '@/assets/js/enums/PageState'

export default {
  name: 'WideHeader',
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
      },
      enums: {
        pageState: PageState,
      },
    }
  },
  methods: {
    callWriteDiaryModal() {},
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
