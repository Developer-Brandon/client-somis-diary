<template>
  <div
    v-show="values.check.lifeCycle"
    class="home"
    :class="{
      'wide-width': headerTypeState === enums.headerType.WIDE,
      'strait-width': headerTypeState === enums.headerType.STRAIT,
    }"
  >
    <div
      class="home__inner"
    >
      <img
        class="left-arrow"
        src="@/assets/images/icons/left-and-right-arrow.png"
        alt="left arrow"
        @click="clickHeaderChangeButton"
      />
      <div class="title">
        <img
          class="title__icon"
          src="@/assets/images/icons/primary-cat.png"
          alt="somi"
        />
        <span class="title__text">{{ getProjectTitle() }}</span>
      </div>
      <div class="sub-title">
        <p v-html="getProjectExplain()"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { HeaderType } from '@/assets/js/enums/HeaderType'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
      },
      enums: {
        headerType: HeaderType,
      },
    }
  },
  computed: {
    headerTypeState() {
      return this.$store.getters['home/headerType']
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.values.check.lifeCycle = true
    })
  },
  methods: {
    clickHeaderChangeButton() {
      let headerType
      if (this.headerTypeState === HeaderType.WIDE) {
        headerType = HeaderType.STRAIT
      } else {
        headerType = HeaderType.WIDE
      }
      this.$store.dispatch('home/SET_HEADER_STATE', { headerType })
    },
  },
}
</script>

<style lang="scss" scoped>
  // @Local util
  .wide-width {
    width: calc(100% - 300px) !important;
  }
  .strait-width {
    width: calc(100% - 100px) !important;
  }
  .home {
    float: right;
    width: calc(100% - 300px);
    height: 100vh;
    background-color: $sd-yellow;
    background-image: url('~@/assets/images/main/banner/silent-cat.png');
    &__inner {
      position: relative;
      padding: 50px;
      .left-arrow {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 50px;
        height: 50px;
        cursor: pointer;
      }
      .title {
        text-align: right;
        margin-bottom: 15px;
        margin-right: 80px;
        &__icon {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
        &__text {
          color: $sd-blue;
          font-size: 60px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }
      }
      .sub-title {
        text-align: right;
        margin-right: 80px;
        p {
          color: $sd-white;
          font-size: 20px;
          font-weight: 700;
          line-height: 25px;
        }
      }
    }
  }
</style>
