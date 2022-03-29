<template>
  <div class="text-center mt-4">
    <button @click="getPosts">Click</button>
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.id }} {{ post.title }}</h3>
      <h3>{{ post.body }}</h3>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GetMethod",
  data() {
    return {
      posts: [],
      errorMsg: "",
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/kjj")
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errorMsg = "Error Retrieving Data";
        });
    },
  },
};
</script>