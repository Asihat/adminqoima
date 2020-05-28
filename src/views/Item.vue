<template v-if="loading">
  <div>Loading</div>
</template>
<template v-else>
  <div>
    <p class="attr">Item info:</p>
    <p>ID: {{ item.id }}</p>
    <p class="attr">Name:</p>
    <input type="text" v-model="item.name">
    <p class="attr">Description:</p>
    <input type="text" v-model="item.description">
    <p class="attr">Name of User:</p>
    <p>{{ item.userName }}</p>
    <p class="attr">Category:</p>
    <p>{{ item.category }}</p>
    <p class="attr">Photo:</p>
    <input type="text" v-model="item.photo">
    <p class="attr">Status:</p>
    <input type="text" v-model="item.status">
    <p class="attr">Updated at:</p>
    <input type="text" v-model="item.updated_at">
    <button @click.prevent="update">Update</button>
    <button @click.prevent="deleteItem">Delete</button>
  </div>
</template>


<script>
  import axios from 'axios'
  import {mapGetters} from "vuex";


  export default {
    name: 'item',
    data() {
      return {
        item: {
          id:'',
          name: '',
          description: '',
          userName: '',
          category: '',
          photo: '',
          status: '',
          updated_at: '',
        },
        categories: null,
        loading: true,
      }
    },
    created() {
      // post request
      console.log('loading')
      axios.post('/get/item', {
        token: this.user.token,
        item_id: this.$route.params.id
      }).then(response => {
        this.categories = response.data.categories
        this.item = response.data.item
        this.loading = false
        console.log(this.categories)
        console.log('loaded')
      })

    },
    mounted() {
      // this.dropdown = window.M.Dropdown.init(this.$refs.dropdown, {})
    },
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      }),
    },
    methods: {
      update() {
        console.log('update')
        let formData = {
          id: this.item.id,
          token: this.user.token,
          name: this.item.name,
          description: this.item.description,
          status: this.item.status,
          updated_at: this.item.updated_at
        }
        console.log(formData)
        axios.post('/update/item', formData).then(response=>{
          console.log(response)
        }).catch(e => {
          console.log("error", e)
        })
      },

      deleteItem() {
        console.log('Delete item');

        this.$router.push('/history').catch(err => {
          console.log(err)
        })
        let formData = {
          token: this.user.token,
          id: this.item.id
        }

        axios.post('/delete/item', formData).then(response=> {
          console.log(response)
          this.$router.push('history')
        })
      }
    }

  }
</script>


<style scoped>
  .attr {
    font-weight: bold;
  }
</style>
