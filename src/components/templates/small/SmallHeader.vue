<script setup>
import { ref } from "vue";
import LoginButton from "@/components/global/login/LoginButton.vue";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();

const links = appStore.links;
const drawer = ref(false);
</script>

<template>
  <v-app-bar :elevation="2" class="d-flex align-center justify-center">
    <template v-slot:default>
      <v-btn @click="drawer = !drawer">
        <v-icon>
          mdi-menu
        </v-icon>
      </v-btn>
      <section
        class="position-relative px-2 d-flex align-center justify-space-between w-100"
      >
        <v-avatar class="mx-4">
          <v-img alt="Garagem" src="/logo.png"></v-img>
        </v-avatar>

        <LoginButton />
      </section>
    </template>

    <template v-slot:append> </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer">
    <v-list class="d-flex flex-column align-center">
      <v-list-item v-for="link in links">
        <v-btn :to="link.path">
          {{ link.name }}
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
