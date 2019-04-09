<template>
  <div> 
    <nav> 
      <router-link to="/leave">Leave The Page</router-link>
    </nav> 
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style>
nav {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 14px;
  text-align: right;
  background: navy;
  padding: 10px;
}
a {
  color: white;
}
</style>