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
  name: "DoctorChat",
  data: function () {
    return {
      id: 1,
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
        author: "Doctor",
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