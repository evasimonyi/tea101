<template>

<div>
  <button v-bind:key="button.id" v-for="button in buttons">
    {{button.buttonText}}
  </button>
</div>

</template>

<script>
export default { name: "Buttons", props: ["buttons"] };
</script>

<style>
button {
  background-color: #f4d942;
  font-size: 20px;
  display: block;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
}
</style>

