<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margintop: 20px">
      <el-card class="box-card-top" shadow="hover">
        <div class="user">
          <img :src="userImage" class="image" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<Span>2021/11/21</Span></p>
          <p>上次登录地址：<Span>福州</Span></p>
        </div>
      </el-card>
      <el-card class="box-card-button">
        <el-table :data="tableData" border class="box-card-button-table">
          <el-table-column prop="name" label="课程" width="100">
          </el-table-column>
          <el-table-column prop="todayBuy" label="今日购买" width="100">
          </el-table-column>
          <el-table-column prop="monthBuy" label="本月购买" width="100">
          </el-table-column>
          <el-table-column prop="totalBuy" label="总账" width="100">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-row :gutter="20">
        <el-col :span="8" v-for="index in countData" :key="index.name">
          <div class="grid-content">
            <div
              class="icon_box"
              style="border-radius: 20%; background-color: `${index.color}`;"
            >
              <i class="icon" :class="`el-icon-${index.icon}`"></i>
            </div>
            <div class="detail">
              <p style="font-size: 18px; margin-bottom: 0">
                ¥{{ index.value }}
              </p>
              <p style="font-size: 10px; color: #b9b8ba">¥{{ index.name }}</p>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-card shadow="hover" style="height: 300px">
        <echart :chartData="echartData.order" style="height: 300px"></echart>
      </el-card>
      <div class="graph">
        <el-card shadow="hover" style="height: 300px">
          <echart :chartData="echartData.user" style="height: 280px"></echart>
        </el-card>
        <el-card shadow="hover" style="height: 300px">
          <echart
            :chartData="echartData.video"
            style="height: 280px"
            :isAxisChart="false"
          ></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getHome } from "../../api/data";
import Echart from "@/components/ECharts";
export default {
  components: {
    Echart,
  },
  data() {
    return {
      userImage: require("../../assets/logo.png"),
      tableData: [],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 1234,
          icon: "star-on",
          color: "#2ec7c9",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#2ec7c9",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 1234,
          icon: "star-on",
          color: "#2ec7c9",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#2ec7c9",
        },
      ],
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    };
  },
  methods: {
    getTableData() {
      getHome().then((res) => {
        this.tableData = res.data.tableData;

        //折线图展示
        const order = res.data.orderData;
        let keyArray = Object.keys(order.data[0]);

        //传组件值
        this.echartData.order.xData = order.date;
        keyArray.forEach((key) => {
          this.echartData.order.series.push({
            name: key,
            data: order.data.map((itme) => itme[key]),
            type: "line",
          });
        });

        //柱状图图展示
        (this.echartData.user.xData = res.data.userData.map(
          (itme) => itme.data
        )),
          this.echartData.user.series.push({
            name: "新增用户",
            data: res.data.userData.map((itme) => itme.new),
            type: "bar",
          });
        this.echartData.user.series.push({
          name: "活跃用户",
          data: res.data.userData.map((itme) => itme.active),
          type: "bar",
        });

        this.echartData.video.series.push({
          data: res.data.videoData,
          type: "pie",
        });
      });
    },
  },
  mounted() {
    this.getTableData();
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home";

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
    font-size: 15px;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.icon_box {
  float: left;
  width: 72px;
  height: 72px;
  .icon {
    font-size: 30px;
    display: flex;
    justify-content: center;
    line-height: 72px;
  }
}

.detail {
  float: left;
  padding-left: 15px;
}
.grid-content {
  border-radius: 4px;
  min-height: 72px;
  background-color: #fff;
  margin-bottom: 10px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
