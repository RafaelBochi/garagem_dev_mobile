<script setup>
defineProps(["item"]);
</script>

<template>
  <v-card width="250px" class="pa-2 ma-0 d-flex flex-column align-center">
    <v-img
      :src="
        item.imagem
          ? item.imagem.image
          : 'https://www.opovo.com.br/_midias/jpg/2019/05/23/_mg_0850-2817412.jpg'
      "
      width="230px"
      height="220px"
      cover
    >
    </v-img>

    <v-card-text class="d-flex flex-column align-center ga-0">
      <p class="text-h6">{{ item.modelo.nome }} - {{ item.ano }}</p>

      <p>{{ item.modelo.marca.nome }}</p>

      <p class="text-h6">R$ {{ item.preco }}</p>
    </v-card-text>

    <v-card-actions class="w-100">
      <v-row class="d-flex justify-space-between px-2">
          <v-btn class="w-100 px-4 border-sm" height="42px">
            <p class="pr-2">Edit</p>

            <v-icon> mdi-pencil</v-icon>
          </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
