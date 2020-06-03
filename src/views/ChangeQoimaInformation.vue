<template>
  <div>
    <div class="input-field col s6">
      <p>Name</p>
      <input id="name" placeholder="Name" type="text" class="validate" v-model="name">
    </div>
    <div class="input-field col s6">
      <p>Description</p>
      <input id="description" type="text" class="validate" v-model="description">
    </div>
    <div class="input-field col s6">
      <p>Address</p>
      <input id="address" type="text" class="validate" v-model="address">
    </div>
    <div class="input-field col s6">
      <p>Latitude</p>
      <input id="latitude" type="text" class="validate" v-model="latitude">
    </div>
    <div class="input-field col s6">
      <p>Longtitude</p>
      <input id="longtitude" type="text" class="validate" v-model="longtitude">
    </div>
    <div class="input-field col s6">
      <p>URL address</p>
      <input id="url_address" type="text" class="validate" v-model="url_address">
    </div>
    <div class="input-field col s6">
      <p>Working time</p>
      <input id="working_time" type="text" class="validate" v-model="working_time">
    </div>
    <div class="input-field col s6">
      <p>Phone information</p>
      <input id="phone" type="text" class="validate" v-model="phone">
    </div>
    <div class="input-field col s6">
      <p>Email</p>
      <input id="email" type="text" class="validate" v-model="email">
    </div>
    <a class="waves-effect waves-light btn" @click.prevent="changeqoimainformation()">Изменить информацию</a>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapGetters} from "vuex";

  export default {
    name: 'changeqoimainformation',
    data: () => ({
      name: '',
      description: '',
      address: '',
      latitude: '',
      longtitude: '',
      url_address: '',
      working_time: '',
      phone: '',
      email: '',
    }),
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      }),

    },
    mounted() {
      this.getQoimaInformation()
    },
    methods: {
      getQoimaInformation() {
        axios.post('/qoima/information', {
          token: this.user.token
        }).then((response) => {
          this.name = response.data.qoima.name
          this.description = response.data.qoima.description
          this.address = response.data.qoima.address
          this.latitude = response.data.qoima.latitude
          this.longtitude = response.data.qoima.longitude
          this.url_address = response.data.qoima.url_address
          this.working_time = response.data.qoima.working_time
          this.phone = response.data.qoima.phone
          this.email = response.data.qoima.email
        }).catch((e) => {
          console.log(e)
        })
      },
      changeqoimainformation() {
        console.log('Change Qoima Information')
        axios.post('/qoima/changeinformation', {
          token: this.user.token,
          name: this.name,
          description: this.description,
          address: this.address,
          latitude: this.latitude,
          longtitude: this.longtitude,
          url_address: this.url_address,
          working_time: this.working_time,
          phone: this.phone,
          email: this.email,
        }).then(() => {

        }).catch((e) => {
          console.log(e)
        })
      }
    },
  }
</script>
