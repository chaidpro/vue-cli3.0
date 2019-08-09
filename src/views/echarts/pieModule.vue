<template>
      <div id="pie" ref="pieModule" style="height:100%"></div>
</template>

<script>
export default {
  name: 'pie-module',
  mounted () {
    this.myChart = this.$echarts.init(this.$refs.pieModule);
    this.initData();
  },
  data () {
    return {
      myChart: null,
      option: {}
    };
  },
  methods: {
    initData () {
      var data = [
        {
          value: 2800,
          name: '1'
        },

        {
          value: 335,
          name: '2'
        },

        {
          value: 315,
          name: '3'
        }
      ];

      this.option = {
        // backgroundColor: '#333',
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c}',
          confine: true
        },

        color: [
          '#ff9f7e',
          '#5f71d2',
          '#f36f8a'
        ],

        legend: {
          // 图例组件，颜色和名字
          left: 'center',
          bottom: '6%',
          itemGap: 6, // 图例每项之间的间隔
          itemWidth: 9,
          itemHeight: 9,
          icon: 'circle',
          data: ['第一项', '第二项', '第三项'],
          textStyle: {
            color: [],
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 10
          }
        },

        series: [
          {
            name: '违规次数',
            type: 'pie',
            clockwise: false, // 饼图的扇区是否是顺时针排布
            minAngle: 20, // 最小的扇区角度（0 ~ 360）
            center: ['50%', '45%'], // 饼图的中心（圆心）坐标
            radius: ['40%', '80%'], // 饼图的半径
            avoidLabelOverlap: true, /// /是否启用防止标签重叠
            itemStyle: {
              // 图形样式
              normal: {
                borderColor: '#1e2239',

                borderWidth: 1.5
              }
            },

            label: {
              // 标签的位置
              normal: {
                show: true,
                position: 'inside', // 标签的位置
                formatter: '{d}%',
                textStyle: {
                  color: '#333'
                }
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontWeight: 'bold'
                }
              }
            },
            data: data
          },
          {
            name: '',
            type: 'pie',
            clockwise: false,
            silent: true,
            minAngle: 20, // 最小的扇区角度（0 ~ 360）
            center: ['50%', '45%'], // 饼图的中心（圆心）坐标
            radius: [0, '38%'], // 饼图的半径
            itemStyle: {
              // 图形样式
              normal: {
                borderColor: '#1e2239',
                borderWidth: 1.5,
                opacity: 0
              }
            },
            label: {
              // 标签的位置
              normal: {
                show: false
              }
            },
            data: data
          }
        ]
      };
      this.myChart.setOption(this.option);
    }
  },
  watch: {
    data (val) {
      this.initData();
    }
  }
};
</script>

<style lang="less" scope>
</style>
