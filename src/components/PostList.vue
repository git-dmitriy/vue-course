<template>
  <div class="post" v-for="post in posts" v-bind:key="post.id">
    <p><strong>Название: </strong>{{ post.title }}</p>
    <p><strong>Описание: </strong>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
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
