<template>
  <div>
    <section
      v-show="values.check.lifeCycle"
      onmousedown="return false"
      class="notice sd-common-page"
      :class="{
        'sd-wide-width': headerState === enums.headerState.WIDE,
        'sd-strait-width': headerState === enums.headerState.STRAIT,
      }"
    >
      <div
        class="notice__inner sd-common-page__inner"
      >
        <sd-opposite-arrows />
      </div>
    </section>
  </div>
</template>

<script>
import { HeaderState } from '@/assets/js/enums/HeaderState'
import SdOppositeArrows from '@/components/util/SdOppositeArrows.vue'

export default {
  name: 'Notice',
  components: {
    SdOppositeArrows,
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
      this.values.check.lifeCycle = true
    })
  },
}
</script>

<style lang="scss" scoped>
  .notice {
    &__inner {
    }
  }
</style>
