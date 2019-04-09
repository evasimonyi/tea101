<template>
  <div id="app">
    <div class="buttoncontainer">
      <button v-bind:key="tea.id" v-for="tea in teadetails" v-on:click="component=tea.paragraph"> 
        {{tea.buttonText}}
      </button>
      <div class="imgcontainer"> 
        <img src="./assets/tea.jpg">
        <span class="imagetitle">This is a cup of tea</span>
      </div>
    </div>

    <component v-bind:is="component"> </component>

  </div>
</template>

<script>
import whatistea from "./components/1";
import whitetea from "./components/2";
import greentea from "./components/3";
import puerhtea from "./components/4";
import oolongtea from "./components/5";
import blacktea from "./components/6";

export default {
  name: "app",
  components: {
    whatistea,
    whitetea,
    greentea,
    puerhtea,
    oolongtea,
    blacktea
  },
  data() {
    return {
      teadetails: [
        {
          id: 1,
          paragraph: "whatistea",
          buttonText: "What is Tea?"
        },
        {
          id: 2,
          paragraph: "whitetea",
          buttonText: "What is White Tea?"
        },
        {
          id: 3,
          paragraph: "greentea",
          buttonText: "What is Green Tea?"
        },
        {
          id: 4,
          paragraph: "puerhtea",
          buttonText: "What is Pu-erh Tea?"
        },
        {
          id: 5,
          paragraph: "oolongtea",
          buttonText: "What is Oolong Tea?"
        },
        {
          id: 6,
          paragraph: "blacktea",
          buttonText: "What is Black Tea?"
        }
      ],
      component: "whatistea"
    };
  }
};
</script>

<style>
body {
  background-color: #e0e0e0;
  justify-content: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  display: flex;
  float: left;
}
.buttoncontainer {
  display: inline-block;
  width: 400px;
  margin: 10px;
  justify-content: center;
}
button {
  background-color: #f4d942;
  font-size: 20px;
  display: block;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  font-weight: 700;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  width: 250px;
}
button:focus {
  background-color: blue;
  color: white;
}
component {
  display: inline-block;
}
div p {
  text-align: justify;
  padding: 10px;
  margin: 10px 30px 10px 15px;
}
.imgcontainer {
  justify-content: center;
  padding: 15px;
}
img {
  margin: auto;
  width: 190px;
  height: 190px;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
  display: block;
}
span {
  margin: 10px;
  font-weight: lighter;
  justify-content: center;
  display: block;
}
</style>
