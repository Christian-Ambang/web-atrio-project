<script setup>
import ProgressBar from "@/components/ProgressBar.vue";
import { useMoovStore } from "@/stores/moov";
const moov = useMoovStore();
</script>
<template>
  <main>
    <ProgressBar></ProgressBar>
    <div id="action">
      <button @click="moov.zero">Remettre à zéro les compteurs</button>
      <button @click="moov.add5">Ajouter 5%</button>
      <button>Ajouter 10%</button>
    </div>
  </main>
</template>
