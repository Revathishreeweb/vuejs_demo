<template>
  <div class="text-center">
    <h3 v-if="num === 4">The number is valid.</h3>
    <h3 v-else-if="num < 0">The number is negative.</h3>
    <h3 v-else>The number is invalid.</h3>
    <h3 v-if="display">uy98ubhg</h3>
    <h3>mkjojop</h3>
    <h3>jhoihjh</h3>
  </div>
</template>

<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      num: 0,
      display: true
    };
  },
};
</script>