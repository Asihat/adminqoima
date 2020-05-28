<template>
  <div id="itemlist">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>ID of user</th>
        <th>status</th>
        <th>Photo</th>
        <th>Created Data</th>
      </tr>
      </thead>
      <tbody>

        <tr v-for="(item, i) in items"
            :key="i"
        >
          <th>
            <router-link :to="{ name: 'item', params: {id: item.id}}">
            {{ item.id }}
            </router-link>
          </th>

          <td>
            {{ item.name}}
          </td>
          <td>
            {{ item.user_id }}
          </td>
          <td>
            {{ item.status }}
          </td>
          <td>
            <img v-bind:src="'http://qoima.com/' + item.photo" alt="" width="80px">
          </td>
          <td>
            {{ item.created_at }}
          </td>

        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['items'],
    components: {},
    methods: {}
  }
</script>
