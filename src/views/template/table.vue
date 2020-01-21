<template>
  <div name="view-tmp-table">
    <div id="filter">
      <el-row :gutter="5">
        <el-col :span="3">
          <el-input placeholder="请输入内容" size="small"></el-input>
        </el-col>
        <el-col :span="3">
          <el-select placeholder="请选择" size="small" value=""></el-select>
        </el-col>
        <el-col :span="6">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="small"
          ></el-date-picker>
        </el-col>
        <el-col :span="4">
          <el-button size="small" type="primary">搜索</el-button>
          <el-button size="small">重置</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" border stripe style="width: 100%" size="small">
      <el-table-column prop="date" label="日期" width="180" sortable></el-table-column>
      <el-table-column prop="name" label="姓名" width="180" sortable></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style lang="less">
#filter {
  .el-input,
  .el-input {
    margin-bottom: 5px;
    display: inline-block;
  }

  .el-button + .el-button {
    margin-left: 5px;
  }
}
</style>
