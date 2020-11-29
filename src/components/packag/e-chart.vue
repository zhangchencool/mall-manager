<template>
<div id="echart" :style="{height: '400px'}"></div>
</template>

<script>
export default {
  data () {
    return {
      xAxisData: ['类目', '类目', '类目', '类目', '类目', '类目'],
      data1: [231, 217, 221, 123, 168, 134],
      data2: [231, 217, 221, 123, 168, 134]
    }
  },
  created () {

  },
  methods: {
    initechart (opt) {
      const chartObj = this.$echarts.init(document.getElementById('echart'))
      const option = {
        title: {
          text: '柱状图动画延迟'
        },
        legend: {
          data: ['bar', 'bar2']
        },
        toolbox: {
          // y: 'bottom',
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: this.xAxisData,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: this.data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: this.data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }

      chartObj.setOption(option)
    }
  },
  mounted () {
    this.initechart()
  },
  components: {

  }
}
</script>

<style>

</style>
