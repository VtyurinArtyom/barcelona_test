<template>
  <v-card class="mx-auto my-8" max-width="879px" elevation="0">
    <v-card-title class="px-6">Отзывы о Барселоне</v-card-title>
    <CommentsCarousel />
    <v-btn
      class="comment_btn ml-6 text--black"
      outlined
      color="#FF4641"
      elevation="0"
      >Все отзывы</v-btn
    >
  </v-card>
</template>

<script>
import CommentsCarousel from "./CommentsCarousel.vue";

export default {
  components: { CommentsCarousel },
};
</script>

<style lang="sass" scoped>
.comment_btn
  border-radius: 2px
  transform: translateY(-32px)
  text-transform: inherit
  z-index: 3
</style>
