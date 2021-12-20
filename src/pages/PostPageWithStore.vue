<template>
  <div>
    <div class="app-header">
      <ui-button @click="openModal">Добавить публикацию</ui-button>
      <ui-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        :placeholder="'Найти публикацию'"
      />
      <ui-select
        @model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
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

    <div class="observer" v-intersection="loadMorePosts" />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSelectedSort: 'post/setSelectedSort',
      setSearchQuery: 'post/setSearchQuery',
    }),

    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),

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

  mounted() {
    this.fetchPosts();
  },

  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      sortOptions: (state) => state.post.sortOptions,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchPosts: 'post/sortedAndSearchPosts',
    }),
  },

  watch: {},
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
