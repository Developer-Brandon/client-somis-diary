<template>
  <section
    v-show="values.check.lifeCycle"
    class="header"
  >
    <div
      class="header__pc desktop-visible-block-only"
      :class="{
        'wide': isHeaderStateWide,
        'strait': isHeaderStateStrait,
        'page-state-default': isPageStateDefault || values.check.isPageStateDefault,
        'page-state-arrange-diary': isPageStateArrangeDiary || values.check.isPageStateArrangeDiary,
        'page-state-notice': isPageStateNotice || values.check.isPageStateNotice,
        'page-state-community': isPageStateCommunity || values.check.isPageStateCommunity,
      }"
    >
      <div v-if="isHeaderStateWide">
        <strait-header />
      </div>
      <div v-else-if="isHeaderStateStrait">
        <wide-header />
      </div>
    </div>
    <div
      class="header__mobile mobile-visible-block-only"
    >
      <hamburger-button />
    </div>
  </section>
</template>

<script>
//
import HamburgerButton from '@/components/home/HamburgerButton.vue'
import StraitHeader from '@/components/home/StraitHeader.vue'
import WideHeader from '@/components/home/WideHeader.vue'
//
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'
//
import { EventBus } from '@/assets/js/plugin/eventBus'

export default {
  name: 'Header',
  components: {
    HamburgerButton,
    WideHeader,
    StraitHeader,
  },
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
    // Auth State
    isClientLogin() {
      return this.$store.getters['login/isClientLogin']
    },
    whetherCatExist() {
      return this.$store.getters['cat/whetherCatExist']
    },
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
    EventBus.$on('globalPageWatcher', () => this.routingPageAutomatic())
  },
  methods: {
    callWriteDiaryModal() {
      if (this.isClientLogin) {
        if (this.whetherCatExist) {
          EventBus.$emit('callWriteCatDiaryModal')
        } else {
          EventBus.$emit('callMustAddCatAnnounceModal')
        }
      } else {
        EventBus.$emit('callSignInModal')
      }
    },
    callHeaderStateForChangeArrowColor() {
      EventBus.$emit('globalHeaderWatcher')
    },
    callPageStateForChangeHeaderColor() {
      EventBus.$emit('globalHeaderColorWatcher', this.pageState)
    },
    routingPageAutomatic() {
      this.routing(this.pageState)
    },
    routing(pageEnum) {
      const pageType = pageEnum
      switch (pageType.name) {
        case 'DEFAULT':
          this.$store.dispatch('home/SET_PAGE_STATE', { pageType })
            .then(() => {
              this.values.check.isPageStateDefault = true
              this.values.check.isPageStateArrangeDiary = false
              this.values.check.isPageStateNotice = false
              this.values.check.isPageStateCommunity = false
              this.values.check.lifeCycle = true
              this.callHeaderStateForChangeArrowColor()
              this.callPageStateForChangeHeaderColor()
            })
          return this.$router.push('/')
        case 'ARRANGE_DIARY':
          if (this.isClientLogin) {
            this.$store.dispatch('home/SET_PAGE_STATE', { pageType })
              .then(() => {
                this.values.check.isPageStateDefault = false
                this.values.check.isPageStateArrangeDiary = true
                this.values.check.isPageStateNotice = false
                this.values.check.isPageStateCommunity = false
                this.values.check.lifeCycle = true
                this.callHeaderStateForChangeArrowColor()
                this.callPageStateForChangeHeaderColor()
              })
            return this.$router.push('/ArrangeDiary')
          } else {
            this.values.check.isPageStateDefault = false
            this.values.check.isPageStateArrangeDiary = true
            this.values.check.isPageStateNotice = false
            this.values.check.isPageStateCommunity = false
            this.values.check.lifeCycle = true
            this.callHeaderStateForChangeArrowColor()
            this.callPageStateForChangeHeaderColor()
            return EventBus.$emit('callSignInModal')
          }
        case 'NOTICE':
          this.$store.dispatch('home/SET_PAGE_STATE', { pageType })
            .then(() => {
              this.values.check.isPageStateDefault = false
              this.values.check.isPageStateArrangeDiary = false
              this.values.check.isPageStateNotice = true
              this.values.check.isPageStateCommunity = false
              this.values.check.lifeCycle = true
              this.callHeaderStateForChangeArrowColor()
              this.callPageStateForChangeHeaderColor()
            })
          return this.$router.push('/Notice')
        case 'COMMUNITY':
          this.$store.dispatch('home/SET_PAGE_STATE', { pageType })
            .then(() => {
              this.values.check.isPageStateDefault = false
              this.values.check.isPageStateArrangeDiary = false
              this.values.check.isPageStateNotice = false
              this.values.check.isPageStateCommunity = true
              this.values.check.lifeCycle = true
              this.callHeaderStateForChangeArrowColor()
              this.callPageStateForChangeHeaderColor()
            })
          return this.$router.push('/Community')
        default:
          this.$store.dispatch('home/SET_PAGE_STATE', { pageType })
            .then(() => {
              this.values.check.isPageStateDefault = true
              this.values.check.isPageStateArrangeDiary = false
              this.values.check.isPageStateNotice = false
              this.values.check.isPageStateCommunity = false
              this.values.check.lifeCycle = true
              this.callHeaderStateForChangeArrowColor()
              this.callPageStateForChangeHeaderColor()
            })
          return this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
    $max-width: 400px;
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

    // @Classes;
    .header {
        &__pc {
            position: relative;
            max-width: $max-width;
            width: $max-width;
            height: 100vh;
            background-color: $sd-blue;
            border: 0;
            padding: 50px 30px;
            float: left;
            transition: 0.5s;
            @media (max-width: $screen-mobile) {
            }
            &.wide {
                max-width: $max-width;
                width: $max-width;
                padding: 50px 70px !important;
            }
            &.strait {
                max-width: 100px;
                width: 100px;
                padding: 30px 10px !important;
                text-align: center;
            }
        }
        &__mobile {
            @media (max-width: $screen-mobile) {
                background-color: $sd-blue;
                position: relative;
                display: block;
                width: 100%;
                height: 65px;
                margin: 0 auto;
                padding: 0 20px;
            }
        }
    }
</style>
