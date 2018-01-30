<template>
<div>
    <p>Dashboard</p>
    <div id="chartContainer"></div>
</div>
</template>

<script>
import { init, dispose } from 'echarts/src/echarts'
import 'echarts/src/chart/pie'
import 'echarts/src/component/legend'
import 'echarts/src/component/tooltip'
import 'echarts/src/component/title'
export default {
  pie: null,
  computed: {
    chartData: function () {
      return [{
        name: 'hero',
        value: this.$store.state.heroes.length
      }, {
        name: 'crisis',
        value: this.$store.state.crisisLibary.length
      }, {
        name: 'message',
        value: this.$store.state.msgs.length
      }]
    }
  },
  mounted: function () {
    const container = document.getElementById('chartContainer')
    this.pie = init(container)
    this.pie.setOption({
      title: {
        text: '汇总信息',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'right',
        data: ['hero', 'crisis', 'message']
      },
      series: {
        type: 'pie',
        radius: ['30%', '50%'],
        label: {
          normal: {
            show: true,
            position: 'outside'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: true
          }
        },
        data: this.chartData
      }
    })
  },
  beforeUpdate: function () {
    this.pie.setOption({
      series: {
        data: this.chartData
      }
    })
  },
  destroyed: function () {
    dispose(this.pie)
  }
}
</script>

<style>
#chartContainer {
  width: 300px;
  height: 200px;
}
</style>
