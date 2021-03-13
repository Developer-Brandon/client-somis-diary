<template>
    <!--:date="dateTime"-->
  <vue-date-picker
    :date="dateTime"
    :option="values.option"
    :limit="values.limit"
    :placeholder="values.datePlaceholder"
    onmousedown="return false"
  />
</template>

<script>
import vueDatePicker from 'vue-datepicker'

export default {
  name: 'SdDatePicker',
  components: {
    vueDatePicker,
  },
  props: {
    dateTime: {
      time: {
        type: String,
        default: '',
      },
    },
  },
  data: () => ({
    values: {
      datePlaceholder: '2020-01-01',
      // date: {
      //   time: '',
      // },
      option: {
        type: 'day',
        SundayFirst: true,
        week: ['월', '화', '수', '목', '금', '토', '일'],
        month: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        format: 'YYYY-MM-DD',
        placeholder: '2020-01-01',
        inputStyle: {
          display: 'inline-block',
          padding: '3px',
          'line-height': '22px',
          'font-size': '16px',
          border: '1px solid #fff',
          'border-radius': '3px',
          color: '#353535',
          cursor: 'pointer',
          float: 'right',
          width: '95px',
          height: '50px',
        },
        color: {
          checked: '#353535',
          header: '#353535',
          headerText: '#FFFFFF',
        },
        buttons: {
          ok: '확인',
          cancel: '취소',
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: false, // as true as default
      },
      // timeoption: {
      //   type: 'min',
      //   week: ['월', '화', '수', '목', '금', '토', '일'],
      //   month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      //   format: 'YYYY-MM-DD HH:mm',
      // },
      // multiOption: {
      //   type: 'multi-day',
      //   week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      //   month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      //   format: 'YYYY-MM-DD HH:mm',
      // },
      limit: [
        //   {
        //   type: 'weekday',
        //   available: [1, 2, 3, 4, 5, 6, 7],
        // },
        {
          type: 'fromto',
          from: '2020-01-01',
          to: '2022-01-01',
        },
      ],
    },
  }),
}
</script>

<style lang="scss" scoped>
</style>
