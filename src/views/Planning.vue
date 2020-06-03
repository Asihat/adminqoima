<template>
  <div>
    <div class="page-title">
      Диаграмма
    </div>
    <h5>Количество товаров где они находятся</h5>
    <PieChart />
    <h5>Количество заказов в месяцах</h5>
    <LineChart />
    <h5>Количество заказов в месяцах(Алтернативная версия)</h5>
    <BarChart />

  </div>
</template>

<script>
  import LineChart from '@/diagrams/LineChart';
  import BarChart from '@/diagrams/BarChart';
  import PieChart from "@/diagrams/PieChart";

  export default {
    name: 'planning',
    mounted() {
    },
    components: {
      PieChart,
      LineChart,
      BarChart
    }
  }
</script>

<style scoped>
  .history-chart {
    margin-bottom: 50px;
  }
</style>
