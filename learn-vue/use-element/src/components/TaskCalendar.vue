<template>
  <FullCalendar ref="fullCal" :options="calendarOptions" />
</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment'
// FullCalendar 官网文档地址 https://fullcalendar.io/docs

export default {
  name: 'TaskCalendar',
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarApi: null,
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        events: [],
        locale: 'zh-cn',
        customButtons: {
          myPrev: {
            icon: 'chevron-left',
            click: this.handlePrevClick
          },
          myNext: {
            icon: 'chevron-right',
            click: this.handleNextClick
          },
          myPrevYear: {
            icon: 'chevrons-left',
            click: this.handlePrevYearClick
          },
          myNextYear: {
            icon: 'chevrons-right',
            click: this.handleNextYearClick
          }
        },
        headerToolbar: {
          start: 'myPrevYear,myNextYear', // will normally be on the left. if RTL, will be on the right
          center: 'title',
          end: 'today myPrev,myNext'
        },
        buttonText: {
          today: '今天',
          week:  '本周',
        },
        eventClick: function(info) {
          console.log('Event Info:', info)

          // change the border color just for fun
          // info.el.style.borderColor = 'red';
        }
      }
    }
  },
  mounted() {
    const startDate = moment().subtract(6, 'months').format('YYYY-MM-DD')
    const endDate = moment().add(6, 'months').format('YYYY-MM-DD')
    console.log('半年前的日期:', startDate)
    console.log('半年后的日期:', endDate)
    this.calendarApi = this.$refs.fullCal.getApi()
    const events = [
      { title: '新的任务', start: '2022-02-28', end: '2022-04-01' },
      { title: '旧的任务', date: '2022-03-02', backgroundColor: 'green', },
      { title: '上个月的任务', date: '2022-02-28', backgroundColor: 'red' },
    ]
    // 如果是异步初始化， 可以使用该方法加载
    this.calendarApi.setOption('events', events)
  },
  methods: {
    handlePrevClick() {
      this.calendarApi.prev()
      this.queryTask()
    },
    handleNextClick() {
      this.calendarApi.next()
      this.queryTask()
    },
    handlePrevYearClick() {
      this.calendarApi.prevYear()
      this.queryTask()
    },
    //
    handleNextYearClick() {
      this.calendarApi.nextYear()
      this.queryTask()
    },
    //
    queryTask() {
      this.$nextTick(() => {
        let date = this.calendarApi.currentData.currentDate
        date = moment(date).format('YYYY-MM-DD')
        console.log('当前日期', date)
        // 新增任务接口
        this.calendarApi.addEvent({
          title: `${date}的任务`, date: date,
        })
      })
    }

  }
}
</script>
