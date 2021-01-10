<template>
  <div class="wrap-search-util-modal">
    <div class="wrap-search-util-modal__inner">
      <div
        class="wrap-refresh-button"
      >
        <refresh-button
          class="refresh-button-for-display"
          @click="clearSearchData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RefreshButton from '@/components/util/RefreshButton.vue'

export default {
  name: 'SdSearchUtilModal',
  components: {
    RefreshButton,
  },
  methods: {
    clearSearchData() {
      this.$store.dispatch('arrangeDiary/CLEAR_SEARCH_DATA')
    },
  },
}
</script>

<style type="scss" scoped>
    .wrap-search-util-modal {
        &__inner {
            .wrap-refresh-button {
                width: 50px;
                height: 50px;
                align-items: center;
                justify-content: center;
                position: relative;
                .refresh-button-for-display {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
</style>
