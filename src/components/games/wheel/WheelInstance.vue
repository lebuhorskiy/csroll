<template>
  <div class="wheel-instance">
    <div class="circle-bg"></div>
    <canvas id="chart" ref="chart" width="860" height="860"></canvas>
    
    <div class="cursor">
      <img src="@/assets/images/jackpot-cursor.png" alt="">
    </div>
    
  </div>
</template>
<script>
import Chart from 'chart.js';
export default {
  mounted() {
    var canvas = this.$refs.chart;

    window.arcSpacing = 0.04;
    window.segmentHovered = false;

    const colors = []
    const datas = []


    let index = -1
    const getColor = () => {
      let colors = ['#EAC159', '#A430FF', '#4E70E9', 'rgba(74, 186, 98, 1)'];
      index++
      if (!colors[index]) {
        index = 0
      }

      return colors[index]
    };

    let i = 0
    while (i < 41) {
      colors.push(getColor())
      datas.push(2.5)
      i++;
    }


    Chart.elements.Arc.prototype.draw = function() {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var sA = vm.startAngle;
      var eA = vm.endAngle;

      ctx.beginPath();
      ctx.arc(vm.x, vm.y, vm.outerRadius, sA + window.arcSpacing, eA - window.arcSpacing);
      ctx.strokeStyle = vm.backgroundColor;
      ctx.lineWidth = vm.borderWidth;
      ctx.lineCap = 'round';
      ctx.stroke();
      ctx.closePath();
    };

    var config = {
      type: 'doughnut',
      data: {
        labels: ['Pink', 'Grey', 'Blue'],
        datasets: [
          {
            data: datas,
            backgroundColor: colors,
          }
        ]
      },
      options: {
        cutoutPercentage: 80,
        elements: {
          arc: {
            borderWidth: 12,
          },
        },
        legend: {
          display: false,
        },
        animation: {
        },
        tooltips: {
          enabled: false,
        },
      },
    };


    window.chart = new Chart(canvas, config);

    setTimeout(() => {
      window.chart.resize()
    }, 1000)
  }
}

</script>
<style scoped lang="scss">
.wheel-instance {
  width: 850px;
  height: 855px;
  position: absolute;
  left: -470px;
  top: -600px;
  .circle-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    border: 60px solid rgba(69, 84, 137, 0.1);
    border-radius: 100%;
    top: 16px;
    left: 16px;
  }
  .cursor {
    position: absolute;
    bottom: 50px;
    right: 100px;
  }
}

</style>