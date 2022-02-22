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
      feed: [{ author: "Doctor", contents: "Hello" }],
    };
  },
  computed: {
    chats() {
      return this.$store.state.chats;
    },
  },
  methods: {
    onNewOwnMessage() {
      let msg = [];
      this.feed.forEach((el) => {
        msg.push({
          id: 1,
          ...el,
        });
      });
      console.log(this.chats);
      this.$socket.client.emit("sendMessageToServer", msg);
    },
  },
  components: {
    vueChat,
  },
};
</script>

<style>
</style>