<template>

  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <div class="row">
      <div class="col s12 m6 l4">
        <div class="card light-blue bill-card">
          <div class="card-content white-text">
            <span class="card-title">Счет в валюте</span>

            <p class="currency-line">
              <span>{{ sum }} тг</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Home',
    computed: {
    },
    data() {
      return {
        sum: '123123'
      }
    },
    mounted() {
      // post request
      axios.get('/total/sum').then(response => {
        this.sum = response.data.sum
      })
    }
  }
</script>
