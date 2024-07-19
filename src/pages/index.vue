<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useVehicleStore } from "@/stores/vehicles";
import SlideHome from "@/components/home/SlideHome.vue";
import SlideItemsHome from "@/components/home/SlideItemsHome.vue";

const authStore = useAuthStore();
const vehicleStore = useVehicleStore();

onMounted(async () => {
  await authStore.getUserInfo();
  await vehicleStore.getVehicles();

  console.log(vehicleStore.vehicles)
});
</script>

<template>
  <v-main class="d-flex flex-column align-center py-10 px-16 ga-10">
    <!-- <slide-home /> -->

    <slide-items-home></slide-items-home>
  </v-main>
</template>
