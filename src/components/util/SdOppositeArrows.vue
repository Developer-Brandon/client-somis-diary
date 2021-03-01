<template>
  <div
    class="opposite-arrows"
    :class="{
      'page-state-default': isPageStateDefault,
      'page-state-arrange-diary': isPageStateArrangeDiary,
      'page-state-notice': isPageStateNotice,
      'page-state-community': isPageStateCommunity,
    }"
    @click="clickChangeHeaderStateButton"
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
import { PageState } from '@/assets/js/enums/PageState'

export default {
  name: 'SdOppositeArrows',
  data() {
    return {
      enums: {
        headerState: HeaderState,
        pageState: PageState,
      },
    }
  },
  computed: {
    // State
    headerState() {
      return this.$store.getters['home/headerType']
    },
    pageState() {
      return this.$store.getters['home/pageType']
    },
    // Judgement between State and Enum
    isHeaderStateWide() {
      return this.headerState === this.enums.headerState.WIDE
    },
    isHeaderStateStrait() {
      return this.headerState === this.enums.headerState.STRAIT
    },
    isPageStateDefault() {
      return this.pageState === this.enums.pageState.DEFAULT
    },
    isPageStateArrangeDiary() {
      return this.pageState === this.enums.pageState.ARRANGE_DIARY
    },
    isPageStateNotice() {
      return this.pageState === this.enums.pageState.NOTICE
    },
    isPageStateCommunity() {
      return this.pageState === this.enums.pageState.COMMUNITY
    },
  },
  methods: {
    clickChangeHeaderStateButton() {
      let headerType
      if (this.headerState === this.enums.headerState.WIDE) {
        headerType = this.enums.headerState.STRAIT
      } else {
        headerType = this.enums.headerState.WIDE
      }
      this.$store.dispatch('home/SET_HEADER_STATE', { headerType })
    },
  },
}
</script>

<style lang="scss" scoped>
  // @Local Util
  .page-state-default {
    background-color: $sd-blue !important;
  }

  .page-state-arrange-diary {
    background-color: $sd-deep-gray !important;
  }

  .page-state-notice {
    background-color: $sd-blue !important;
  }

  .page-state-question-and-answer {
    background-color: $sd-blue !important;
  }

  // @Classes
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
