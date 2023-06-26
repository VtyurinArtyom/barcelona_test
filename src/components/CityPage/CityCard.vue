<template>
  <v-card
    max-height="auto"
    max-width="879px"
    elevation="0"
    class="mx-auto my-8"
  >
    <v-container class="d-md-flex align-center flex-nowrap city_card_container">
      <v-img
        class="mx-auto"
        max-width="440px"
        width="auto"
        src="@/assets/images/barcelona.jpg"
      />
      <v-container>
        <v-card-title class="text-h5">Барселона — обзор города</v-card-title>
        <v-card-text>
          Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди,
          многочисленными фестивалями и гастрономическим разнообразием
          понравилась мне в первый же день пребывания и стала местом, в
          котором...
        </v-card-text>
        <v-card-text class="city_card_span">Читать дальше</v-card-text>
        <span class="red_line px-4"></span>
      </v-container>
    </v-container>
  </v-card>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="sass">

.red_line
  margin-top: 3px
  background: #FF4641
  display: block
  max-width: 92px
  border: 1px solid #FF4641
  transform: translate(15px, -19px)
</style>
