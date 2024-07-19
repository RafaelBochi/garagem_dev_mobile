<script setup>
import { computed, onMounted, ref } from "vue";
import ItemCard from "../global/cards/ItemCard.vue";
const itemsPerPage = ref(6);
const items = ref([
  {
    name: "item 1",
    img: "https://www.opovo.com.br/_midias/jpg/2019/05/23/_mg_0850-2817412.jpg",
  },
  {
    name: "item 2",
    img: "https://www.opovo.com.br/_midias/jpg/2019/05/23/_mg_0850-2817412.jpg",
  },
  {
    name: "item 3",
    img: "https://www.opovo.com.br/_midias/jpg/2019/05/23/_mg_0850-2817412.jpg",
  },
  {
    name: "item 4",
    img: "https://www.opovo.com.br/_midias/jpg/2019/05/23/_mg_0850-2817412.jpg",
  },
  {
    name: "item 5",
    img: "https://www.opovo.com.br/_midias/jpg/2019/05/23/_mg_0850-2817412.jpg",
  },
  {
    name: "item 6",
    img: "https://www.opovo.com.br/_midias/jpg/2019/05/23/_mg_0850-2817412.jpg",
  },
]);

onMounted(() => {
  window.onresize = () => {
    itemsPerPage.value =
    Math.floor(window.innerWidth / 330) > 6
    ? 6
    : Math.floor(window.innerWidth / 330);
    console.log(itemsPerPage.value)
  };
});
</script>

<template>
  <v-card class="w-100" variant="text">
    <v-data-iterator
      :items="items"
      :items-per-page="itemsPerPage"
      item-title="name"
    >
      <template v-slot:default="{ items }">
        <v-container class="pa-2 d-flex align-center justify-center">
          <v-row class="d-flex flex-sm-nowrap align-center justify-center">
            <v-col
              v-for="(item, index) in items"
              :key="index"
              cols="auto"
              md="auto"
            >
            <item-card :item="item">
            </item-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4" v-if="pageCount > 1">
          <v-btn
            :disabled="page === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Pagina {{ page }} de {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>
