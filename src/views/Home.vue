<template>
  <navbar />
  <div class="w-100 mx-auto p-4">
    <carousel :items-to-show="1.5">
      <slide v-for="slide in 10" :key="slide" >
        <div class="h-40 w-60 border mx-2">
          <span class="m-auto">
            {{ slide }}
          </span>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import Navbar from "../components/global/Navbar.vue";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
  components: {
    Navbar,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
