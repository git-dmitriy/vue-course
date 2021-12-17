<template>
  <form class="form" @submit.prevent>
    <h2>Создать пост</h2>
    <ui-input v-model="post.title" :placeholder="'Название'" />
    <ui-input :placeholder="'Содержание'" v-model="post.body" />
    <div class="btn-container">
      <ui-button @click="create">Создать</ui-button>
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
.form {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
