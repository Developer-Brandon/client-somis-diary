<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="cat-add-modal sd-block-select"
    >
      <div
        class="cat-add-modal__inner"
        :class="{
          'page-state-default': isPageStateDefault || values.check.isPageStateDefault,
          'page-state-arrange-diary': isPageStateArrangeDiary || values.check.isPageStateArrangeDiary,
          'page-state-notice': isPageStateNotice || values.check.isPageStateNotice,
          'page-state-community': isPageStateCommunity || values.check.isPageStateCommunity,
        }"
      >
        <div class="wrap-information">
          <div class="profile">
            <div class="profile__inner">
              <img
                class="default-image"
                src="@/assets/images/icons/cat-default-profile.png"
                alt="기본 프로필 이미지"
                ondragstart="return false;"
                @click="callFileAttach"
              />
              <!-- TODO: 사진등록 기능이 완성 되고 난 후 개발 예정 -->
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
            <span class="add-essential-style">*</span>
            <span class="right-side-frame">
              <input
                v-model="name"
                placeholder="15글자 이하"
                maxlength="15"
                class="name-input sd-input"
                type="text"
              />
            </span>
          </div>
          <div class="birthday">
            <span class="left-side-frame">생일</span>
            <span class="add-essential-style">*</span>
            <span class="right-side-frame">
              <input
                v-model="birthday"
                v-mask="'####-##-##'"
                placeholder="0000-00-00"
                class="birthday-input sd-input"
                type="text"
              />
            </span>
          </div>
          <div class="gender">
            <span class="left-side-frame">성별</span>
            <span class="add-essential-style">*</span>
            <span class="right-side-frame">
              <span class="right-side-frame__gender">
                <button
                  :class="{'change-button-color-to-visited': values.check.gender.man}"
                  @click="catManHasClicked"
                >
                  <img
                    class="cat-man"
                    src="@/assets/images/icons/man.png"
                    alt="수컷"
                  />
                </button>
                <button
                  :class="{'change-button-color-to-visited': values.check.gender.woman}"
                  @click="catWomanHasClicked"
                >
                  <img
                    class="cat-woman"
                    src="@/assets/images/icons/woman.png"
                    alt="암컷"
                  />
                </button>
              </span>
            </span>
          </div>
          <div class="species">
            <span class="left-side-frame">종류</span>
            <span class="add-essential-style">*</span>
            <span class="right-side-frame">
              <span class="right-side-frame__type">
                <button @click="callCatTypeList">선택하기</button>
              </span>
            </span>
          </div>
          <div class="weight">
            <span class="left-side-frame">무게</span>
            <span class="add-essential-style">*</span>
            <span class="right-side-frame">
              <input
                v-model="kg"
                maxlength="2"
                placeholder="2자리수 이하"
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
              placeholder="특이사항을 입력해주세요"
              class="sd-textarea introduce-contents"
            ></textarea>
          </div>
        </div>
        <div class="wrap-select-buttons">
          <div class="select-buttons">
            <div class="select-buttons__inner">
              <div class="select-buttons__inner__left">
                <button
                  class="sd-transparent-button close-button"
                  @click="close"
                >
                  닫기
                </button>
              </div>
              <div class="select-buttons__inner__right">
                <button
                  class="sd-transparent-button finish-button"
                  @click="finish"
                >
                  완료
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import UtilBox from '@/assets/js/util/validation/utilBox'
import { UtilBoxState } from '@/assets/js/enums/UtilBoxState'
import { EventBus } from '@/assets/js/plugin/eventBus'
import { CatGenderState } from '@/assets/js/enums/CatGenderState'
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'

let utilBox

export default {
  name: 'AddCatModal',
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
          isPageStateDefault: false,
          isPageStateArrangeDiary: false,
          isPageStateNotice: false,
          isPageStateCommunity: false,
          gender: {
            man: false,
            woman: false,
          },
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
    gender() {
      return this.$store.getters['cat/gender']
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
  destroyed() {
    this.close()
  },
  created() {
    utilBox = new UtilBox()
    EventBus.$on('globalHeaderColorWatcher', (headerType) => this.changeModalBackgroundColor(headerType))
  },
  methods: {
    changeModalBackgroundColor(headerType) {
      switch (headerType.name) {
        case 'DEFAULT':
          this.values.check.isPageStateDefault = true
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = false
          return null
        case 'ARRANGE_DIARY':
          this.values.check.isPageStateDefault = false
          this.values.check.isPageStateArrangeDiary = true
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = false
          return null
        case 'NOTICE':
          this.values.check.isPageStateDefault = false
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = true
          this.values.check.isPageStateCommunity = false
          return null
        case 'COMMUNITY':
          this.values.check.isPageStateDefault = false
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = true
          return null
        default:
          this.values.check.isPageStateDefault = true
          this.values.check.isPageStateArrangeDiary = false
          this.values.check.isPageStateNotice = false
          this.values.check.isPageStateCommunity = false
          return null
      }
    },
    show() {
      // this.$nextTick(() => {
      this.checkCatGenderState()
        .then(() => {
          this.values.check.lifeCycle = true
        })
      // })
    },
    callSimpleModal(message) {
      EventBus.$emit('callSdSimpleModal', message)
    },
    callFileAttach() {
      this.callSimpleModal('준비중인 기능입니다냥~!')
    },
    close() {
      this.$store.dispatch('cat/CLEAR_ALL_DATA')
        .then(() => {
          this.values.check.gender.man = false
          this.values.check.gender.woman = false
          this.values.check.lifeCycle = false
        })
    },
    catManHasClicked() {
      this.values.check.gender.man = !this.values.check.gender.man
      this.values.check.gender.woman = false
      const gender = CatGenderState.MAN
      this.$store.dispatch('cat/SET_GENDER', { gender })
    },
    catWomanHasClicked() {
      this.values.check.gender.woman = !this.values.check.gender.woman
      this.values.check.gender.man = false
      const gender = CatGenderState.WOMAN
      this.$store.dispatch('cat/SET_GENDER', { gender })
    },
    checkCatGenderState() {
      return new Promise((resolve) => {
        if (this.gender === CatGenderState.MAN) {
          this.values.check.gender.man = true
        } else if (this.gender === CatGenderState.WOMAN) {
          this.values.check.gender.woman = true
        } else {
          this.values.check.gender.man = false
          this.values.check.gender.woman = false
        }
        resolve()
      })
    },
    getWrapedFromData() {
      // TODO: File관련 기능 추가 후 객체 넘기기
      return {
        file: '',
        name: this.name,
        birthday: this.birthday,
        gender: this.gender,
        species: this.species,
        kg: this.kg,
        introduce: this.introduce,
      }
    },
    validateAllFormValues() {
      const data = this.getWrapedFromData()
      return new Promise((resolve, reject) => {
        utilBox._type = UtilBoxState.FILE
        utilBox._value = data.file
        if (!utilBox.validateFile) reject(new Error('사진이<br /> 등록되지 않았다냥~!'))
        utilBox._type = UtilBoxState.NAME
        utilBox._value = data.name
        if (!utilBox.validateName) reject(new Error('이름이 1글자 이상은<br />입력되어야한다냥~!'))
        utilBox._type = UtilBoxState.BIRTHDAY
        utilBox._value = data.birthday
        if (!utilBox.validateBirthday) reject(new Error('생일은 꼭<br /> 입력해주어야한다냥~!'))
        utilBox._type = UtilBoxState.GENDER
        utilBox._value = data.gender
        if (!utilBox.validateGender) reject(new Error('성별은 꼭<br /> 선택해주어야한다냥~!'))
        utilBox._type = UtilBoxState.SPECIES
        utilBox._value = data.species
        if (!utilBox.validateSpecies) reject(new Error('고양이 종은 꼭<br /> 선택해주어야한다냥~!'))
        utilBox._type = UtilBoxState.KG
        utilBox._value = data.kg
        if (!utilBox.validateKg) reject(new Error('고양이 무게는 꼭<br />입력해주어야한다냥~!'))
        //
        resolve()
      })
    },
    finish() {
      this.validateAllFormValues()
        .then(() => {
          EventBus.$emit('callSummaryAddedCatModal', this.getWrapedFromData())
          this.values.check.lifeCycle = false
        })
        .catch((error) => this.callSimpleModal(error.message))
    },
    callCatTypeList() {
      EventBus.$emit('callCatTypeListModal')
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Utils
    .change-button-color-to-visited {
        background-color: $sd-yellow !important;
    }

    .add-essential-style {
        width: 2px;
        font-size: 25px;
        padding-left: 1px;
        padding-top: -5px;
        display: inline-block !important;
        color: $sd-red !important;
    }

    // @Classes;
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
                    width: 38px;
                    color: $sd-ivory;
                    font-size: 22px;
                    @media (max-width: $screen-mobile) {
                        width: auto;
                        padding-bottom: 5px;
                    }
                }
                .right-side-frame {
                    display: inline-block;
                    text-align: center;
                    width: calc(100% - 40px);
                    vertical-align: middle;
                    @media (max-width: $screen-mobile) {
                        display: block;
                        text-align: left;
                        width: 100%;
                        padding-top: 5px;
                        padding-bottom: 5px;
                    }
                    &__gender {
                        button {
                            width: 85px;
                            background-color: $sd-white;
                            border: 1px solid $sd-blue;
                            -webkit-border-radius: 20px;
                            -moz-border-radius: 20px;
                            border-radius: 10px;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            transition: 0.3s;
                            &:hover {
                                -webkit-transform: scale(1.1);
                                -moz-transform: scale(1.1);
                                -ms-transform: scale(1.1);
                                transform: scale(1.1);
                            }
                            &:first-child {
                                margin-right: 10px;
                                @media (max-width: $screen-mobile) {
                                    margin-right: 4%;
                                }
                            }
                            .cat-man {
                                width: 20px;
                                height: 20px;
                            }
                            .cat-woman {
                                width: 20px;
                                height: 20px;
                            }
                            @media (max-width: $screen-mobile) {
                                width: 48%;
                            }
                        }
                    }
                    &__type {
                        button {
                            width: 180px;
                            background-color: $sd-white;
                            border: 1px solid $sd-blue;
                            -webkit-border-radius: 20px;
                            -moz-border-radius: 20px;
                            border-radius: 10px;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            font-size: 20px;
                            transition: 0.3s;
                            &:hover {
                                -webkit-transform: scale(1.1);
                                -moz-transform: scale(1.1);
                                -ms-transform: scale(1.1);
                                transform: scale(1.1);
                            }
                            &:active {
                                background-color: $sd-blue;
                                color: $sd-white;
                            }
                            @media (max-width: $screen-mobile) {
                                width: 100%;
                            }
                        }
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
                        @media (max-width: $screen-mobile) {
                            margin-top: 15px;
                        }
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
                        @media (max-width: $screen-mobile) {
                            margin-bottom: 25px;
                        }
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
                            }
                            .close-button {
                                cursor: pointer;
                                text-align: left;
                                color: $sd-ivory;
                                font-size: 25px;
                                transition: 0.3s;
                                &:hover {
                                    -webkit-transform: scale(1.1);
                                    -moz-transform: scale(1.1);
                                    -ms-transform: scale(1.1);
                                    transform: scale(1.1);
                                }
                                @media (max-width: $screen-mobile) {
                                }
                            }
                        }
                        &__right {
                            position: absolute;
                            width: auto;
                            right: 5px;
                            bottom: 5px;
                            @media (max-width: $screen-mobile) {
                            }
                            .finish-button {
                                cursor: pointer;
                                text-align: right;
                                color: $sd-ivory;
                                font-size: 25px;
                                transition: 0.3s;
                                &:hover {
                                    -webkit-transform: scale(1.1);
                                    -moz-transform: scale(1.1);
                                    -ms-transform: scale(1.1);
                                    transform: scale(1.1);
                                }
                                @media (max-width: $screen-mobile) {
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
