<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ui-button',
};
</script>

<style scoped>
.btn-container {
  display: flex;
}

.btn {
  border: 1px solid teal;
  padding: 10px 20px;
}
</style>
