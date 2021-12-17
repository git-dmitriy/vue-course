<template>
  <div class="app">
    <h1></h1>
    <ui-button @click="openModal">Добавить публикацию</ui-button>
    <ui-modal v-model:show="showModal">
      <post-form @create="createPost" />
    </ui-modal>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [
        { id: 1, title: 'Заголовок 1', body: 'Содержание публикации' },
        { id: 2, title: 'Заголовок 2', body: 'Содержание публикации' },
        { id: 3, title: 'Заголовок 3', body: 'Содержание публикации' },
      ],
      showModal: false,
    };
  },
  methods: {
    createPost(post) {
      console.log('post item:', post);
      this.posts.push(post);
      this.showModal = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    openModal() {
      this.showModal = true;
      console.log('this.showModal:', this.showModal);
    },
  },
};
</script>

<style>
.app {
  padding: 20px;
}
</style>
