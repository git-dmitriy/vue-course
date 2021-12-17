<template>
  <div class="app">
    <post-form @create="createPost" />
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
    };
  },
  methods: {
    createPost(post) {
      console.log('post item:', post);
      this.posts.push(post);
    },
  },
};
</script>

<style>
.app {
  padding: 20px;
}
</style>
