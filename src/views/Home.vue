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

      <div class="col s12 m6 l4">
        <div class="card light-green bill-card">
          <div class="card-content white-text" >
            <span class="card-title"><a href="#" @click.prevent="money_off()">Перевести денег на счет</a></span>
            <div class="input-field">
              <i class="material-icons prefix">money_off</i>
              <input id="money_off" type="tel" class="validate">
              <label for="money_off">Введите сумму</label>
            </div>
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
    },
    methods: {
      money_off() {
        window.M.toast({html: 'Это в разработке'})
      }
    }
  }
</script>
