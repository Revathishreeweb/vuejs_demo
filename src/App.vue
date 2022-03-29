<template>
  <div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <SignupForm /> -->
  <!-- <MyTemplate /> -->
  <!-- <ConditionalRendering /> -->
  <!-- <FormValidation /> -->
  <!-- <PostMethod /> -->
  <!-- <GetMethod /> -->
  <LifecycleHooks />
  </div>
</template>

<script>
//import SignupForm from "./components/SignupForm.vue";
//import HelloWorld from './components/HelloWorld.vue';
//import MyTemplate from "./components/MyTemplate.vue";
//import ConditionalRendering from './components/ConditionalRendering.vue';
//import FormValidation from './components/FormValidation.vue';
//import PostMethod from './components/PostMethod.vue';
//import GetMethod from './components/GetMethod.vue';
import LifecycleHooks from './components/LifecycleHooks.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    // SignupForm
    // MyTemplate
    //ConditionalRendering
    // FormValidation
    //PostMethod
    //GetMethod
    LifecycleHooks
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
