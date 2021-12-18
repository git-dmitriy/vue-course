<template>
  <div class="app">
    <h1></h1>
    <div class="app-header">
      <ui-button @click="openModal">Добавить публикацию</ui-button>
      <ui-input v-model="searchQuery" :placeholder="'Найти публикацию'" />
      <ui-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <post-list
      :posts="sortedAndSearchPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идёт загрузка...</div>

    <ui-modal v-model:show="showModal">
      <post-form @create="createPost" />
    </ui-modal>

    <div class="observer" ref="observer"></div>
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
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
      ],
      page: 1,
      limit: 10,
      totalPages: 0,
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
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        );
        this.posts = response.data;
        console.log('response:', response);
      } catch (error) {
        console.log("cant't fetch:", error);
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
        console.log('response:', response);
      } catch (error) {
        console.log("cant't fetch:", error);
      } finally {
        this.isPostsLoading = false;
      }
    },
  },

  mounted() {
    this.fetchPosts();

    console.log('observer:', this.$refs.observer);
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
        console.log('crossed');
      }
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(this.$refs.observer);
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
    sortedAndSearchPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  watch: {},
};
</script>

<style>
.app {
  padding: 20px;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.observer {
  min-height: 100px;
  background-color: teal;
}
</style>
