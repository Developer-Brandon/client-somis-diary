<template>
  <div>
    <!-- 만약, 이 라우터에서 일기를 쓴 경우에는 일기목록 페이지 data 들을 init 시켜주어야함 -->
    <section
      v-show="values.check.lifeCycle"
      onmousedown="return false"
      class="arrange-diary sd-common-page"
      :class="{
        'sd-wide-width': headerState === enums.headerState.WIDE,
        'sd-strait-width': headerState === enums.headerState.STRAIT,
      }"
    >
      <div
        class="arrange-diary__inner sd-common-page__inner"
      >
        <sd-opposite-arrows />
        <sd-diary-search-bar />
      </div>
    </section>
  </div>
</template>

<script>
import { HeaderState } from '@/assets/js/enums/HeaderState'
import SdOppositeArrows from '@/components/util/SdOppositeArrows.vue'
import SdDiarySearchBar from '@/components/arrangeDiary/SdDiarySearchBar.vue'

export default {
  name: 'ArrangeDiary',
  components: {
    SdOppositeArrows,
    SdDiarySearchBar,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
      },
      enums: {
        headerState: HeaderState,
      },
    }
  },
  computed: {
    headerState() {
      return this.$store.getters['home/headerType']
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.headerState === HeaderState.WIDE) {
        const headerType = HeaderState.STRAIT
        this.$store.dispatch('home/SET_HEADER_STATE', { headerType })
      }
      this.values.check.lifeCycle = true
    })
  },
}
</script>

<style lang="scss" scoped>
    .arrange-diary {
        &__inner {
            //
        }
    }
</style>
