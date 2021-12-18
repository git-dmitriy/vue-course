<template>
  <div>
    <input
      :value="modelValue"
      @input="updateInput"
      :placeholder="placeholder"
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
    placeholder: [String],
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
  padding: 10px;
  border: 1px solid teal;
}
</style>
