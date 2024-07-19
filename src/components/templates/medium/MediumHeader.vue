<script setup>
import LoginButton from '@/components/global/login/LoginButton.vue';
import { useAppStore } from '@/stores/app';
const appStore = useAppStore();

const links = appStore.links
</script>

<template>
  <v-app-bar :elevation="2" class="d-flex align-center justify-center">
    <template v-slot:default>
      <section
        class="position-relative px-2 d-flex align-center justify-space-between w-100"
      >
        <v-avatar class="mx-4">
          <v-img alt="Garagem" src="/logo.png"></v-img>
        </v-avatar>

        <v-list class="d-flex">
          <v-list-item v-for="link in links">
            <v-btn :to="link.path">
              {{ link.name }}
            </v-btn>
          </v-list-item>
        </v-list>

        <LoginButton/>
      </section>
    </template>

    <template v-slot:append> </template>
  </v-app-bar>
</template>

<style scoped></style>
