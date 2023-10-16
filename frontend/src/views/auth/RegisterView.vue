<template>
  <div class="container mx-auto px-4 h-full mt-20">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <div v-if="showMessage" class="alert" :class="messageType">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close Alert">
                  <span aria-hidden="true"></span>
                </button>
                {{ message }}
              </div>

              <h6 class="text-blueGray-500 text-sm font-bold">
                Sign up with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button">
                <img alt="Google" class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign up with credentials</small>
            </div>
            <form @submit.prevent="submitForm">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="username">
                  Name
                </label>
                <input id="username"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Name" v-model="username" :rules="nameRules" type="text" autocomplete="name" />
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="email">
                  Email
                </label>
                <input id="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email" v-model="email" :rules="emailRules" type="email" autocomplete="email" />
              </div>

              <div class="relative w-full mb-3">
                 <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="password">
                  Password
                 </label>
                 <input id="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password" v-model="password" :rules="passwordRules"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword" autocomplete="password" />
              </div>
              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class=" w-1/2 text-left cursor-pointer" @click="redirectToLogin">
            <small> Already have an account ? Login</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import google from "@/assets/img/google.svg";

export default {
  data() {
    return {
      google,
      username: '',
      email: '',
      password: '',
      nameRules: [
        value => !!value || 'Name is required.',
        value => value && value.length >= 3 || 'Name must be at least 3 characters.',
      ],
      emailRules: [
        value => !!value || 'Email is required.',
        value => /.+@.+\..+/.test(value) || 'Please enter a valid email.',
      ],
      passwordRules: [
        value => !!value || 'Password is required.',
        value =>
          (value && value.length >= 6) || 'Password must be at least 6 characters.',
        value =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].+$/.test(value) ||
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@ $ ! % * ? &).',
      ],
      showPassword: false,
      showMessage: true,
      messageType: '',
      message: '',

    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3303/api/v1/signup', {
          username: this.username,
          email: this.email,
          password: this.password,
        });

        // Handle the response from the backend
        const token = response.data.token;
        // Save the token in local storage
        localStorage.setItem('signup-token', token);

        // Redirect
        this.$router.push({ path: '/auth/login', query: { successMessage: 'Signup successful! Please check your email in order to verify it before logging in.' } });
      } catch (error) {
        // Handle errors if registration fails
        console.error('Error during registration:', error);

        // Show an error message
        this.showMessage = true;
        this.messageType = 'error';
        this.message = 'Error during signup. Please try again.';

        // Perform any other error handling if needed
      }
    },
    redirectToLogin() {
      this.$router.push('/auth/login');
    },
  },
};
</script>
