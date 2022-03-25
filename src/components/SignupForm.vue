<template>
  <div class="container">
    <h2 class="py-2">Form Validation</h2>
    <div class="row">
      <form autocomplete="off"
        @submit.prevent="handleSubmit"
        class="col-lg-6 offset-lg-3 border p-4"
        id="signup-form" 
      >
        <div class="form-group">
          <label for="firstName" class="col-form-label col-form-label-lg">First Name</label>
          <input
            type="text"
            v-model="user.firstName"
            id="firstName"
            name="firstName"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
          />
          <div
            v-if="submitted && !$v.user.firstName.required"
            class="invalid-feedback"
          >
            First Name is required
          </div>
        </div>
        <div class="form-group py-2">
          <label for="lastName" class="col-form-label col-form-label-lg">Last Name</label>
          <input
            type="text"
            v-model="user.lastName"
            id="lastName"
            name="lastName"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
          />
          <div
            v-if="submitted && !$v.user.lastName.required"
            class="invalid-feedback"
          >
            Last Name is required
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="col-form-label col-form-label-lg">Email</label>
          <input
            type="email"
            v-model="user.email"
            id="email"
            name="email"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': submitted && $v.user.email.$error }"
          />
          <div
            v-if="submitted && $v.user.email.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.user.email.required">Email is required</span>
            <span v-if="!$v.user.email.email">Email is invalid</span>
          </div>
        </div>
        <div class="form-group py-2">
          <label for="password" class="col-form-label col-form-label-lg">Password</label>
          <input
            type="password"
            v-model="user.password"
            id="password"
            name="password"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': submitted && $v.user.password.$error }"
          />
          <div
            v-if="submitted && $v.user.password.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.user.password.required">Password is required</span>
            <span v-if="!$v.user.password.minLength"
              >Password must be at least 6 characters</span
            >
          </div>
        </div>
        <div class="form-group py-2">
          <label for="confirmPassword" class="col-form-label col-form-label-lg">Confirm Password</label>
          <input
            type="password"
            v-model="user.confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            class="form-control form-control-lg"
            :class="{
              'is-invalid': submitted && $v.user.confirmPassword.$error,
            }"
          />
          <div
            v-if="submitted && $v.user.confirmPassword.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.user.confirmPassword.required"
              >Confirm Password is required</span
            >
            <span v-else-if="!$v.user.confirmPassword.sameAsPassword"
              >Passwords must match</span
            >
          </div>
        </div>
         <div class="form-group">
            <div class="form-check" :class="{ 'hasError': $v.user.check.$error }">
              <input class="form-check-input" type="checkbox" id="check" v-model="user.check" true-value="1"
                false-value="0">
              <label class="form-check-label" for="check">
                Check me out
              </label>
            </div>
          </div>
        <div class="py-3 d-grid gap-2 col-3 mx-auto">
          <button class="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "app",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        check: '',
      },
      submitted: false,
    };
  },
  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
      check: { required },
    },
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      //console.log(this.$v)
      if (this.$v.$invalid) {
        return;
      }

      //alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
      alert("Form submitted successfully");
    },
  },
};
</script>