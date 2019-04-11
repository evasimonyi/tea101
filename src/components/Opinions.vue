<template>
  <div class="opinions">
    <ol>
      <li v-bind:key="index" v-for="(opinion, index) in opinions">
       Name: {{opinion.name}}, Opinion: {{opinion.opinion}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "opinions",
  data() {
    return {
      opinions: JSON.parse(localStorage.getItem("storedinfo"))
    };
  }
};
</script>

<style>
ol {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}
li {
  margin: 5px;
}
</style>