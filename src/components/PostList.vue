<template>
  <div v-if="posts.length !== 0">
    <h1>Публикации:</h1>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h1 v-else>Не доступных публикаций</h1>
</template>

<script>
import PostItem from '@/components/PostItem';

export default {
  components: {
    PostItem,
  },

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 1px solid teal;
}
</style>
