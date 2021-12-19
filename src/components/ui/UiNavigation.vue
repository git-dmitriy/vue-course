<template>
  <nav class="navigation">
    <router-link class="navigation-link" to="/">Главная</router-link>
    <router-link class="navigation-link" to="/posts">Публикации</router-link>
    <router-link class="navigation-link" to="/about">О приложении</router-link>
  </nav>
</template>

<script>
export default {
  name: 'ui-navigation',
};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: flex-end;
  align-content: center;
}
.navigation-link {
  margin: 0 20px;
  text-decoration: none;
  font-size: 20px;
  color: #000;
  transition: opacity 0.3s;
}

.navigation-link:hover {
  opacity: 0.6;
}
</style>
