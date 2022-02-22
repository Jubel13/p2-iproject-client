<template>
  <vueChat
    :title="'Diagnostool'"
    :initial-feed="feed"
    :new-message="message"
    @newOwnMessage="onNewOwnMessage"
  ></vueChat>
</template>

<script>
import vueChat from "basic-vue-chat";
export default {
  name: "DoctorChat",
  data: function () {
    return {
      message: { author: "Doctor", contents: "" },
      feed: [],
    };
  },
  computed: {
    chats() {
      return this.$store.state.chats;
    },
  },
  methods: {
    onNewOwnMessage() {
      console.log(this.chats);
      this.$socket.client.emit("sendMessageToServer", this.feed);
    },
  },
  components: {
    vueChat,
  },
};
</script>

<style>
</style>