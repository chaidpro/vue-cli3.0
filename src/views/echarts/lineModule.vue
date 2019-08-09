<template>
    <div id="line" class ref="lineModule" style="width: 100%;height:100%;"></div>
</template>
<script>
export default {
  name: 'line-module',
  data () {
    return {
      lineData: {
        days: [
          '08/31',
          '09/30',
          '10/31',
          '11/30',
          '12/31',
          '01/31',
          '02/28',
          '03/31',
          '04/30',
          '05/31',
          '06/30'
        ],
        names: [
          '智能单车',
          '车联网后装',
          '设备监控',
          '集成服务',
          '能源电力',
          '金融行业',
          '电脑笔记本',
          '车联网前装',
          '穿戴设备',
          '其他'
        ],
        series: [
          {
            type: 'line',
            smooth: true,
            name: '智能单车',
            data: [
              18100475,
              17889371,
              17686874,
              17388867,
              17380628,
              17380273,
              17429519,
              17429412,
              17415908,
              17415894,
              17115975
            ]
          },
          {
            type: 'line',
            smooth: true,
            name: '车联网后装',
            data: [
              7070181,
              6841218,
              6588776,
              6392380,
              6089268,
              6006574,
              5816550,
              5464461,
              4758448,
              4410447,
              2704250
            ]
          },
          {
            type: 'line',
            smooth: true,
            name: '设备监控',
            data: [
              1554408,
              1561933,
              1556093,
              1557834,
              1558638,
              1559281,
              1559560,
              1556858,
              1558122,
              1559017,
              1559842
            ]
          },
          {
            type: 'line',
            smooth: true,
            name: '集成服务',
            data: [
              1369993,
              4037153,
              4611993,
              4870606,
              4870505,
              4909901,
              4830462,
              4828117,
              4823639,
              4791275,
              3366732,
              3359746
            ]
          },
          {
            type: 'line',
            smooth: true,
            name: '能源电力',
            data: [
              1716100,
              1717079,
              1716221,
              1713661,
              1712774,
              1717848,
              1717912,
              1604078,
              1526842,
              1308699,
              632195
            ]
          },
          {
            type: 'line',
            smooth: true,
            name: '金融行业',
            data: [
              983580,
              1050144,
              1058452,
              1118448,
              1124737,
              1127591,
              1129918,
              1132038,
              1133816,
              1086947,
              591901
            ]
          },
          {
            type: 'line',
            smooth: true,
            name: '电脑笔记本',
            data: [
              2036046,
              2147908,
              2538739,
              2538058,
              2540416,
              2531294,
              2532204,
              2515981,
              2502380,
              2280107,
              1817594
            ]
          },
          {
            type: 'line',
            smooth: true,
            name: '车联网前装',
            data: [
              307563,
              294948,
              288973,
              262073,
              251183,
              244876,
              215087,
              212756,
              200928,
              196765,
              192539
            ]
          },
          {
            type: 'line',
            smooth: true,
            name: '穿戴设备',
            data: [
              996454,
              997601,
              998779,
              1072404,
              1071833,
              1038957,
              804449,
              505531,
              505389,
              110278
            ]
          },
          {
            type: 'line',
            smooth: true,
            name: '其他',
            data: [
              76955313,
              20782343,
              20186951,
              20997646,
              19284322,
              18203734,
              17692652,
              14923155,
              13452518,
              15062972,
              11708613,
              1802213
            ]
          }
        ]
      }
    };
  },
  computed: {
    option () {
      return {
        legend: {
          data: this.lineData.names,
          width: 500,
          left: 180,
          textStyle: {
            fontSize: 10,
            color: '#333'
          }
        },
        color: [
          '#C1232B',
          '#B5C334',
          '#FCCE10',
          '#E87C25',
          '#27727B',
          '#60C0DD',
          '#D7504B',
          '#6f7be8',
          '#83e86f',
          '#e06fe8'
        ],
        xAxis: {
          boundaryGap: false,
          data: this.lineData.days,
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#333'
            }
          }
        },
        series: this.lineData.series,
        title: {
          subtext: '\n单位(%)',
          subtextStyle: {
            fontSize: 14,
            color: '#333',
            fontWeight: 'normal'
          },
          textStyle: {
            fontSize: 14,
            color: '#333',
            fontWeight: 'normal'
          },
          text: ''
        },
        grid: {
          bottom: '2%',
          containLabel: true,
          left: '2%',
          right: '2%'
        },
        tooltip: {
          trigger: 'axis'
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#333'
            }
          }
        }
      };
    }
  },
  mounted () {
    this.myChart = this.$echarts.init(this.$refs.lineModule);
    this.initData();
    var triggerAction = (action, selected) => {
      var legend = [];
      for (let name in selected) {
        if (selected.hasOwnProperty(name)) {
          legend.push({ name: name });
        }
      }
      this.myChart.dispatchAction({
        type: action,
        batch: legend
      });
    };
    let step = 0;
    var isFirstUnSelect = function (selected) {
      step++;
      var unSelectedCount = 0;
      for (let name in selected) {
        if (!selected.hasOwnProperty(name)) {
          continue;
        }
        if (selected[name] === false) {
          ++unSelectedCount;
        }
      }
      return unSelectedCount === 1 && step === 1;
    };
    var isAllUnSelected = function (selected) {
      var selectedCount = 0;
      for (let name in selected) {
        if (!selected.hasOwnProperty(name)) {
          continue;
        }
        // 所有 selected Object 里面 true 代表 selected， false 代表 unselected
        if (selected[name] === true) {
          ++selectedCount;
        }
      }
      if (selectedCount === 10 || selectedCount === 0) {
        step = 0;
      }
      return selectedCount === 0;
    };
    this.myChart.on('legendselectchanged', function (params) {
      var selected = params.selected;
      // var legend = params.name;
      if (selected !== undefined) {
        if (isFirstUnSelect(selected)) {
          triggerAction('legendToggleSelect', selected);
        } else if (isAllUnSelected(selected)) {
          triggerAction('legendSelect', selected);
        }
      }
    });
  },
  methods: {
    initData () {
      this.myChart.setOption(this.option);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
