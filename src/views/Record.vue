<template>
  <div>
    <div class="page-title">
      <h3>Новый предмет</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <select>
          <option
          >name cat
          </option>
        </select>
        <label></label>
      </div>

      <div class="input-field">
        <input
          id="amount"
          type="number"
        >
        <label for="amount">Сумма</label>
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
        >
        <label for="description">Описание</label>
      </div>

      <div class="input-field">
        <input
          id="description4"
          type="text"
        >
        <label for="description">Имя</label>
      </div>
      <div class="input-field">
        <input
          id="description3"
          type="text"
        >
        <label for="description">Статус</label>
      </div>
      <div class="input-field">
        <input
          id="description2"
          type="text"
        >
        <label for="description">ИД клиента</label>
      </div>
      <button class="btn waves-effect waves-light" type="submit" @click.prevent="additem">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'newrecord',
    methods: {
      additem() {
        setTimeout(() => {
          window.M.toast({html: 'Предмет добавлен'})
        }, 800)
      }
    }
  }
</script>
