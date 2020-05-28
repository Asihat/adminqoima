<template>
  <div>
    <div class="page-title">
      <h3>Предметы</h3>
    </div>

    <section>
      <ItemsList
        v-bind:items="items"
      />
    </section>

    <div class="pagination">
      <button class="btn btn-default" v-on:click="fetchPaginateUsers(pagination.prev_page_url)"
              :disabled="!pagination.prev_page_url">
        Previos
      </button>
      <span>Page {{pagination.current_page}} of {{ pagination.last_page}}</span>
      <button class="btn btn-default" v-on:click="fetchPaginateUsers(pagination.next_page_url)"
              :disabled="!pagination.next_page_url">
        Next
      </button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex'
  import ItemsList from '@/components/ItemsList'

  export default {
    name: 'History',
    components: {ItemsList},
    data() {
      return {
        items: null,
        url: '/get/listofitems',
        pagination: []
      }
    },
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      }),
    },
    mounted() {
      axios.post(this.url, {
        token: this.user.token
      }).then(response => {
        this.items = response.data.items.data
        this.makePagination(response.data.items)
        console.log(response.data.items)
        console.log(this.items)
      })
    },
    methods: {
      getItems() {
        axios.post(this.url, {
          token: this.user.token
        }).then(response => {
          this.items = response.data.items.data
          this.makePagination(response.data.items)
          console.log(response.data.items)
          console.log(this.items)
        })
      },

      makePagination(data) {
        let pagination = {
          current_page: data.current_page,
          last_page: data.last_page,
          next_page_url: data.next_page_url,
          prev_page_url: data.prev_page_url,
        }

        this.pagination = pagination
      },
      fetchPaginateUsers(url) {
        this.url = url
        this.getItems()
      }
    }
  }
</script>
