<template>
  <div class="app">
    <form @submit.prevent>
      <h2>Создать пост</h2>
      <input
        type="text"
        name=""
        id=""
        class="input-field"
        v-bind:value="title"
        @input="title = $event.target.value"
        placeholder="Название"
      />
      <input
        type="text"
        name=""
        id=""
        @input="body = $event.target.value"
        class="input-field"
        v-bind:value="body"
        placeholder="Содержание"
      />
      <div class="btn-container">
        <button @click="createPost" class="btn">Добавить</button>
      </div>
    </form>

    <div class="post" v-for="post in posts" v-bind:key="post.id">
      <p><strong>Название:</strong>{{ post.title }}</p>
      <p><strong>Описание:</strong>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'Заголовок 1', body: 'Содержание публикации' },
        { id: 2, title: 'Заголовок 2', body: 'Содержание публикации' },
        { id: 3, title: 'Заголовок 3', body: 'Содержание публикации' },
      ],
      title: '',
      body: '',
    };
  },
  methods: {
    createPost() {
      const newPost = { id: Date.now(), title: this.title, body: this.body };
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
  },
};
</script>

<style>
.app {
  padding: 20px;
}
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

.post {
  padding: 15px;
  border: 1px solid teal;
}
</style>
