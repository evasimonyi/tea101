<template>
  <div class="form-container">
    <h2>Leave your opinion</h2>
    <form>
      <label>NAME</label>
      <input type="text" v-model="form.name" required />
      <label>OPINION</label>
      <textarea v-model="form.opinion"></textarea>
      <input type="submit" value="SUBMIT"> 
    </form>
  </div>
</template>

<script>
export default {
  name: "leaveform",
  data() {
    return {
      form: {
        name: "",
        opinion: ""
      }
    };
  }
};
</script>

<style scoped>
.form-container * {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
.form-container {
  margin: 20px auto;
  max-width: 250px;
  text-align: left;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

h2 {
  font-size: 24px;
  font-stretch: ultra-condensed;
}

input[type="submit"] {
  border-radius: 22px;
  padding: 16px;
  margin-top: 14px;
  float: right;
  color: blue;
  font-weight: 800;
  font-size: 12px;
}
</style>