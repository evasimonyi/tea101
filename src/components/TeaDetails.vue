<template>

<div>
  <button v-bind:key="teadetail.id" v-for="teadetail in teadetails" v-on:click="component=teadetail.buttonText">
    {{teadetail.buttonText}}
  </button>
  <component v-bind:is="component"> </component>

</div>

</template>

<script>
import whatistea from "./1";
import whitetea from "./2";
import greentea from "./3";
import puerhtea from "./4";
import oolongtea from "./5";
import blacktea from "./6";

export default {
  name: "teadetails",
  props: ["teadetails"],
  components: {
    whatistea,
    whitetea,
    greentea,
    puerhtea,
    oolongtea,
    blacktea
  },
  component: "whatistea"
};
</script>

<style>
button {
  background-color: #f4d942;
  font-size: 20px;
  display: block;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  display: block;
}
</style>

