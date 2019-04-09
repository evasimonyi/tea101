<template>
<div>
  <p> Delicious Delights </p>
  <button v-on:click="component='teadetails'"> Check 'em out </button>
</div>
</template>

<script>
export default {
  name: "homepage"
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-color: darkgrey;
}

div {
  display: inline-block;
}

p {
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
}

button {
  background-color: #f4d942;
  font-size: 20px;
}
</style>

