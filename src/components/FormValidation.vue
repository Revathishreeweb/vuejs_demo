<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form @submit.prevent="getFormDatas">
          <div class="form-row">
            <div
              class="form-group col-md-6"
              :class="{ hasError: $v.form.email.$error }"
            >
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                v-model="form.email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <!-- <div
              v-if="!submitted && $v.form.email.required"
              class="invalid-feedback"
            >
              Email Field is required
            </div> -->
            <div
              class="form-group col-md-6"
              :class="{ hasError: $v.form.password.$error }"
            >
              <label for="password">Password</label>
              <input
                type="password"
                name="email"
                class="form-control"
                v-model="form.password"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group" :class="{ hasError: $v.form.address.$error }">
            <label for="address">Address</label>
            <input
              type="text"
              class="form-control"
              v-model="form.address"
              id="address"
              placeholder="Door no."
            />
          </div>
          <div
            class="form-group"
            :class="{ hasError: $v.form.address2.$error }"
          >
            <label for="address2">Address 2</label>
            <input
              type="text"
              class="form-control"
              v-model="form.address2"
              id="address2"
              placeholder="area"
            />
          </div>
          <div class="form-row">
            <div
              class="form-group col-md-6"
              :class="{ hasError: $v.form.city.$error }"
            >
              <label for="city">City</label>
              <input
                type="text"
                class="form-control"
                v-model="form.city"
                id="city"
                placeholder="city"
              />
            </div>
            <div
              class="form-group col-md-4"
              :class="{ hasError: $v.form.states.$error }"
            >
              <label for="state">State</label>
              <select id="state" v-model="stateselected" class="form-control">
                <option
                  v-for="(st, ind) in form.states"
                  :key="ind"
                  v-bind:value="st.name"
                >
                  {{ st.value }}
                </option>
              </select>
              <p>{{ stateselected }}</p>
            </div>
            <div
              class="form-group col-md-2"
              :class="{ hasError: $v.form.zip.$error }"
            >
              <label for="zip">Zip</label>
              <input
                type="text"
                class="form-control"
                v-model="form.zip"
                id="zip"
                placeholder="zipcode"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check" :class="{ hasError: $v.form.check.$error }">
              <input
                class="form-check-input"
                type="checkbox"
                id="check"
                v-model="form.check"
                true-value="1"
                false-value="0"
              />
              <label class="form-check-label" for="check"> Check me out </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">User Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody v-if="posts.length">
            <tr v-for="(item, ind) in posts" :key="ind">
              <td>{{ item.id }}</td>
              <td>{{ item.userId }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.body }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            No record found
          </tbody>
        </table>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "MyComponent",
  props: {
    msg: String,
  },
  data: function () {
    return {
      form: {
        email: "",
        password: "",
        address: "",
        address2: "",
        city: "",
        zip: "",
        check: "",
        states: [
          { name: "tamilnadu", value: "Tamilnadu" },
          { name: "kerala", value: "Kerala" },
          { name: "karnataka", value: "Karnataka" },
          { name: "andra", value: "Andra" },
        ],
      },
      stateselected: "tamilnadu",
      posts: [],
      // submitted: false,
    };
  },
  validations: {
    form: {
      password: { required },
      email: { required, email },
      address: { required },
      address2: { required },
      zip: { required },
      check: { required },
      states: { required },
      city: { required },
    },
  },
  methods: {
    async getFormDatas(SubmitEvent) {
      // this.submitted = true;
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        console.log(this.$v.form.$error, "this.$v.form.$error");
        return;
      }
      console.log(SubmitEvent, "submitevent");
      console.log(SubmitEvent.target[1].value, "submitevent1");
      console.log(SubmitEvent.target[2].value, "submitevent2");
      console.log(SubmitEvent.target[3].value, "submitevent3");
      console.log(SubmitEvent.target[4].value, "submitevent4");
      console.log(SubmitEvent.target[5].value, "submitevent5");
      console.log(SubmitEvent.target[6].value, "submitevent6");
      console.log(SubmitEvent.target[7].value, "submitevent7");

      await this.$http
        .post("https://reqres.in/api/users", {
          name: this.form.address,
          job: this.form.address2,
        })
        .then((response) => {
          console.log(response.data, "response data");
        })
        .catch((error) => {
          console.log(error, "error");
        });
    },
  },
  AsyncComputed: {
    async getData() {
      console.log("get Data called");
      try {
        const response = await this.$http.get(
          "http://jsonplaceholder.typicode.com/posts"
        );
        // JSON responses are automatically parsed.
        if (response.status == "200") {
          this.posts = response.data;
          console.log(this.posts, "posts");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {},
};
</script>