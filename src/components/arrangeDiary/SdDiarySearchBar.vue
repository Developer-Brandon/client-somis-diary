<template>
  <div class="sd-diary-search-bar">
    <div class="sd-diary-search-bar__inputs">
      <div class="wrap-cat-list">
        <div class="wrap-cat-list__inner">
          <div class="search-sub-title">
            <span class="top">고</span>
            <span class="middle">양</span>
            <span class="bottom">이</span>
          </div>
          <input
            class="cat-list sd-input"
            placeholder="선택해주세요"
            type="text"
            :value="selectedCat"
            @click="callCatList"
          />
        </div>
      </div>
      <div class="wrap-date-time">
        <div class="wrap-date-time__inner">
          <div class="search-sub-title">
            <span class="top">작</span>
            <span class="middle">성</span>
            <span class="bottom">일</span>
          </div>
          <input
            v-model="startDateTime"
            class="start-date-time sd-input"
            placeholder="2020-01-01"
            type="text"
          />
          <span class="middle-dash"></span>
          <input
            v-model="endDateTime"
            class="end-date-time sd-input"
            placeholder="2022-01-01"
            type="text"
          />
        </div>
      </div>
      <div class="wrap-diary-title">
        <div class="wrap-diary-title__inner">
          <div class="search-sub-title">
            <span class="top">제</span>
            <span class="bottom">목</span>
          </div>
          <input
            v-model="searchDiaryTitle"
            class="diary-title sd-input"
            placeholder="제목을 입력해주세요"
            type="text"
          />
        </div>
      </div>
      <div class="wrap-diary-contents">
        <div class="wrap-diary-contents__inner">
          <div class="search-sub-title">
            <span class="top">내</span>
            <span class="bottom">용</span>
          </div>
          <input
            v-model="searchDiaryContents"
            class="diary-contents sd-input"
            placeholder="내용을 입력해주세요"
            type="text"
          />
        </div>
      </div>
    </div>
    <div class="sd-diary-search-bar__buttons">
      <div class="sd-diary-search-bar__buttons__inner">
        <div class="wrap-search-button">
          <button
            class="search-button sd-negative-reversal-button"
            @click="clickSearchButton"
          >
            검색
          </button>
        </div>
      </div>
    </div>
    <sd-clear-both />
  </div>
</template>

<script>
import SdClearBoth from '@/components/util/SdClearBoth.vue'
import { EventBus } from '@/assets/js/plugin/eventBus'

export default {
  name: 'SdDairySearchBar',
  components: {
    SdClearBoth,
  },
  computed: {
    selectedCat() {
      return this.$store.getters['arrangeDiary/selectedCatName']
    },
    startDateTime() {
      return this.$store.getters['arrangeDiary/startDateTime']
    },
    endDateTime() {
      return this.$store.getters['arrangeDiary/endDateTime']
    },
    searchDiaryTitle: {
      set(searchDiaryTitle) {
        this.$store.dispatch('arrangeDiary/SET_SEARCH_DIARY_TITLE', { searchDiaryTitle })
      },
      get() {
        return this.$store.getters['arrangeDiary/searchDiaryTitle']
      },
    },
    searchDiaryContents: {
      set(searchDiaryContents) {
        this.$store.dispatch('arrangeDiary/SET_SEARCH_DIARY_CONTENTS', { searchDiaryContents })
      },
      get() {
        return this.$store.getters['arrangeDiary/searchDiaryContents']
      },
    },
    arrangeListType() {
      return this.$store.getters['arrangeDiary/arrangeListType']
    },
  },
  mounted() {
    // TODO: Search params 비우고 특정 조건없이 일기 리스트 불러오기
    this.clearSearchData()
    this.clearSearchType()
  },
  methods: {
    callCatList() {
      this.$store.dispatch('arrangeDiary/GET_CAT_LIST')
        .then(() => {
          EventBus.$emit('callReadCatListModal')
        })
    },
    clearSearchType() {
      this.$store.dispatch('arrangeDiary/CLEAR_LIST_TYPE')
    },
    clickSearchButton() {
      this.$store.dispatch('arrangeDiary/GET_DIARY_LIST_BY_VALUES')
    },
  },
}
</script>

<style lang="scss" scoped>
    // @Local Utils
    .search-sub-title {
        position: relative;
        float: left;
        width: 10px;
        height: 50px;
        margin-right: 5px;
        color: $sd-black;
        font-weight: 400;
        .top {
            position: absolute;
            top: 2px;
            left: 50%;
            transform: translateX(- 50%);
        }
        .middle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .bottom {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(- 50%);
        }
    }

    // @Override
    .sd-input {
        border: 0.5px solid $sd-black !important;
    }

    // @Classes
    .sd-diary-search-bar {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 30px 0;
        @media (max-width: $screen-mobile) {
            display: none;
        }
        &__inputs {
            float: left;
            width: calc(100% - 150px);
            .wrap-cat-list {
                position: relative;
                float: left;
                margin-right: 30px;
                &__inner {
                    .cat-list {
                        cursor: pointer;
                        width: 100px;
                        height: 50px;
                    }
                }
            }
            .wrap-date-time {
                position: relative;
                float: left;
                margin-right: 30px;
                &__inner {
                    .start-date-time {
                        cursor: pointer;
                        float: right;
                        width: 95px;
                        height: 50px;
                    }
                    .middle-dash {
                        float: right;
                        width: 10px;
                        height: 50px;
                    }
                    .end-date-time {
                        cursor: pointer;
                        width: 95px;
                        float: right;
                        height: 50px;
                    }
                }
            }
            .wrap-diary-title {
                position: relative;
                margin-right: 15px;
                float: left;
                &__inner {
                    .diary-title {
                        width: 140px;
                        height: 50px;
                    }
                }
            }
            .wrap-diary-contents {
                position: relative;
                float: left;
                &__inner {
                    .diary-contents {
                        width: 180px;
                        height: 50px;
                    }
                }
            }
        }
        &__buttons {
            float: right;
            width: 150px;
            display: flex;
            justify-content: right;
            &__inner {
                width: 150px;
                .wrap-search-button {
                    width: 150px;
                    height: 50px;
                    position: relative;
                    transition: 0.1s !important;
                    &:hover {
                        -webkit-transform: scale(1.1);
                        -moz-transform: scale(1.1);
                        -ms-transform: scale(1.1);
                        transform: scale(1.1);
                    }
                    .search-button {
                        font-size: 25px;
                        color: $sd-black;
                        background-color: $sd-white;
                        border: 1px $sd-black solid;
                        width: 130px;
                        height: 50px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        &:hover {
                            font-weight: 500 !important;
                        }
                    }
                }
            }
        }
    }
</style>
