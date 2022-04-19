<template>
  <div class="gantt-container">
    <v-gantt-chart :startTime="startTime" :endTime="endTime" :datas="ganttArr" :scale="1440">
      <template v-slot:block="{data, item}">
        <!-- 你的容器块组件 -->
        <div>
          <GanttBlock :data="data" :item="item"></GanttBlock>
        </div>
      </template>
      <template v-slot:left="{data}">
        <!-- 你的行名组件 -->
        <div class="table-gantt">
          <div v-if="data.gtArray.length > 0">
            表格
          </div>
          <h1 v-else>
            暂无数据
          </h1>
        </div>
      </template>
      <template v-slot:title>
        <!-- 你的表头组件 -->
        甘特图
      </template>
    </v-gantt-chart>
  </div>
</template>

<script>
// vGanttChart 项目地址: https://github.com/w1301625107/Vue-Gantt-chart
import vGanttChart from 'v-gantt-chart';
import moment from "moment";
import GanttBlock from "@/components/GanttBlock";

export default {
  name: 'GanttDemo',
  components: {
    vGanttChart,
    GanttBlock,
  },
  data() {
    return {
      startTime: null,
      endTime: null,
      ganttArr: [{
        id: 'projectTask',
        gtArray: [{
          name: 'projectName',
          start: '2022-04-03',
          end: '2022-04-15'
        },]
      },
        {
        id: 'projectTask2',
        gtArray: [{
          name: '任务名称',
          start: '2022-04-06',
          end: '2022-04-15'
        },{
          name: '任务名称2',
          start: '2022-04-16',
          end: '2022-04-30'
        }]
      }]
    }
  },
  created() {
    const start = moment().startOf('month').format('YYYY-MM-DD h:mm:ss');
    const end = moment().endOf('month').format('YYYY-MM-DD h:mm:ss');
    this.startTime = start;
    this.endTime = end;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gantt-container {
  height: calc(100% - 58px);
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 16px;
}
</style>
