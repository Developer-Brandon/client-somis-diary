<template>
  <section class="header">
    <div
      class="header__pc desktop-visible-block-only"
      :class="{
        'wide': isHeaderStateWide,
        'strait': isHeaderStateStrait,
      }">
      <div v-if="isHeaderStateWide">
        <strait-header />
      </div>
      <div v-else-if="isHeaderStateStrait">
        <wide-header />
      </div>
    </div>
    <div
      class="header__mobile mobile-visible-block-only">
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
        },
      },
      enums: {
        headerState: HeaderState,
        pageState: PageState,
      },
    }
  },
  computed: {
    headerState() {
      return this.$store.getters['home/headerType']
    },
    isHeaderStateWide() {
      return this.headerState === this.enums.headerState.WIDE
    },
    isHeaderStateStrait() {
      return this.headerState === this.enums.headerState.STRAIT
    },
  },
  mounted() {
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
    $max-width:400px;

    // @Classes
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
            // Hamburger button(slider) was imported
        }
    }
</style>
