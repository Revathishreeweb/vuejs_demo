<template>
  <div class="text-center">
    <h2>Post Method</h2>
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">Post User Id</label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>
      <div>
        <label for="userId">Post Title</label>
        <input type="text" id="userId" v-model="formData.title" />
      </div>
      <div>
        <label for="userId">Post Body</label>
        <input type="text" id="userId" v-model="formData.body" />
      </div>
      <button>Create Post</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "postMethod",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>