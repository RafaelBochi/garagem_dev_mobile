<script setup>
import { ref } from "vue";
import VehicleForm from "@/components/forms/VehicleForm.vue";

const tab = ref(null);
</script>

<template>
  <v-main>
    <v-tabs v-model="tab" align-tabs="center" color="blue">
      <v-tab :value="1">Veiculos</v-tab>
      <!-- <v-tab :value="2">Acessorios</v-tab>
      <v-tab :value="3">Categorias</v-tab>
      <v-tab :value="4">Cores</v-tab>
      <v-tab :value="5">Marcas</v-tab>
      <v-tab :value="6">Modelos</v-tab> -->
    </v-tabs>
  
    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="n in 6" :key="n" :value="n">
        <v-container fluid>
          <vehicle-form></vehicle-form>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-main>
</template>
