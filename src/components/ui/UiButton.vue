<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {},
  models: {},
};
</script>

<style scoped>
.btn-container {
  display: flex;
}

.btn {
  border: 1px solid teal;
  padding: 10px 20px;
  margin-left: auto;
}
</style>
