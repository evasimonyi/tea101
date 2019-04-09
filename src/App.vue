<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import teas from "./components/Teas";
import homepage from "./components/HomePage";

export default {
  components: {
    teas,
    homepage
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  background-color: #e0e0e0;
}
</style>