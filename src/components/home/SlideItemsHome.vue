<script setup>
import { computed, onMounted, ref } from "vue";
import { useVehicleStore } from "@/stores/vehicles";
import ItemCard from "../global/cards/ItemCard.vue";

const vehicleStore = useVehicleStore();
</script>

<template>
  <v-container class="pa-2 d-flex align-center justify-center">
    <v-row class="d-flex flex-wrap align-center justify-center">
      <v-col v-for="vehicle in vehicleStore.vehicles" :key="vehicle.id" cols="auto" md="auto">
        <item-card :item="vehicle"> </item-card>
      </v-col>
    </v-row>
  </v-container>
</template>
