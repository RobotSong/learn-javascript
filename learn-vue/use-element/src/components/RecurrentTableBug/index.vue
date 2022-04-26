<template>
  <div>
    <el-button @click="handleChangeData">变更数据</el-button>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="150">
        <template v-slot:default="scope">
          <el-button>查看</el-button>
          <el-button v-if="scope.row.status === 1">编辑1</el-button>
          <template v-else>
            <el-button v-has-permi="['table:list']">编辑2</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const arr = [
  [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    status: 1,
    count: 1,
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
    status: 1,
    count: 1,
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
    status: 2,
    count: 0,
  }],
  [{
    date: '2016-05-02',
    name: '王小虎2',
    address: '上海市普陀区金沙江路 1518 弄',
    status: 2,
    count: 0,
  }, {
    date: '2016-05-04',
    name: '王小虎2',
    address: '上海市普陀区金沙江路 1517 弄',
    status: 2,
    count: 0,
  }, {
    date: '2016-05-01',
    name: '王小虎2',
    address: '上海市普陀区金沙江路 1519 弄',
    status: 1,
    count: 0,
  }]
]

// vue 指令去掉元素，导致 v-if 不生效 bug 复现方案
export default {
  name: 'RecurrentTableBug',
  data() {
    return {
      tableData: arr[0],
      tableIndex: 0,
    }
  },
  methods: {
    handleChangeData() {
      this.tableIndex = this.tableIndex === 1 ? 0 : 1
      this.tableData = arr[this.tableIndex]
    }
  }
}
</script>