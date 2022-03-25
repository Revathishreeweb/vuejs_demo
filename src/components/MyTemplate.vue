<template>
  <div class="container text-center">
    <!-- <h1>Welcome to VueJS</h1> -->
    <p v-html="header"></p>
    <h3 v-once>{{name}}</h3>
    <h2>{{ name }}</h2>
    <button @click="greet">Click</button>
    <h3>{{ show ? 'Yes' : 'No' }}</h3>
  </div>
</template>

<script>
export default {
  name: "MyTemplate",
  data() {
    return {                       
      name: "aashiq",
      show: false,
      header: '<h1>Component</h1>'
    };
  },
  methods: {
    greet() {
      this.name = "siva";
    //this.show =!this.show
    },
  },
};
</script>