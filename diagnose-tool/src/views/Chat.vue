<template>
  <vueChat
    :title="'Diagnostool'"
    :initial-feed="chats"
    :new-message="message"
    :initialAuthorId="id"
    @newOwnMessage="onNewOwnMessage"
  ></vueChat>
</template>

<script>
import vueChat from "basic-vue-chat";
export default {
  name: "Chat",
  data: function () {
    return {
      id: 0,
      message: {},
    };
  },
  computed: {
    chats() {
      return this.$store.state.chats;
    },
  },
  methods: {
    onNewOwnMessage(message) {
      console.log(this.chats);
      console.log(message);
      this.$socket.client.emit("sendMessageToServer", {
        id: this.id,
        author: "Patient",
        contents: message,
      });
    },
  },
  components: {
    vueChat,
  },
};
</script>

<style>
</style>