<template>
  <div
    class="opposite-arrows"
    @click="clickHeaderChangeButton"
  >
    <img
      class="opposite-arrows-image desktop-visible-block-only"
      src="@/assets/images/icons/opposite-arrows.png"
      alt="oppositeArrowsImage"
    />
  </div>
</template>

<script>
import { HeaderState } from '@/assets/js/enums/HeaderState'

export default {
  name: 'SdOppositeArrows',
  computed: {
    headerState() {
      return this.$store.getters['home/headerType']
    },
  },
  methods: {
    clickHeaderChangeButton() {
      let headerType
      if (this.headerState === HeaderState.WIDE) {
        headerType = HeaderState.STRAIT
      } else {
        headerType = HeaderState.WIDE
      }
      this.$store.dispatch('home/SET_HEADER_STATE', { headerType })
    },
  },
}
</script>

<style lang="scss" scoped>
    .opposite-arrows {
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: $sd-blue;
        border-radius: 0 0 10px 0;
        @media (max-width: $screen-mobile) {
            display: none;
        }
        .opposite-arrows-image {
            width: 27px;
            height: 27px;
            margin: 0 auto;
            transition: 0.1s;
            &:hover {
                -webkit-transform: scale(1.1);
                -moz-transform: scale(1.1);
                -ms-transform: scale(1.1);
                transform: scale(1.1);
            }
        }
    }
</style>
