<template>
  <div class="main">
    <CityCard></CityCard>
    <CommentsCard></CommentsCard>
    <ChatCard class=""></ChatCard>
  </div>
</template>

<script lang="ts">
import CityCard from "@/components/CityPage/CityCard.vue";
import CommentsCard from "@/components/CityPage/CommentsCard.vue";
import ChatCard from "@/components/CityPage/ChatCard.vue";

export default {
  components: {
    CityCard,
    CommentsCard,
    ChatCard,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
.owl
  &-nav
    display: none
  &-dots
    max-width: 100px
    margin-left: auto
    margin-top: 32px
    text-align: end !important
.owl-theme .owl-dots .owl-dot.active span
  background: #FF4641
  width: 5px
  height: 5px
.owl-theme .owl-dots .owl-dot span
  background: #000
  height: 3px
  width: 3px
.v-rating .v-icon
  padding: 0
.main
  background: #F9F7F2
</style>
