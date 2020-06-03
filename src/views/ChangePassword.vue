<template>
  <div>
    <div class="row">
      <div class="input-field col s12">
        <input id="password" type="password" class="validate" v-model="password">
        <label for="password">Введите пароль</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="repassword" type="password" class="validate" v-model="repassword">
        <label for="repassword">Введите пароль еще раз</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="newpassword" type="password" class="validate" v-model="newpassword">
        <label for="newpassword">Введите новый Пароль</label>
      </div>
    </div>
    <a class="waves-effect waves-light btn" @click.prevent="changepassword()">Изменить пароль</a>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapGetters} from "vuex";

  export default {
    name: 'changepassword',
    data: () => ({
      password: '',
      repassword: '',
      newpassword: ''
    }),
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      })
    },
    methods: {
      changepassword() {
        if (this.password === this.repassword) {
          let form = {
            token: this.user.token,
            oldpassword: this.password,
            newpassword: this.newpassword,
          }

          axios.post('/changepassword', form).then((response) => {
            if(response.data.success) {
              window.M.toast({html: 'Пароль изменен'})
            } else {
              window.M.toast({html: response.data.message})
            }
          }).catch((e) => {
            console.log(e)
          })

          //alert answer
        } else {
          //alert('Password incorrect')
          window.M.toast({html: 'incorrect'})
        }
      }
    },
  }
</script>
