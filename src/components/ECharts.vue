<template>
  <div ref="echart"></div>
</template>
<script>
import * as echarts from "echarts";

export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        };
      },
    },
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    chartData: {
      handler: function () {
        this.initChart();
      },
      deep: true,
    },
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOptions : this.normalOption;
    },
  },
  methods: {
    initChart() {
      this.initChartData();
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOptions.xAxis.data = this.chartData.xData;
        this.axisOptions.series = this.chartData.series;
      } else {
        this.normalOption.series = this.chartData.series;
      }
    },
  },
  data() {
    return {
      axisOptions: {
        legend: {
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: [],
          axisLine: {
            lineStyle: {
              color: "#17b323",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b334",
              },
            },
          },
        ],
        color: [
          "#2e41a2",
          "#b5a234",
          "#5ab345",
          "#ffb234",
          "#d87234",
          "#8d9234",
        ],
        series: [],
      },
      normalOption: {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f7234",
          "#dd5322",
          "#964234",
          "#a6a234",
          "#e1b234",
          "#39c234",
          "#3ed234",
        ],
        series: [],
      },
      echart: null,
    };
  },
};
</script>
