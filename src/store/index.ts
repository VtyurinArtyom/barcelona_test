import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

interface RootState {
  chatMessages: Array<Message>;
}

interface Message {
  id: number;
  text: string;
  photo: string;
  chatId: number;
  userId: number;
  createdAt: string;
}

const store: StoreOptions<RootState> = {
  state: {
    chatMessages: [],
  },
  mutations: {
    addMessage(state, message: Message) {
      state.chatMessages.push(message);
    },
  },
  actions: {
    addMessage(context, message: Message) {
      context.commit("addMessage", message);
    },
  },
  getters: {
    getChatMessages(state) {
      return state.chatMessages;
    },
  },
};

export default new Vuex.Store<RootState>(store);
