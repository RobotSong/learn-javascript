<template>
  <el-popover placement="bottom" trigger="hover">
    <div
        slot="reference"
        class="plan"
        :style="{
        'background-color': statusColor,
        'margin-top': 0.1 * cellHeight + 'px'
      }"
        @click="onClick"
    >
      <div class="runTime">
        <span>S:{{ startToString }}</span>
        <span>E:{{ endToString }}</span>
      </div>
      <div class="middle">编号{{ item.name }}</div>
      <!-- <div class="passenger">{{item.passenger}}人</div> -->
    </div>

    <div class="detail">
      <span class="header">{{ data.type }}{{ data.name }}{{ data.id }}</span>
      <ul>
        <li>
          <span>发车时间：</span><span>{{ startToString }}</span>
        </li>
        <li>
          <span>到站时间：</span><span>{{ endToString }}</span>
        </li>
        <li>
          <span>载员：</span><span>{{ item.passenger }}</span>
        </li>
        <li>
          <span>编号：</span><span>{{ item.id }}</span>
        </li>
      </ul>
    </div>
  </el-popover>
</template>

<script>
import moment from "moment";

const NOW_PLAN = "#D5F8EA";
const FUTHER_PLAN = "#BFF2FE";
const PAST_PLAN = "#F2F2F2";

export default {
  name: "GanttBlock",
  components: {
  },
  props: {
    data: Object,
    item: Object,
    currentTime: moment(),
    updateTimeLines: Function,
    cellHeight: Number,
    startTimeOfRenderArea: Number
  },
  data() {
    return {
      moment: moment
    };
  },
  computed: {
    statusColor() {
      let { item, currentTime } = this;
      let start = moment(item.start);
      let end = moment(item.end);
      if (start.isBefore(currentTime) && end.isAfter(currentTime)) {
        return NOW_PLAN; // NOW
      } else if (end.isBefore(currentTime)) {
        return PAST_PLAN; // PAST
      } else {
        return FUTHER_PLAN; // Future
      }
    },
    startToString() {
      return moment(this.item.start).format("HH:mm");
    },
    endToString() {
      return moment(this.item.end).format("HH:mm");
    }
  },
  methods: {
    onClick() {
      this.updateTimeLines(this.item.start, this.item.end);
    }
  }
};
</script>

<style scoped>
.middle {
  flex: 1;
  text-align: center;
  padding-left: 5px;
}
.runTime {
  display: flex;
  flex-direction: column;
}
.plan {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 80%;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  color: #333333;
  padding-left: 5px;
  font-size: 0.8rem;
}
.detail .header {
  text-align: center;
  font-size: 1rem;
}
.detail ul {
  list-style: none;
  padding: 0px;

}
.detail ul li span {
  display: inline-block;
  width: 80px;
  color: #777;
  font-size: 0.8rem;
}

.detail ul li span:first-child {
    text-align: right;
}

.detail ul li span:last-child {

}
</style>