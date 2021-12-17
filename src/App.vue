<template>
  <div class="app">
    <post-form />
    <post-list :posts="posts" />
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
      post: { title: '', body: '' },
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
</style>
