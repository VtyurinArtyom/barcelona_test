<template>
  <v-card class="d-block pb-1 mx-2" width="415px" elevation="0">
    <div class="chat_header mb-5">
      <div class="d-flex align-center justify-space-between pl-4 pr-3 pt-5">
        <div class="chat_header_user d-flex align-center">
          <v-img width="44px" height="44px" v-bind:src="personAvatar" />
          <div class="chat_header_user_info">
            <v-card-text class="py-1">{{ personName }}</v-card-text>
            <span class="chat_header_user_company px-4 d-flex align-center">
              <v-img
                max-width="7px"
                max-height="10px"
                class="mr-1"
                src="@/assets/icons/flag.svg"
              />
              {{ company }}
            </span>
          </div>
        </div>
        <v-rating
          v-if="rating"
          :value="rating"
          size="16"
          background-color="#F1EBDB"
          readonly
          color="orange"
        />
      </div>
    </div>
    <v-divider />
    <div class="chat_window">
      <div class="chat_messages px-4">
        <div
          class="chat_message my-3 d-flex pa-4"
          :style="{ background: el.id % 2 ? '#F9F7F2' : '#fff' }"
          v-for="el in messages"
          :key="el.id"
        >
          <v-img
            class="mr-2"
            max-width="44px"
            max-height="44px"
            v-bind:src="el.photo"
          />
          <div class="chat_message_content">
            <p class="chat_message_text mb-0">
              {{ el.text }}
            </p>
            <span class="chat_message_time">{{ el.createdAt }}</span>
          </div>
        </div>
      </div>
    </div>
    <v-divider />
    <form @submit.prevent="sendMessage">
      <div class="chat_actions pl-4 pr-3 d-flex align-center my-6">
        <v-img
          class="mr-3"
          max-height="44px"
          max-width="44px"
          :src="authorAvatar"
        />
        <input
          class="chat_actions_input px-2 mr-3"
          type="text"
          @input="handleInput"
          :value="writeMessage"
          placeholder="Напишите сообщение..."
        />
        <button type="submit">
          <v-img
            class="mr-3"
            max-height="44px"
            max-width="44px"
            src="@/assets/icons/send.svg"
          />
        </button>
      </div>
    </form>
  </v-card>
</template>

<script>
export default {
  props: {
    personAvatar: String,
    personName: String,
    company: String,
    rating: Number,
    messages: Array,
    authorAvatar: String,
    writeMessage: String,
  },
  methods: {
    handleInput(event) {
      this.$emit("editWriteMessage", event.target.value);
    },
    sendMessage() {
      this.$emit("sendMessage");
    },
  },
};
</script>

<style scoped lang="sass">

@mixin scrollbar()
  &::-webkit-scrollbar
      width: 3px

  &::-webkit-scrollbar-thumb
      height: 6px
      background-color: #FF4641

  &::-webkit-scrollbar-button
      width: 0
      height: 0
      display: none
.chat
  &_header
    &_user
      &_company
        color: #FF4641
        font-size: 13px
  &_window
    height: 497px
    display: flex
    flex-direction: column
  &_messages
    @include scrollbar()
    flex: 1
    overflow-y: auto
  &_message
    &_text
      font-size: 15px
    &_time
      font-size: 11px
      color: #9D9D9D
  &_actions
    &_input
      border: 1px solid #ECECEC
      height: 50px
      width: -webkit-fill-available
</style>
