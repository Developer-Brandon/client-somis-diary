<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="wrap-cat-add-announce-modal sd-block-select"
    >
      <div class="wrap-cat-add-announce-modal__inner">
        <div class="wrap-image">
          <img
            src="@/assets/images/icons/sensitive-cat.png"
            alt="sign-in-image"
          />
        </div>
        <div class="wrap-message">
          <p
            class="contents"
            v-html="values.string.message"
          >
          </p>
        </div>
        <div
          class="wrap-whether-add-cat-buttons"
        >
          <button
            class="sd-transparent-button close-button"
            @click.stop="close"
          >
            취소
          </button>
          <button
            class="sd-transparent-button add-button"
            @click.stop="mustEstablishModal"
          >
            등록
          </button>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { EventBus } from '@/assets/js/plugin/eventBus'

export default {
  name: 'MustEstablishCatAnnounceModal',
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
    show(message) {
      this.values.check.lifeCycle = true
      this.values.string.message = message
    },
    mustEstablishModal() {
      this.close()
      EventBus.$emit('callAddCatModal')
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Classes
    .wrap-cat-add-announce-modal {
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
            width: 500px;
            height: 275px;
            padding: 30px;
            background-color: $sd-blue;
            border-radius: 15px;
            overflow: visible;
            @media (max-width: $screen-mobile) {
                width: 90%;
                overflow-x: hidden;
                height: 275px;
            }
            .wrap-image {
                text-align: center;
                img {
                    padding-bottom: 25px;
                }
            }
            .wrap-message {
                margin-bottom: 40px;
                .contents {
                    text-align: center;
                    color: $sd-ivory;
                    font-size: 25px;
                    @media (max-width: $screen-mobile) {
                        font-size: 18px;
                    }
                }
            }
            .wrap-whether-add-cat-buttons {
                width: 100%;
                .close-button {
                    width: auto;
                    padding-left: 20px;
                    float: left;
                    text-align: left;
                    color: $sd-ivory;
                    padding-bottom: 3px;
                    font-size: 25px;
                    cursor: pointer;
                    transition: 0.3s;
                    &:hover {
                        -webkit-transform: scale(1.1);
                        -moz-transform: scale(1.1);
                        -ms-transform: scale(1.1);
                        transform: scale(1.1);
                    }
                }
                .add-button {
                    width: auto;
                    padding-right: 20px;
                    float: right;
                    color: $sd-ivory;
                    text-align: right;
                    font-size: 25px;
                    cursor: pointer;
                    transition: 0.3s;
                    &:hover {
                        -webkit-transform: scale(1.1);
                        -moz-transform: scale(1.1);
                        -ms-transform: scale(1.1);
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
</style>
