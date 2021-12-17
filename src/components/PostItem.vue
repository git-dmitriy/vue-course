<template>
  <div class="post">
    <div>
      <p><strong>Название: </strong>{{ post.title }}</p>
      <p><strong>Описание: </strong>{{ post.body }}</p>
    </div>
    <ui-button>Удалить</ui-button>
  </div>
</template>

<script>
import UiButton from './ui/UiButton.vue';

export default {
  components: { UiButton },

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
