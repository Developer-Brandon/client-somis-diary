<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="cat-add-modal"
    >
      <div class="cat-add-modal__inner">
        <div class="wrap-information">
          <div class="profile">
            <div class="profile__inner">
              <img
                class="default-image"
                src="@/assets/images/icons/cat-default-profile.png"
                alt="기본 프로필 이미지"
              />
              <!--<img src="" alt="등록된 이미지" />-->
            </div>
          </div>
          <div class="wrap-writer-cat">
            <img
              class="writer-cat"
              style="display:none;"
              src="@/assets/images/icons/writer-cat.png"
              alt="쓰는고양이"
            />
          </div>
          <div class="name">
            <span class="left-side-frame">이름</span>
            <span class="right-side-frame">
              <input
                v-model="name"
                class="name-input sd-input"
                type="text"
              />
            </span>
          </div>
          <div class="birthday">
            <span class="left-side-frame">생일</span>
            <span class="right-side-frame">
              <input
                v-model="birthday"
                class="birthday-input sd-input"
                type="text"
              />
            </span>
          </div>
          <div class="gender">
            <span class="left-side-frame">성별</span>
            <span class="right-side-frame">
              <img />
              <img />
            </span>
          </div>
          <div class="species">
            <span class="left-side-frame">종류</span>
            <span class="right-side-frame">
              <p>선택하기</p>
            </span>
          </div>
          <div class="weight">
            <span class="left-side-frame">무게</span>
            <span class="right-side-frame">
              <input
                v-model="kg"
                class="weight-input sd-input"
                type="text"
              />
              <span class="kg-flag">kg</span>
            </span>
          </div>
          <div class="introduce">
            <p class="introduce-title">
              특이사항
            </p>
            <textarea
              v-model="introduce"
              maxlength="201"
              placeholder=""
              class="sd-textarea introduce-contents"
            ></textarea>
          </div>
        </div>
        <div class="wrap-select-buttons">
          <div class="select-buttons">
            <div class="select-buttons__inner">
              <div class="select-buttons__inner__left">
                <p
                  @click="close"
                >
                  닫기
                </p>
              </div>
              <div class="select-buttons__inner__right">
                <p
                  @click="finish"
                >
                  완료
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { EventBus } from '@/assets/js/plugin/eventBus'

export default {
  name: 'AddCatModal',
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
        },
      },
    }
  },
  computed: {
    name: {
      set(name) {
        this.$store.dispatch('cat/SET_NAME', { name })
      },
      get() {
        return this.$store.getters['cat/name']
      },
    },
    birthday: {
      set(birthday) {
        this.$store.dispatch('cat/SET_BIRTHDAY', { birthday })
      },
      get() {
        return this.$store.getters['cat/birthday']
      },
    },
    gender: {
      set(gender) {
        this.$store.dispatch('cat/SET_GENDER', { gender })
      },
      get() {
        return this.$store.getters['cat/gender']
      },
    },
    species: {
      set(species) {
        this.$store.dispatch('cat/SET_SPECIES', { species })
      },
      get() {
        return this.$store.getters['cat/species']
      },
    },
    kg: {
      set(kg) {
        this.$store.dispatch('cat/SET_KG', { kg })
      },
      get() {
        return this.$store.getters['cat/kg']
      },
    },
    introduce: {
      set(introduce) {
        this.$store.dispatch('cat/SET_INTRODUCE', { introduce })
      },
      get() {
        return this.$store.getters['cat/introduce']
      },
    },
  },
  methods: {
    show() {
      this.values.check.lifeCycle = true
    },
    close() {
      this.values.check.lifeCycle = false
    },
    finish() {
      this.close()
      EventBus.$emit('callSummaryAddedCatModal')
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Classes
    .cat-add-modal {
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
            width: 350px;
            height: 610px;
            padding: 30px;
            background-color: $sd-blue;
            border-radius: 15px;
            overflow: visible;
            @media (max-width: $screen-mobile) {
                width: 90%;
                height: 90%;
                min-height: 500px;
                max-height: 750px;
                padding: 15px;
                overflow-x: hidden;
            }
            .wrap-information {
                max-height: 85%;
                @media (max-width: $screen-mobile) {
                    overflow-y: scroll;
                }
                .left-side-frame {
                    display: inline-block;
                    width: 40px;
                    color: $sd-ivory;
                    font-size: 22px;
                    @media (max-width: $screen-mobile) {
                        display: block;
                        width: 100%;
                        padding-bottom: 5px;
                    }
                }
                .right-side-frame {
                    display: inline-block;
                    text-align: center;
                    width: calc(100% - 40px);
                    vertical-align: middle;
                    @media (max-width: $screen-mobile) {
                        text-align: left;
                        display: block;
                        width: 100%;
                        padding-bottom: 5px;
                    }
                }
                .wrap-writer-cat {
                    padding-top: 15px;
                    padding-bottom: 15px;
                    .writer-cat {
                        width: 40px;
                        height: 40px;
                    }
                }
                .profile {
                    width: 100px;
                    margin: 0 auto;
                    &__inner {
                        position: relative;
                        border: 2px solid $sd-ivory;
                        border-radius: 50%;
                        width: 100px;
                        height: 100px;
                        margin-top: 5px;
                        margin-bottom: 5px;
                        cursor: pointer;
                        .default-image {
                            position: absolute;
                            width: 70px;
                            height: 70px;
                            top: 50%;
                            left: 53%;
                            transform: translate(-50%, -50%);
                        }
                        .attached-image {
                        }
                    }
                }
                .name {
                    margin-bottom: 15px;
                    @media (max-width: $screen-mobile) {
                        margin-bottom: 20px;
                    }
                    .name-input {
                        margin-left: 20px;
                        font-size: 20px;
                        width: 180px;
                        @media (max-width: $screen-mobile) {
                            margin-left: 0;
                            width: 100%;
                        }
                    }
                }
                .birthday {
                    margin-bottom: 15px;
                    @media (max-width: $screen-mobile) {
                        margin-bottom: 20px;
                    }
                    .birthday-input {
                        margin-left: 20px;
                        font-size: 20px;
                        width: 180px;
                        @media (max-width: $screen-mobile) {
                            margin-left: 0;
                            width: 100%;
                        }
                    }
                }
                .gender {
                    margin-bottom: 15px;
                    @media (max-width: $screen-mobile) {
                        margin-bottom: 20px;
                    }
                }
                .species {
                    margin-bottom: 15px;
                    @media (max-width: $screen-mobile) {
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 20px;
                        cursor: pointer;
                        color: $sd-ivory;
                        @media (max-width: $screen-mobile) {
                            text-align: center !important;
                        }
                    }
                }
                .weight {
                    margin-bottom: 15px;
                    @media (max-width: $screen-mobile) {
                        margin-bottom: 20px;
                    }
                    .weight-input {
                        margin-left: 20px;
                        font-size: 20px;
                        width: 140px;
                        @media (max-width: $screen-mobile) {
                            margin-left: 0;
                            width: 85%;
                        }
                    }
                    .kg-flag {
                        color: $sd-ivory;
                        font-weight: 700;
                        padding-left: 15px;
                        @media (max-width: $screen-mobile) {
                            padding-left: 7px;
                        }
                    }
                }
                .introduce {
                    .introduce-title {
                        color: $sd-ivory;
                        font-size: 20px;
                        width: 140px;
                        margin-bottom: 10px;
                    }
                    .introduce-contents {
                    }
                }
            }
            .wrap-select-buttons {
                .select-buttons {
                    width: 290px;
                    position: absolute;
                    bottom: 30px;
                    @media (max-width: $screen-mobile) {
                        width: 91%;
                    }
                    &__inner {
                        display: flex;
                        justify-content: flex-end;
                        flex-direction: column;
                        position: relative;
                        &__left {
                            position: absolute;
                            width: auto;
                            left: 5px;
                            bottom: 5px;
                            @media (max-width: $screen-mobile) {
                                // ?
                            }
                            p {
                                cursor: pointer;
                                text-align: left;
                                color: $sd-ivory;
                                font-size: 25px;
                                @media (max-width: $screen-mobile) {
                                    // ?
                                }
                            }
                        }
                        &__right {
                            position: absolute;
                            width: auto;
                            right: 5px;
                            bottom: 5px;
                            @media (max-width: $screen-mobile) {
                                // ?
                            }
                            p {
                                cursor: pointer;
                                text-align: right;
                                color: $sd-ivory;
                                font-size: 25px;
                                @media (max-width: $screen-mobile) {
                                    // ?
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
