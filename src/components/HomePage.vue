<template>
  <div class="home-container">
    <p> 
    Delicious <br>
    Delights <br>
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
.home-container {
  align-content: center;
  text-align: center;
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
  margin: 10px;
  padding: 10px;
  border-radius: 2px;
  border: black solid 1px;
}
</style>

