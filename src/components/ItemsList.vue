<template>
  <div id="itemlist">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Имя товара</th>
        <th>ID клиента</th>
        <th>Статус</th>
        <th>Фото</th>
        <th>Дата создания</th>
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
          <img v-bind:src="'https://laravel.memento-mori.site/' + item.photo" alt="" width="80px">
        </td>
        <td>
          {{ item.created_at }}
        </td>

      </tr>

      </tbody>
    </table>
    <p>Статусы: 0 - Только что созданные, 1 - В складе, 2 - В пути к складу, 3 - В пути к домой, 10 - Ошибка</p>
  </div>
</template>

<script>
  export default {
    props: ['items'],
    components: {},
    methods: {}
  }
</script>
