<script setup>
defineProps(["item"]);
</script>

<template>
  <v-card width="250px" class="pa-2 ma-0 d-flex flex-column align-center">
    <v-img :src="item.raw.img" width="230px" height="220px" cover> </v-img>

    <v-card-text class="d-flex flex-column align-center ga-0">
      <p class="text-h6">
        {{ item.raw.name }}
      </p>

      <p>Ferrari</p>

      <p class="text-h6">R$ 100.00</p>
    </v-card-text>

    <v-card-actions class="w-100">
      <v-row class="d-flex justify-space-between">
        <v-col md="6">
            <v-text-field density="compact" hide-details variant="text" class="border-sm rounded" type="number" placeholder="Quant."></v-text-field>
        </v-col>
        <v-col md="6">
          <v-btn class="w-100 px-4 border-sm" height="42px">
            <p class="pr-2">
                Add
            </p>

            <v-icon>
                mdi-cart-plus
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
