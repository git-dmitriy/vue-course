<template>
  <div class="post">
    <div>
      {{ post.id }}
      <p><strong>Название: </strong>{{ post.title }}</p>
      <p><strong>Описание: </strong>{{ post.body }}</p>
    </div>
    <ui-button @click="$router.push(`/posts/${post.id}`)">Открыть</ui-button>
    <ui-button @click="$emit('remove', post)">Удалить</ui-button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
}
</style>
