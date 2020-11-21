<template>
  <div class="sd-diary-search-bar sd-block-select">
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
            v-model="diaryTitle"
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
            v-model="diaryContents"
            class="diary-contents sd-input"
            placeholder="내용을 입력해주세요"
            type="text"
          />
        </div>
      </div>
    </div>
    <div class="sd-diary-search-bar__buttons">
      <div class="sd-diary-search-bar__buttons__inner">
        <div class="wrap-refresh-button">
          <refresh-button
            class="refresh-button-for-display"
            @click="clearSearchData"
          />
        </div>
        <div class="wrap-search-button">
          <button
            class="search-button sd-negative-reversal-button"
            @click="search"
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
import RefreshButton from '@/components/util/RefreshButton.vue'
import SdClearBoth from '@/components/util/SdClearBoth.vue'

export default {
  name: 'SdDairySearchBar',
  components: {
    RefreshButton,
    SdClearBoth,
  },
  computed: {
    startDateTime: {
      set(startDateTime) {
        console.log(startDateTime)
      },
      get() {
        return ''
      },
    },
    endDateTime: {
      set(endDateTime) {
        console.log(endDateTime)
      },
      get() {
        return ''
      },
    },
    selectedCat: {
      set(selectedCatId) {
        console.log(selectedCatId)
      },
      get() {
        return ''
      },
    },
    diaryTitle: {
      set(diaryTitle) {
        console.log(diaryTitle)
      },
      get() {
        return ''
      },
    },
    diaryContents: {
      set(diaryContents) {
        console.log(diaryContents)
      },
      get() {
        return ''
      },
    },
  },
  mounted() {
  },
  methods: {
    callCatList() {
    },
    clearSearchData() {
    },
    search() {
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
        color: $sd-white;
        font-weight: 700;
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

    // @Classes
    .sd-diary-search-bar {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 30px 0;
        @media (max-width: $screen-mobile) {
          display: none;
        }
        &__inputs {
            float: left;
            width: calc(100% - 300px);
            padding-left: 20px;
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
            width: 300px;
            display: flex;
            justify-content: center;
            &__inner {
                width: 200px;
                display: flex;
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
                .wrap-search-button {
                    width: 150px;
                    height: 50px;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    transition: 0.1s;
                    &:hover {
                        -webkit-transform: scale(1.1);
                        -moz-transform: scale(1.1);
                        -ms-transform: scale(1.1);
                        transform: scale(1.1);
                    }
                    .search-button {
                        font-size: 25px;
                        width: 130px;
                        height: 50px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            }
        }
    }
</style>
