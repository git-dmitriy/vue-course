<template>
  <form @submit.prevent>
    <h2>Создать пост</h2>
    <input
      type="text"
      class="input-field"
      v-model="post.title"
      placeholder="Название"
    />
    <input
      type="text"
      class="input-field"
      placeholder="Содержание"
      v-model="post.body"
    />
    <div class="btn-container">
      <ui-button @click="create">компонент кнопки</ui-button>
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
  methods: {
    create() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
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
