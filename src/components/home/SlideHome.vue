<script setup>
const slides = [
  {
    img: "/home/banners/banner1.jpg",
    alt: "Banner1",
  },
  {
    img: "/home/banners/banner2.jpg",
    alt: "Banner2",
  },
  {
    img: "/home/banners/banner3.jpg",
    alt: "Banner3",
  },
  {
    img: "/home/banners/banner4.jpg",
    alt: "Banner4",
  },
];
</script>

<template>
  <v-carousel
    height="auto"
    style="max-height: 600px;"
    cycle
    hide-delimiter-background
    :show-arrows="false"
    class="w-100 ma-0 pa-0"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-img :src="slide.img" :alt="slide.alt" width="100%" cover>
      </v-img>
      <!-- <v-sheet color="red" height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">{{ slide }} Slide</div>
        </div>
      </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
</template>
