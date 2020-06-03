<template>
  <div>
    <form class="form" @submit.prevent="submitHandle">
      <div class="page-title">
        <h3>Профиль</h3>
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="name"
        >
        <label for="description">Имя</label>
        <span
          class="helper-text invalid">name</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить имя
        <i class="material-icons right">send</i>
      </button>
    </form>
    <br>
    <button class="btn">
      <router-link to="/changepassword" class="black-text">
        Изменить пароль
      </router-link>
    </button>
    <br>
    <br>
    <button class="btn">
      <router-link to="/change/qoima/information" class="black-text">
        Изменить информацию о складе
      </router-link>
    </button>

  </div>

</template>


<script>

  import {mapGetters} from "vuex";
  import axios from 'axios';

  export default {
    name: 'profile',
    data: () => ({
      name: '',
    }),
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      }),
    },
    mounted() {
      this.name = this.user.name
    },
    methods: {
      submitHandle() {
        axios.post('/change/name', {
          token: this.user.token,
          name: this.name,
          id: this.user.id,
        }).then(() => {
          location.reload()
        }).catch(e => {
          console.log("error", e)
        })
      }
    }
  }
</script>
