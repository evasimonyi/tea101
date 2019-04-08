<template>
  <div id="app">
    <!-- <homepage /> -->
    <Buttons v-bind:buttons="buttons"/>
  </div>
</template>

<script>
// import homepage from "./components/HomePage";
import Buttons from "./components/Buttons";

export default {
  name: "app",
  components: {
    // homepage,
    Buttons
  },
  data() {
    return {
      buttons: [
        {
          id: 1,
          buttonText: "What is Tea?"
        },
        {
          id: 2,
          buttonText: "What is White Tea?"
        },
        {
          id: 3,
          buttonText: "What is Green Tea?"
        },
        {
          id: 4,
          buttonText: "What is Pu-erh Tea?"
        },
        {
          id: 5,
          buttonText: "What is Oolong Tea?"
        },
        {
          id: 6,
          buttonText: "What is Black Tea?"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
