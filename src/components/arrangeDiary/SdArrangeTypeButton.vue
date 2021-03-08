<template>
  <div class="wrap-arrange-type">
    <section class="list-type desktop-visible-block-only">
      <button
        class="list-type__normal"
        @mouseover="values.state.button.normalListType = true"
        @mouseleave="values.state.button.normalListType = false"
        @click="clickNormalTypeList"
      >
        <transition name="icon-fade">
          <img
            v-if="!values.state.button.normalListType"
            class="icon common-icon-style"
            src="@/assets/images/icons/normal-checklist-type-icon.png"
            alt="sign-in-image"
          />
          <p
            v-else-if="values.state.button.normalListType"
            class="icon-explain"
          >
            NORMAL LIST
          </p>
        </transition>
      </button>
      <button
        class="list-type__frame"
        @mouseover="values.state.button.frameListType = true"
        @mouseleave="values.state.button.frameListType = false"
        @click="clickPhotoTypeList"
      >
        <transition name="icon-fade">
          <img
            v-if="!values.state.button.frameListType"
            class="icon common-icon-style"
            src="@/assets/images/icons/photo-frame-list-type-icon.png"
            alt="photo-frame-image"
          />
          <p
            v-else-if="values.state.button.frameListType"
            class="icon-explain"
          >
            FRAME LIST
          </p>
        </transition>
      </button>
      <button
        class="list-type__card"
        @mouseover="values.state.button.cardListType = true"
        @mouseleave="values.state.button.cardListType = false"
        @click="clickCardTypeList"
      >
        <transition name="icon-fade">
          <img
            v-if="!values.state.button.cardListType"
            class="icon common-icon-style"
            src="@/assets/images/icons/card-list-type-icon.png"
            alt="card-list-image"
          />
          <p
            v-else-if="values.state.button.cardListType"
            class="icon-explain"
          >
            CARD LIST
          </p>
        </transition>
      </button>
      <button
        class="list-type__museum"
        @mouseover="values.state.button.museumListType = true"
        @mouseleave="values.state.button.museumListType = false"
        @click="clickMuseumTypeList"
      >
        <transition name="icon-fade">
          <img
            v-if="!values.state.button.museumListType"
            class="icon common-icon-style"
            src="@/assets/images/icons/museum-list-type-icon.png"
            alt="museum-list-image"
          />
          <p
            v-else-if="values.state.button.museumListType"
            class="icon-explain"
          >
            MUSEUM LIST
          </p>
        </transition>
      </button>
    </section>
    <section class="button-type mobile-visible-block-only">
      <button
        class="sd-positive-button change-arrange-type"
        @click="callArrangeTypeModal"
      >
        정렬방식 바꾸기
      </button>
    </section>
  </div>
</template>

<script>
import { ArrangeState } from '@/assets/js/enums/ArrangeState'

export default {
  name: 'SdArrangeTypeButton',
  data() {
    return {
      values: {
        state: {
          button: {
            normalListType: false,
            frameListType: false,
            cardListType: false,
            museumListType: false,
          },
        },
      },
    }
  },
  computed: {
    type: {
      set(diaryListType) {
        this.$store.dispatch('diary/SET_DIARY_LIST_TYPE', { diaryListType })
      },
      get() {
        return this.$store.getters['diary/diaryListType']
      },
    },
  },
  mounted() {
    this.clickNormalTypeList()
  },
  methods: {
    clickNormalTypeList() {
      this.type = ArrangeState.NORMAL_TYPE
    },
    clickPhotoTypeList() {
      this.type = ArrangeState.PHOTO_TYPE
    },
    clickCardTypeList() {
      this.type = ArrangeState.CARD_TYPE
    },
    clickMuseumTypeList() {
      this.type = ArrangeState.MUSEUM_TYPE
    },
    callArrangeTypeModal() {
      // TODO: 정렬 타입변경 관련 모달 띄우기
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Utils
    .common-icon-style {
        width: 14px;
        height: 14px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .icon-explain {
        font-size: 14px;
        line-height: 14px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    // @Classes;
    .wrap-arrange-type {
        width: 1000px;
        margin: 0 auto;
        @media (max-width: $screen-mobile) {
            width: auto;
        }
        .list-type {
            width: 100%;
            max-width: 1000px;
            height: 41px;
            /* 혹시 나중에 마음이 바뀔수도 있으니 주석 처리 하겠습니다.
            border: 1px solid $sd-black; */
            border-radius: 3px;
            background-color: $sd-white;
            &__normal {
                border: 0;
                width: 25%;
                height: 40px;
                margin-bottom: -5px;
                position: relative;
            }
            &__frame {
                border: 0;
                width: 25%;
                height: 40px;
                margin-bottom: -5px;
                position: relative;
            }
            &__card {
                border: 0;
                width: 25%;
                height: 40px;
                margin-bottom: -5px;
                position: relative;
            }
            &__museum {
                border: 0;
                width: 25%;
                height: 40px;
                margin-bottom: -5px;
                position: relative;
            }
        }
        .button-type {
            box-shadow: 0 5px 17px -7px rgba(0, 0, 0, 0.75);
            .change-arrange-type {
                margin-top: 10px;
                color: $sd-black !important;
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 45px;
                    font-size: 18px;
                }
            }
        }
    }
</style>
