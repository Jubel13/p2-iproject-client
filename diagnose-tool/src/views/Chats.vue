<template>
  <!-- Home Page -->

  <!-- End of NavBar Section -->

  <!-- Content Section -->
  <div id="chats" class="card">
    <!-- Left Channel -->
    <div class="channel">
      <h1 class="">List of Channel</h1>
      <ul class="">
        <li class="">Channel 1</li>
        <li>Channel 2</li>
        <li>Channel 3</li>
      </ul>
    </div>

    <!-- Right Chat Log -->
    <div class="chat-log">
      <h1 class="">ChatBox - [Channel No]</h1>
      <div class="" style="height: 81vh">
        <div class="">
          <!-- Chat Content -->
          <div class="">
            <div class="">Name1</div>
            <div>Chat1</div>
          </div>
          <div class="">
            <div class="">Name2</div>
            <div>Chat2</div>
          </div>
          <div class="">
            <div class="">Name1</div>
            <div>Chat3</div>
          </div>
        </div>
        <div class="">
          <textarea
            class=""
            placeholder="Insert chat here and press enter"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
  <!-- End of Content Section -->
</template>

<script>
export default {
  name: "ChatPage",
};
</script>

<style>
#chats {
  display: flex;
  width: 90% !important;
}
</style>
