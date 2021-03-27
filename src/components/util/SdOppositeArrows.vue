<template>
  <div
    v-show="values.check.lifeCycle"
    class="opposite-arrows"
    :class="{
      'page-state-default': isPageStateDefault || values.check.isPageStateDefault,
      'page-state-arrange-diary': isPageStateArrangeDiary || values.check.isPageStateArrangeDiary,
      'page-state-notice': isPageStateNotice || values.check.isPageStateNotice,
      'page-state-community': isPageStateCommunity || values.check.isPageStateCommunity,
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
import { EventBus } from '@/assets/js/plugin/eventBus'
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'

export default {
  name: 'SdOppositeArrows',
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
          isPageStateDefault: false,
          isPageStateArrangeDiary: false,
          isPageStateNotice: false,
          isPageStateCommunity: false,
        },
      },
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
  created() {
    EventBus.$on('globalHeaderTypeWatcher', () => this.clickChangeHeaderStateButton())
    EventBus.$on('globalHeaderColorWatcher', (headerType) => this.changeArrowBackgroundColor(headerType))
  },
  mounted() {
    this.clickChangeHeaderStateButton()
    this.changeArrowBackgroundColor(this.pageState)
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
        .then(() => {
          this.values.check.lifeCycle = true
        })
    },
    changeArrowBackgroundColor(headerType) {
      switch (headerType.name) {
        case 'DEFAULT':
          this.values.check.isPageStateDefault = true
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = false
          this.values.check.lifeCycle = true
          return null
        case 'ARRANGE_DIARY':
          this.values.check.isPageStateDefault = false
          this.values.check.isPageStateArrangeDiary = true
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = false
          this.values.check.lifeCycle = true
          return null
        case 'NOTICE':
          this.values.check.isPageStateDefault = false
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = true
          this.values.check.isPageStateCommunity = false
          this.values.check.lifeCycle = true
          return null
        case 'COMMUNITY':
          this.values.check.isPageStateDefault = false
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = true
          this.values.check.lifeCycle = true
          return null
        default:
          this.values.check.isPageStateDefault = true
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = false
          this.values.check.lifeCycle = true
          return null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  // @Classes;
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
