<template>
  <div v-if="items">
    <div class="page-title">
      <h3>Предметы</h3>
    </div>

    <section v-if="!loading">
      <div class="progress">
        <div class="determinate" style="width: 70%"></div>
      </div>
    </section>

    <section v-else>
      <ItemsList
        v-bind:items="items"
      />
    </section>
    <br>
    <div class="pagination">
      <button class="btn btn-default" v-on:click="fetchPaginateUsers(pagination.prev_page_url)"
              :disabled="!pagination.prev_page_url"
              style="margin: 5px"
      >
        Previos
      </button>
      <span>Page {{pagination.current_page}} of {{ pagination.last_page}}</span>
      <button class="btn btn-default" v-on:click="fetchPaginateUsers(pagination.next_page_url)"
              :disabled="!pagination.next_page_url"
              style="margin: 5px"
      >
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
        pagination: [],
        loading: true,
        token: '',
      }
    },
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      }),
    },
    mounted() {
      this.token = this.user.token
      axios.post(this.url, {
        token: this.token
      }).then(response => {
        this.items = response.data.items.data
        this.makePagination(response.data.items)
        this.loading = true
      })
    },
    methods: {
      getItems() {
        this.token = this.user.token
        axios.post(this.url, {
          token: this.token
        }).then(response => {
          this.items = response.data.items.data
          this.makePagination(response.data.items)
          console.log(this.items)
          this.loading = true
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
