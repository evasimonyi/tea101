<template>
  <div>
    <p> 
    Delicious <br>
    Delights 
    </p>
    <router-link to="/teas">
      <button> Check 'em out </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "homepage"
};
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
  background-color: grey;
  text-align: center;
  justify-content: center;
  align-content: center;
}

div {
  align-content: center;
  text-align: center;
  justify-content: center;
}
p {
  text-align: center;
  justify-content: center;
  display: block;
  font-size: 60px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
}

button {
  background-color: #f4d942;
  font-size: 20px;
}
</style>

