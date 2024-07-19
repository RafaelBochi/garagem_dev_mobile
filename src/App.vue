<script setup>
import { useRouter } from "vue-router";
import { globalRouter } from "./plugins/globalRouter";

const router = useRouter();

globalRouter.router = router;
</script>
<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
