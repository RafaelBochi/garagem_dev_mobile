<script setup>
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <v-btn
    class="mx-4 px-6"
    variant="elevated"
    color="primary"
    to="/auth"
    v-if="!authStore.loggedIn"
  >
    Login
  </v-btn>

  <div v-else>
    {{ authStore.user.email }}
  </div>
</template>
