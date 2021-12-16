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

<style>
.app {
  padding: 20px;
}
form {
  margin-bottom: 20px;
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid teal;
  margin-bottom: 10px;
}

.btn-container {
  display: flex;
}

.btn {
  border: 1px solid teal;
  padding: 10px 20px;
  margin-left: auto;
}

.post {
  padding: 15px;
  border: 1px solid teal;
}
</style>
