<template>
  <transition name="page-fade">
    <section
      v-show="values.check.lifeCycle"
      class="write-cat-diary-modal sd-block-select"
    >
      <div
        class="write-cat-diary-modal__inner"
        :class="{
          'page-state-default': isPageStateDefault || values.check.isPageStateDefault,
          'page-state-arrange-diary': isPageStateArrangeDiary || values.check.isPageStateArrangeDiary,
          'page-state-notice': isPageStateNotice || values.check.isPageStateNotice,
          'page-state-community': isPageStateCommunity || values.check.isPageStateCommunity,
        }"
      >
        <div class="write-cat-diary-modal__inner__left">
          <div
            v-if="!selectedCat"
            class="when-cat-has-not-selected"
          >
            <p class="announcement">
              선택된 고양이가 없습니다
            </p>
          </div>
          <div
            v-else
            class="when-cat-has-selected"
            :class="{ 'add-right-border-when-cat-has-selected': selectedCat, 'add-right-border-when-cat-has-not-selected': !selectedCat }"
          >
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
                style="display:none;"
                class="writer-cat"
                src="@/assets/images/icons/ol-cat-food.png"
                alt="고양이통조림"
              />
            </div>
            <div class="name">
              <span class="left-side-frame">이름</span>
              <span class="right-side-frame">
                <p class="name-summary">{{ name }}</p>
              </span>
            </div>
            <div class="birthday">
              <span class="left-side-frame">생일</span>
              <span class="right-side-frame">
                <p class="birthday-summary">{{ birthday }}</p>
              </span>
            </div>
            <div class="gender">
              <span class="left-side-frame">성별</span>
              <span class="right-side-frame">
                <p class="gender-summary"> {{ gender }} </p>
              </span>
            </div>
            <div class="species">
              <span class="left-side-frame">종류</span>
              <span class="right-side-frame">
                <p class="species-summary">{{ species }}</p>
              </span>
            </div>
            <div class="weight">
              <span class="left-side-frame">무게</span>
              <span class="right-side-frame">
                <span class="kg-summary">{{ kg }}</span>
                <span class="kg-flag">kg</span>
              </span>
            </div>
            <div class="introduce">
              <p class="introduce-title">
                특이사항
              </p>
              <p
                class="introduce-summary"
              >
                {{ introduce | ValidateCatIntroduce }}
              </p>
            </div>
          </div>
        </div>
        <div class="write-cat-diary-modal__inner__right">
          <div class="input-section">
            <div class="title-row default-diary-row">
              <p class="title-row__title">
                냥이들 목록
              </p>
              <select
                v-model="selectedCat"
                class="title-row__cat-list sd-select"
                name="cat-type"
              >
                <option
                  class="sd-option"
                  selected="selected"
                  disabled="disabled"
                  value=""
                >
                  선택하기
                </option>
                <option
                  v-for="(item, index) in catList"
                  :key="index"
                  class="sd-option"
                  :value="item.name"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="title-row default-diary-row">
              <p class="title-row__title">
                제목
              </p>
              <input
                v-model="diaryTitle"
                :disabled="!selectedCat"
                :class="{ 'input-color-changed-when-disabled':!selectedCat }"
                class="title-row__diary-title sd-input"
                placeholder="20자 이내로 입력해주세요"
                type="text"
              />
            </div>
            <div class="title-row default-diary-row">
              <p class="title-row__title">
                날짜
              </p>
              <input
                v-model="diaryDateTime"
                :disabled="!selectedCat"
                class="title-row__date sd-input"
                :class="{ 'input-color-changed-when-disabled':!selectedCat }"
                placeholder="2020-00-00"
                type="text"
              />
            </div>
            <div class="title-row default-diary-row">
              <p class="title-row__title">
                내용
              </p>
              <textarea
                v-model="diaryContents"
                :disabled="!selectedCat"
                :class="{ 'input-color-changed-when-disabled':!selectedCat }"
                class="sd-textarea title-row__diary-contents"
                maxlength="401"
                placeholder="400자 이내로 입력해주세요"
              ></textarea>
            </div>
          </div>
          <div class="wrap-select-buttons">
            <div class="select-buttons">
              <button
                class="select-buttons__close sd-transparent-button"
                @click="close"
              >
                닫기
              </button>
              <button
                class="select-buttons__save sd-transparent-button"
                @click="save"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { EventBus } from '@/assets/js/plugin/eventBus'
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { PageState } from '@/assets/js/enums/PageState'

export default {
  name: 'SummaryAddedCatModal',
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
    name() {
      return this.$store.getters['cat/name']
    },
    birthday() {
      return this.$store.getters['cat/birthday']
    },
    gender() {
      return this.$store.getters['cat/gender']
    },
    species() {
      return this.$store.getters['cat/species']
    },
    kg() {
      return this.$store.getters['cat/kg']
    },
    introduce() {
      return this.$store.getters['cat/introduce']
    },
    selectedCat: {
      set(selectedCat) {
        const params = { id: selectedCat.id }
        this.$store.dispatch('cat/CALL_CAT_INFO', { params })
          .then(() => {
            // TODO: What should I do?
          })
          .catch((error) => {
            EventBus.$emit('callSdSimpleModal', `아래와 같은 이유로 고양이 정보를 불러오는데에 실패하였습니다!\n${error}`)
          })
      },
      get() {
        return this.$store.getters['cat/selectedCat']
      },
    },
    catList() {
      return this.$store.getters['cat/catList']
    },
    diaryTitle: {
      set(title) {
        this.$store.dispatch('diary/SET_TITLE', { title })
      },
      get() {
        return this.$store.getters['dairy/title']
      },
    },
    diaryDateTime: {
      set(dateTime) {
        this.$store.dispatch('diary/SET_DATETIME', { dateTime })
      },
      get() {
        return this.$store.getters['dairy/dateTime']
      },
    },
    diaryContents: {
      set(contents) {
        this.$store.dispatch('diary/SET_CONTENTS', { contents })
      },
      get() {
        return this.$store.getters['dairy/contents']
      },
    },
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
  },
  created() {
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
    close() {
      this.$store.dispatch('cat/CLEAR_ALL_DATA')
        .then(() => {
          this.$store.dispatch('diary/CLEAR_ALL_DATA')
            .then(() => {
              this.values.check.lifeCycle = false
            })
        })
    },
    before() {
      this.close()
      EventBus.$emit('callAddCatModal')
    },
    callDummyCatList() {
      const catList = [{
        id: 0,
        name: '소미',
        description: '올해 1살된 길냥이',
      }, {
        id: 1,
        name: '수미',
        description: '올해 2살된 길냥이',
      }, {
        id: 2,
        name: '세미',
        description: '올해 2살된 길냥이',
      }]
      this.$store.dispatch('cat/SET_CAT_LIST', { catList })
    },
    show() {
      this.values.check.lifeCycle = true
      if (process.env.NODE_ENV !== 'production') this.callDummyCatList()
    },
    save() {
      this.close()
      // TODO: diary save api 개발하기,
      //  diary save api 가 제대로 꽃히고 나서, 일기쓰기가 완료되었다는 모달 띄워주기
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Utils
    .default-diary-row {
        margin-bottom: 20px;
    }

    .add-right-border-when-cat-has-selected {
        border-right: $sd-ivory 1px solid !important;
    }

    .add-right-border-when-cat-has-not-selected {
        border-right: 0 !important;
    }

    .input-color-changed-when-disabled {
        background-color: $sd-gray !important;
        color: $sd-ivory !important;
    }

    // @Classes;
    .write-cat-diary-modal {
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
            width: 820px;
            height: 530px;
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
            &__left {
                display: inline-block;
                width: 350px;
                height: 100%;
                padding-right: 15px;
                @media (max-width: $screen-mobile) {
                    display: none;
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
                .when-cat-has-selected {
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
                        .right-side-frame {
                            .name-summary {
                                margin: 0 auto;
                                font-size: 20px;
                                width: 180px;
                                color: $sd-ivory;
                                @media (max-width: $screen-mobile) {
                                    width: 100%;
                                }
                            }
                        }
                    }
                    .birthday {
                        margin-bottom: 15px;
                        @media (max-width: $screen-mobile) {
                            margin-bottom: 20px;
                        }
                        .right-side-frame {
                            .birthday-summary {
                                margin: 0 auto;
                                font-size: 20px;
                                width: 180px;
                                color: $sd-ivory;
                                @media (max-width: $screen-mobile) {
                                    width: 100%;
                                }
                            }
                        }
                    }
                    .gender {
                        margin-bottom: 15px;
                        @media (max-width: $screen-mobile) {
                            margin-bottom: 20px;
                        }
                        .right-side-frame {
                            .gender-summary {
                                margin: 0 auto;
                                font-size: 20px;
                                width: 180px;
                                color: $sd-ivory;
                                @media (max-width: $screen-mobile) {
                                    margin-left: 0;
                                    width: 100%;
                                }
                            }
                        }
                    }
                    .species {
                        margin-bottom: 15px;
                        @media (max-width: $screen-mobile) {
                            margin-bottom: 20px;
                        }
                        .right-side-frame {
                            .species-summary {
                                font-size: 20px;
                                color: $sd-ivory;
                            }
                        }
                    }
                    .weight {
                        margin-bottom: 15px;
                        @media (max-width: $screen-mobile) {
                            margin-bottom: 20px;
                        }
                        .right-side-frame {
                            .kg-summary {
                                font-size: 20px;
                                color: $sd-ivory;
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
                    }
                    .introduce {
                        .introduce-title {
                            color: $sd-ivory;
                            font-size: 20px;
                            width: 140px;
                            margin-bottom: 10px;
                        }
                        .introduce-summary {
                            width: 100%;
                            height: 70px;
                            max-height: 70px;
                            font-size: 20px;
                            color: $sd-ivory;
                        }
                    }
                    .select-buttons {
                        &__inner {
                            display: flex;
                            justify-content: flex-end;
                            flex-direction: column;
                            height: 160px;
                            position: relative;
                            &__left {
                                position: absolute;
                                width: 50%;
                                left: 5px;
                                bottom: 5px;
                                p {
                                    cursor: pointer;
                                    text-align: left;
                                    color: $sd-ivory;
                                    font-size: 25px;
                                }
                            }
                            &__right {
                                position: absolute;
                                width: 50%;
                                right: 5px;
                                bottom: 5px;
                                p {
                                    cursor: pointer;
                                    text-align: right;
                                    color: $sd-ivory;
                                    font-size: 25px;
                                }
                            }
                        }
                    }
                }
                .when-cat-has-not-selected {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    .announcement {
                        margin: 0 auto;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        color: $sd-white;
                        font-size: 24px;
                        text-align: center;
                        cursor: default;
                    }
                }
            }
            &__right {
                display: inline-block;
                padding-left: 30px;
                padding-right: 25px;
                @media (max-width: $screen-mobile) {
                    display: block;
                    padding: 10px;
                    overflow-x: hidden;
                }
                .input-section {
                    position: absolute;
                    width: 350px;
                    top: 30px;
                    @media (max-width: $screen-mobile) {
                        position: relative;
                        top: 0;
                        width: 100%;
                        max-height: 70%;
                    }
                    .title-row {
                        cursor: default;
                        @media (max-width: $screen-mobile) {
                            min-width: 230px;
                            max-width: 642px;
                        }
                        &__title {
                            margin-top: 10px;
                            font-size: 20px;
                            color: $sd-ivory;
                            margin-bottom: 8px;
                            @media (max-width: $screen-mobile) {
                                margin-top: 15px;
                                margin-bottom: 10px;
                            }
                        }
                        &__diary-title {
                            width: 100%;
                            @media (max-width: $screen-mobile) {
                                margin-bottom: 5px;
                            }
                        }
                        &__cat-list {
                            width: 100%;
                            height: 40px;
                            font-size: 18px;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            color: $sd-white;
                            border: 1px solid $sd-white;
                            border-radius: 3px;
                            transition: 0.3s;
                            &:hover {
                                -webkit-transform: scale(1.1);
                                -moz-transform: scale(1.1);
                                -ms-transform: scale(1.1);
                                transform: scale(1.1);
                            }
                        }
                        &__date {
                            width: 100%;
                            @media (max-width: $screen-mobile) {
                                margin-bottom: 5px;
                            }
                        }
                        &__diary-contents {
                            width: 100%;
                            height: 115px;
                            @media (max-width: $screen-mobile) {
                                margin-bottom: 5px;
                                height: 90px;
                            }
                        }
                    }
                }
                .wrap-select-buttons {
                    .select-buttons {
                        position: absolute;
                        bottom: 30px;
                        right: 30px;
                        @media (max-width: $screen-mobile) {
                            width: 90%;
                            right: auto;
                        }
                        &__close {
                            cursor: pointer;
                            margin-right: 50px;
                            color: $sd-ivory;
                            font-size: 30px;
                            transition: 0.3s;
                            &:hover {
                                -webkit-transform: scale(1.1);
                                -moz-transform: scale(1.1);
                                -ms-transform: scale(1.1);
                                transform: scale(1.1);
                            }
                            @media (max-width: $screen-mobile) {
                                width: auto;
                                position: absolute;
                                left: 5px;
                                bottom: 5px;
                                margin-right: auto;
                                font-size: 25px;
                            }
                        }
                        &__save {
                            cursor: pointer;
                            font-size: 30px;
                            color: $sd-ivory;
                            transition: 0.3s;
                            &:hover {
                                -webkit-transform: scale(1.1);
                                -moz-transform: scale(1.1);
                                -ms-transform: scale(1.1);
                                transform: scale(1.1);
                            }
                            @media (max-width: $screen-mobile) {
                                width: auto;
                                position: absolute;
                                right: 15px;
                                bottom: 5px;
                                font-size: 25px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
