<template>
  <div class="leave">
    <div class="imagecontainer">
      <img src="../assets/teafields.jpg">
    </div>
    <div class="form-container">
      <leaveform ></leaveform>
    </div>

  </div>
</template>

<script>
import leaveform from "./Form";

export default {
  name: "leavepage",
  components: {
    leaveform
  }
};
</script>

<style>
.leave {
  display: flex;
  align-items: center;
}
.form-container {
  max-width: 50%;
  width: 400px;
  display: inline-block;
  text-align: center;
  max-height: 60vh;
  margin: auto;
}

.imagecontainer {
  display: flex;
  display: inline-block;
  width: 50%;
  max-height: 100vh;
  overflow: auto;
}
.imagecontainer img {
  height: 100%;
}
</style>