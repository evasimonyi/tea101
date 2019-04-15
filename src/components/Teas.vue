<template>
  <div>
    <navbar />
    <div id="teas">
      <div class="buttoncontainer">
        <button :name="tea.paragraph" v-bind:key="tea.id" v-for="tea in teadetails" v-on:click="onClick"> 
          {{tea.buttonText}}
        </button>
        <div class="imgcontainer"> 
          <img src="../assets/tea.jpg">
          <span class="imagetitle">This is a cup of tea</span>
        </div>
      </div>

      <div class="tea-info-container">
        <component v-bind:is="component"> </component>
      </div>

    </div>
  </div>
</template>

<script>
import whatistea from "./1";
import whitetea from "./2";
import greentea from "./3";
import puerhtea from "./4";
import oolongtea from "./5";
import blacktea from "./6";
import navbar from "./Navbar";

export default {
  name: "teas",
  components: {
    whatistea,
    whitetea,
    greentea,
    puerhtea,
    oolongtea,
    blacktea,
    navbar
  },
  mounted() {},
  methods: {
    onClick: function(event) {
      return fetch("http://localhost:3000/teas")
        .then(res => res.json())
        .then(data => {
          const clickedTea = data.find(
            oneTea => oneTea.name == event.target.name
          );
          clickedTea.description.forEach(desc => (this.component = desc));
        });
    }
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

<style scoped>
body {
  background-color: #e0e0e0;
  justify-content: center;
  display: flex;
}
#teas {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.buttoncontainer {
  display: inline-block;
  margin: 20px;
  justify-content: center;
  text-align: start;
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
  outline: none;
}
button:focus {
  background-color: blue;
  color: white;
}
.tea-info-container {
  display: inline-block;
  text-align: justify;
  padding: 10px;
  width: 58%;
}

.imgcontainer {
  justify-content: center;
  text-align: center;
  padding: 15px;
  margin: 10px;
}

img {
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

span {
  margin: 10px;
  font-weight: lighter;
  justify-content: center;
  display: block;
}
div p {
  text-align: justify;
  margin: 20px 30px 10px;
  display: inline-block;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

p {
  text-align: justify;
  padding: 6px;
  margin: 10px 10px 10px;
  display: inline-block;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
