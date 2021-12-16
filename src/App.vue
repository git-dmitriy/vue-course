<template>
  <div>
    <span>{{ count }}</span>
  </div>
  <p>Hello world</p>

  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
  },
};
</script>

<style></style>
