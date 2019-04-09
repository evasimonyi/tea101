<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import teas from "./Teas";
import homepage from "./HomePage";

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
</style>