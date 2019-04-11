<template>
  <div class="form-container">
    <h2>Leave your opinion</h2>
    <form>
      <label>NAME</label>
      <input type="text" v-model="name" required />
      <label>OPINION</label>
      <textarea type="text" v-model="opinion" required></textarea>
      <router-link to="/opinions">
      <input type="submit" value="SUBMIT" v-on:click="onSubmit"> 
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "leaveform",
  data() {
    return {
      name: "",
      opinion: "",
      storedinfo:
        JSON.parse(localStorage.getItem("storedinfo")) == null
          ? []
          : JSON.parse(localStorage.getItem("storedinfo"))
    };
  },
  methods: {
    onSubmit: function() {
      let newOpinion = {
        name: this.name,
        opinion: this.opinion
      };
      this.storedinfo.push(newOpinion);
      let storedinfo = localStorage.setItem(
        "storedinfo",
        JSON.stringify(this.storedinfo)
      );
    }
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
  resize: none;
}

h2 {
  font-size: 24px;
  font-stretch: ultra-condensed;
}

input[type="submit"],
a {
  border-radius: 22px;
  padding: 16px;
  margin-top: 14px;
  float: right;
  color: blue;
  font-weight: 800;
  font-size: 12px;
  outline: none;
}
</style>