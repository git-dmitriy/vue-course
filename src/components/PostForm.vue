<template>
  <form @submit.prevent>
    <h2>Создать пост</h2>
    <input
      type="text"
      class="input-field"
      v-bind:value="post.title"
      @input="post.title = $event.target.value"
      placeholder="Название"
    />
    <input
      type="text"
      class="input-field"
      placeholder="Содержание"
      v-bind:value="post.body"
      @input="post.body = $event.target.value"
    />
    <div class="btn-container">
      <button class="btn">Добавить</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid teal;
  margin-bottom: 10px;
}

.btn-container {
  display: flex;
}

.btn {
  border: 1px solid teal;
  padding: 10px 20px;
  margin-left: auto;
}
</style>
