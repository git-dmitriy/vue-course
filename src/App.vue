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
import axios from 'axios';

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [],
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
    async fetchPosts() {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts?_limit=10'
          );
          this.posts = response.data;
          console.log('response:', response);
        }, 1000);
      } catch (error) {
        console.log("cant't fetch:", error);
      }
    },
  },

  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
.app {
  padding: 20px;
}
</style>
