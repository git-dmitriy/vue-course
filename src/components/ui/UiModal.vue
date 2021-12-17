<template>
  <div class="modal" v-if="show" @click="closeModal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false);
    },
  },
};
</script>

<style scoped>
.modal {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.modal__content {
  margin: auto;
  padding: 15px;
  background-color: rgb(199, 199, 199);
  border-radius: 12px;
  min-height: 100px;
  min-width: 300px;
}
</style>
