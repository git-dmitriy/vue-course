import axios from 'axios';

export const postModule = {
  state: () => ({
    posts: [],
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
  }),

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setIsPostsLoading(state, isPostLoading) {
      state.isPostLoading = isPostLoading;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
  },

  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((a, b) =>
        a[state.selectedSort]?.localeCompare(b[state.selectedSort])
      );
    },
    sortedAndSearchPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },

  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setIsPostsLoading', true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          'setTotalPages',
          Math.ceil(response.headers['x-total-count'] / state.limit)
        );
        commit('setPosts', response.data);
        // this.posts = response.data;
      } catch (error) {
        console.log("cant't fetch:", error);
      } finally {
        commit('setIsPostsLoading', false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit('setIsPostsLoading', true);
        commit('setPage', (state.page += 1));
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          'setTotalPages',
          Math.ceil(response.headers['x-total-count'] / state.limit)
        );
        commit('setPosts', [...state.posts, ...response.data]);
        // this.posts = [...this.posts, ...response.data];
      } catch (error) {
        console.log("cant't fetch:", error);
      } finally {
        commit('setIsPostsLoading', false);
      }
    },
  },
  namespaced: true,
};
