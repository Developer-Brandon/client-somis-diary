<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="cat-establish-modal"
    >
      <!-- 1. 이름 -->
      <!-- 2. 성별 -->
      <!-- 3. 색깔 -->
      <!-- 4. 털 길이 -->
      <!-- 5. 고양이 크기 -->
      <!-- 6. 털 길이 -->
      <!-- 7. 고양이 종류 -->
      <!-- 8. 고양이 생일 -->
      <!-- 9. 고양이 무게 -->
      <!-- 10. 고양이 생일 -->
      <!-- 11. 그외 특이사항 -->
      <div class="cat-establish-modal__inner">
        <div class="cat-establish-modal__inner__top">
          <div class="left-side-contents">
            <div class="profile-image">
              <!-- 색깔에 따라서 -->
              <!--<img src="" alt="고양이 이미지">-->
            </div>
            <div class="cat-information">
              <div class="cat-information__inner">
                <div class="cat-index"></div>
                <div class="cat-title">
                </div>
                <div class="cat-sub-title"></div>
              </div>
            </div>
          </div>
          <div class="right-side-contents">
            <div class="cat-birthday">
              <p></p>
            </div>
          </div>
        </div>
        <div class="cat-establish-modal__inner__bottom">
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { EventBus } from '@/assets/js/plugin/eventBus'

export default {
  name: 'EstablishCatModal',
  data() {
    return {
      values: {
        string: {
          message: '',
        },
        check: {
          lifeCycle: false,
        },
      },
    }
  },
  methods: {
    close() {
      this.values.check.lifeCycle = false
    },
    show() {
      this.values.check.lifeCycle = true
    },
    establishIsFinished() {
      this.close()
      EventBus.$emit('writeCatDiaryModal')
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Classes
    .cat-establish-modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: $sd-transparent-black;
        padding-top: 15px;
        padding-bottom: 15px;
        @media (max-width: $screen-mobile) {
            padding: 25px;
        }
        &__inner {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            //
            width: 700px;
            height: 300px;
            padding: 30px;
            background-color: $sd-blue;
            border-radius: 15px;
            overflow: visible;
            @media (max-width: $screen-mobile) {
                width: 90%;
                height: 280px;
                max-height: 280px;
                padding: 15px;
                overflow-x: hidden;
            }
            &__top {
                width: 100%;
                min-height: 70%;
            }
            &__bottom {
                width: 100%;
                min-height: 30%;
            }
            /*<!--.wrap-image {-->*/
            /*<!--text-align: center;-->*/
            /*<!--img {-->*/
            /*<!--padding-bottom: 15px;-->*/
            /*<!--}-->*/
            /*<!--}-->*/
            /*<!--.wrap-message {-->*/
            /*<!--margin-bottom: 20px;-->*/
            /*<!--.contents {-->*/
            /*<!--text-align: center;-->*/
            /*<!--color: $sd-ivory;-->*/
            /*<!--font-size: 24px;-->*/
            /*<!--@media (max-width: $screen-mobile) {-->*/
            /*<!--font-size: 18px;-->*/
            /*<!--}-->*/
            /*<!--}-->*/
            /*<!--}-->*/
            /*<!--.wrap-auth-buttons {-->*/
            /*<!--text-align: center;-->*/
            /*<!--margin-bottom: 20px;-->*/
            /*<!--.google-auth-button {-->*/
            /*<!--cursor: pointer;-->*/
            /*<!--margin-right: 25px;-->*/
            /*<!--border: $sd-yellow;-->*/
            /*<!--}-->*/
            /*<!--.insta-auth-button {-->*/
            /*<!--cursor: pointer;-->*/
            /*<!--margin-right: 25px;-->*/
            /*<!--}-->*/
            /*<!--.twitter-auth-button {-->*/
            /*<!--cursor: pointer;-->*/
            /*<!--}-->*/
            /*<!--}-->*/
            /*<!--.wrap-already-have-an-account {-->*/
            /*<!--width: 100%;-->*/
            /*<!--&__contents {-->*/
            /*<!--width: 50%;-->*/
            /*<!--padding-left: 20px;-->*/
            /*<!--display: block;-->*/
            /*<!--float: left;-->*/
            /*<!--cursor: pointer;-->*/
            /*<!--color: $sd-ivory;-->*/
            /*<!--text-align: left;-->*/
            /*<!--font-size: 20px;-->*/
            /*<!--}-->*/
            /*<!--.close-button {-->*/
            /*<!--width: 50%;-->*/
            /*<!--padding-right: 20px;-->*/
            /*<!--float: right;-->*/
            /*<!--display: block;-->*/
            /*<!--cursor: pointer;-->*/
            /*<!--text-align: right;-->*/
            /*<!--color: $sd-ivory;-->*/
            /*<!--padding-bottom: 3px;-->*/
            /*<!--font-size: 20px;-->*/
            /*<!--}-->*/
            /*<!--}-->*/
        }
    }
</style>
