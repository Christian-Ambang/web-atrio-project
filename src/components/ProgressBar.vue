<script setup>
import { useMoovStore } from "@/stores/moov";
const moov = useMoovStore();
</script>

<template>
  <div class="progressBar-container">
    <div class="progressBar" :class="moov.progress"></div>
  </div>
</template>
<style scoped lang="scss">
.progressBar-container {
  background-color: #373737;
  width: 65%;
  height: 15px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
}

.progressBar25 {
  width: 25%;
  background-color: #7160e8;
  height: 15px;
}
.progressBar50 {
  width: 50%;
  background-color: #60ade8;
  height: 15px;
}
.progressBar75 {
  width: 75%;
  background-color: #60e8b6;
  height: 15px;
}
.progressBar100 {
  width: 100%;
  background-color: #30db63;
  height: 15px;
}
</style>
