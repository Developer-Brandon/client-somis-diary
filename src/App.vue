<template>
  <div id="app">
    <div class="container">
      <sd-header />
      <router-view />
    </div>
  </div>
</template>

<script>
import SdHeader from '@/components/home/Header.vue'

export default {
  name: 'App',
  components: {
    SdHeader,
    // SdClearBoth,
  },
}
</script>

<style lang="scss">
    #app {
        .container {
            overflow-x: hidden;
            overflow-y: auto;
            max-width: 100%;
            margin: 0;
            &.modal-has-opened {
                -ms-overflow-style: none;
                overflow-y: hidden;
                &::-webkit-scrollbar {
                    display: none;
                    width: 0;
                    background: transparent;
                }
            }
            &.modal-has-close {
                height: 100%;
                overflow-y: auto;
            }
        }
    }
</style>
