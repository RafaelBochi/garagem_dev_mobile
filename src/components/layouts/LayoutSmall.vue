<script setup>
import { ref } from "vue";
import SmallHeader from "@/components/templates/small/SmallHeader.vue";

const drawer = ref(true);
</script>

<template>
  <SmallHeader />
  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
