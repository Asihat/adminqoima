<template>
  <div class="history-chart">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
  //Importing Pie class from the vue-chartjs wrapper
  import { Pie } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Pie,
    data () {
      return {
        datacollection: {
          labels: ['В складе', 'В пути', 'Дома'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 103],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }

      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection)
    }
  }
</script>
