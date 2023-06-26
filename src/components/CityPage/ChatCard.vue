<template>
  <div class="chat_card mx-auto d-md-flex my-8 justify-space-between">
    <div class="chat_card_admin mx-auto">
      <h2 class="mb-5">Чат с пользователем</h2>
      <ChatWindow
        class="chat_admin"
        :personAvatar="user.photo"
        :personName="user.name"
        :company="user.company"
        :rating="user.rating"
        :messages="messages"
        :authorAvatar="admin.photo"
        :writeMessage="adminMessage"
        @editWriteMessage="editAdminMessage"
        @sendMessage="sendAdminMessage"
      />
    </div>
    <v-divider vertical />
    <div class="chat_card_user mx-auto">
      <h2 class="mb-5">Чат с администратором</h2>
      <ChatWindow
        class="chat_user"
        :personAvatar="admin.photo"
        :personName="admin.name"
        :company="admin.company"
        :messages="messages"
        :authorAvatar="user.photo"
        :writeMessage="userMessage"
        @editWriteMessage="editUserMessage"
        @sendMessage="sendUserMessage"
      />
    </div>
  </div>
</template>
<script>
import ChatWindow from "./ChatWindow.vue";
import { chat } from "@/../__moks/chat.js";
import { messages } from "@/../__moks/messages.js";
import moment from "moment";
import "moment/locale/ru";
import userAvatar from "@/assets/images/commentAvatar1.png";
import adminAvatar from "@/assets/images/commentAvatar2.png";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ChatWindow,
  },
  data() {
    return {
      admin: {
        id: chat.admin.id,
        name: chat.admin.name,
        photo: adminAvatar,
        company: chat.admin.company,
      },
      user: {
        id: chat.user.id,
        name: chat.user.name,
        photo: userAvatar,
        company: chat.user.company,
        rating: chat.user.rating,
      },
      messages: messages,
      adminMessage: "",
      userMessage: "",
    };
  },
  computed: {
    ...mapGetters(["getChatMessages"]),
  },
  methods: {
    ...mapActions(["addMessage"]),
    editAdminMessage(value) {
      this.adminMessage = value;
    },
    editUserMessage(value) {
      this.userMessage = value;
    },
    filterMessage() {
      this.messages = this.messages.map((el) => {
        el.createdAt = el.createdAt = moment(el.createdAt).format(
          "DD.MM.YYYY, HH:mm:ss"
        );
        return el;
      });
    },
    sendAdminMessage() {
      const regex = /^\s*$/;
      if (this.adminMessage && !regex.test(this.adminMessage)) {
        const message = {
          id: this.messages.length + 1,
          text: this.adminMessage,
          photo: this.admin.photo,
          chatId: 1,
          userId: this.admin.id,
          createdAt: moment().format("DD.MM.YYYY, HH:mm:ss"),
        };
        this.addMessage(message);
        this.messages = this.getChatMessages;
        this.adminMessage = "";
      }
    },
    sendUserMessage() {
      const regex = /^\s*$/;
      if (this.userMessage && !regex.test(this.userMessage)) {
        const message = {
          id: this.messages.length + 1,
          text: this.userMessage,
          photo: this.user.photo,
          chatId: 1,
          userId: this.user.id,
          createdAt: moment().format("DD.MM.YYYY, HH:mm:ss"),
        };
        this.addMessage(message);
        this.messages = this.getChatMessages;
        this.userMessage = "";
      }
    },
  },
  beforeMount() {
    this.filterMessage();
    this.messages.forEach((el) => {
      this.addMessage(el);
    });
  },
};
</script>

<style lang="sass" scoped>
.chat_card
  max-width: 879px
@media (max-width: 900px)
  .chat_card
    width: auto
    &_admin, &_user
      max-width: 415px
</style>
