<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>
      Test technique WEB-ATRIO réalisé par AMBANG Christian<br />
      réalisé le 04/02/2024
    </h1>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  margin-top: 5em;
  h1 {
    color: #ffffff;
    text-align: center;
    font-size: 16px;
  }
}
</style>
