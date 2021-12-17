<template>
  <div>
    <input
      :value="modelValue"
      @input="updateInput"
      class="input-field"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: 'ui-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>
.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid teal;
  margin-bottom: 10px;
}
</style>
