<template>
  <div>
    <!-- 만약, 이 라우터에서 일기를 쓴 경우에는 일기목록 페이지 data 들을 init 시켜주어야함 -->
    <section
      v-show="values.check.lifeCycle"
      onmousedown="return false"
      class="arrange-diary sd-common-page"
      :class="{
        'sd-wide-width': headerState === enums.headerState.WIDE,
        'sd-strait-width': headerState === enums.headerState.STRAIT,
      }"
    >
      <div
        class="arrange-diary__inner sd-common-page__inner"
      >
        <!-- -->
        <sd-opposite-arrows />
        <sd-diary-search-bar v-if="!values.check.isMobile" />
        <!-- -->
        <!-- Data detail select button -->
        <button
          v-else
          class="sd-negative-reversal-button mobile-searching"
        >
          상세조회하기
        </button>
        <!-- Data load is finished -->
        <!-- Arrange Type -->
        <sd-arrange-type-button class="arrange-diary-type-button-fade-in" />
        <div
          v-if="values.check.dataLoadedEnd"
          class="when-browser-can-load-diary-list"
        >
          <ul class="diary-list diary-list-fade-in">
            <li
              v-for="(diary, index) in diaryList"
              :key="index"
              class="diary-list__item"
              @click="clickDiaryItem(diary)"
            >
              <span class="diary-list__item__left-side">{{ diary.title }}</span>
              <span class="diary-list__item__right-side">{{ diary.registeredDate }}</span>
            </li>
          </ul>
        </div>
        <!-- Data load is failed -->
        <div
          v-else
          class="when-browser-cant-load-diary-list"
        >
          <div
            class="wrap-error-case"
          >
            <img
              class="image"
              src="@/assets/images/icons/sensitive-cat.png"
              alt="sensitive-cat"
            />
            <p
              class="announcement"
            >
              다이어리 리스트를 불러오는데에 실패하였습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { HeaderState } from '@/assets/js/enums/HeaderState'
import { ArrangeState } from '@/assets/js/enums/ArrangeState'
import SdOppositeArrows from '@/components/util/SdOppositeArrows.vue'
import SdDiarySearchBar from '@/components/arrangeDiary/SdDiarySearchBar.vue'
import SdArrangeTypeButton from '@/components/arrangeDiary/SdArrangeTypeButton.vue'
import MatchMedia from '@/assets/js/util/resolution/matchMedia'

let matchMedia

export default {
  name: 'ArrangeDiary',
  components: {
    SdOppositeArrows,
    SdDiarySearchBar,
    SdArrangeTypeButton,
  },
  data() {
    return {
      values: {
        check: {
          lifeCycle: false,
          dataLoadedEnd: false,
          isMobile: false,
        },
      },
      enums: {
        headerState: HeaderState,
        arrangeState: ArrangeState,
      },
    }
  },
  computed: {
    headerState() {
      return this.$store.getters['home/headerType']
    },
    diaryList() {
      return this.$store.getters['diary/diaryList']
    },
  },
  created() {
    matchMedia = new MatchMedia()
  },
  mounted() {
    this.$nextTick(() => {
      this.checkHeaderState()
      this.callDiaryList()
        .then(() => {
          this.values.check.lifeCycle = true
          this.values.check.dataLoadedEnd = true
          this.values.check.isMobile = matchMedia.isMobile
        })
        .catch(() => {
          this.values.check.lifeCycle = true
          this.values.check.dataLoadedEnd = false
        })
    })
  },
  methods: {
    judgeResolution() {
      return new Promise((resolve) => {
        if (matchMedia.isMobile) {
          this.values.check.isMobile = true
        } else {
          this.values.check.isMobile = false
        }
        resolve()
      })
    },
    checkHeaderState() {
      if (this.headerState === HeaderState.WIDE) {
        const headerType = HeaderState.STRAIT
        this.$store.dispatch('home/SET_HEADER_STATE', { headerType })
      }
    },
    callDiaryList() {
      return new Promise((resolve, reject) => {
        this.$store.dispatch('diary/CALL_DIARY_LIST')
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
        resolve()
      })
    },
    clickDiaryItem(item) {
      console.log('diaryItem: ', item)
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Util
    .diary-list-fade-in {
      @include primary-fade-in(2);
    }

    .arrange-diary-type-button-fade-in {
      @include primary-fade-in(2);
    }

    // @Classes
    .arrange-diary {
        overflow-y: hidden;
        background-color: rgba(0, 0, 0, 0.1) !important;
        background-image: url('~@/assets/images/main/diary-cat.png') !important;
        &__inner {
            height: 100vh;
            @media (max-width: $screen-mobile) {
                padding: 20px !important;
                overflow: inherit;
            }
            .when-browser-can-load-diary-list {
                width: auto;
                margin: 20px 50px 50px 50px;
                @media (max-width: $screen-mobile) {
                    margin: 15px auto 40px auto;
                }
                .diary-list {
                    width: 1000px;
                    margin: 0 auto;
                    border: 1px dotted $sd-black;
                    border-radius: 5px;
                    @media (max-width: $screen-mobile) {
                        width: auto;
                    }
                    &__item {
                        padding: 10px 4px;
                        height: 70px;
                        line-height: 50px;
                        cursor: pointer;
                        transition: 0.4s;
                        background-color: $sd-white;
                        border-bottom: 2px solid $sd-gray;
                        &:last-child {
                            border-bottom: none;
                        }
                        @media (max-width: $screen-mobile) {
                            padding: 10px;
                        }
                        &:hover {
                            border-left: 5px solid $sd-blue;
                            background-color: $sd-transparent-white;
                        }
                        &:hover .notice-list__item__left-side {
                            font-weight: 700;
                            color: $sd-deep-gray;
                        }
                        &__left-side {
                            padding-left: 15px;
                            padding-right: 5px;
                            float: left;
                            @media (max-width: $screen-mobile) {
                                padding-left: 5px;
                                clear: both;
                            }
                        }
                        &__right-side {
                            padding-right: 15px;
                            float: right;
                            @media (max-width: $screen-mobile) {
                                display: none;
                                clear: both;
                            }
                        }
                    }
                }
            }
            .when-browser-cant-load-diary-list {
                position: relative;
                width: 100%;
                height: 500px;
                text-align: center;
                padding: 40px;
                @media (max-width: $screen-mobile) {
                    height: 200px;
                    text-align: center;
                    padding: 80px 30px;
                }
                .wrap-error-case {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    @media (max-width: $screen-mobile) {
                        position: static;
                        top: auto;
                        left: auto;
                        text-align: center;
                    }
                    .image {
                        padding-bottom: 25px;
                    }
                    .announcement {
                        font-size: 20px;
                    }
                }
            }
            .mobile-searching {
                @media (max-width: $screen-mobile) {
                    width: 100%;
                    height: 45px;
                }
            }
        }
    }
</style>
