<script setup>
import Todolist from './components/Todolist.vue';
</script>

<template>
  <header class="header">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Todolist/>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px; /* Adjust as needed */
}

.logo {
  display: block;
  margin-bottom: 20px; /* Adjust as needed */
  height: 75px;
}
</style>
