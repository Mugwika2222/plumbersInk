<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">Sign in with</h6>
            </div>
            <div class="btn-wrapper text-center">
              <div class="alert" v-if="showSuccessMessage" style="background-color: #4CAF50; color: white;">
              <span class="close" onclick="this.parentElement.style.display='none';">×</span>
              {{ successMessage }}
            </div>

            <div class="alert" v-if="showMessage" :class="messageType">
              <span class="close" onclick="this.parentElement.style.display='none';">Close Alert</span>
              {{ message }}
            </div>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form @submit.prevent="submitForm">
              <!-- Email Input -->
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Email
                </label>
                <input
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email" v-model="email" :rules="emailRules" type="email" label="email" />
              </div>

              <!-- Password Input -->
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Password
                </label>
                <input
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password" v-model="password" :rules="passwordRules"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                  label="Password" @click:append="showPassword = !showPassword" />
              </div>

              <!-- Remember Me Checkbox -->
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input id="customCheckLogin" type="checkbox" 
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">Remember me</span>
                </label>
              </div>

              <!-- Sign In Button -->
              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <a href="javascript:void(0)" class="text-blueGray-200">
              <small>Forgot password?</small>
            </a>
          </div>
          <div class="w-1/2 text-right" @click="redirectToRegister">
              <small>Create new account</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      emailRules: [
        value => !!value || 'Email is required.',
        value => /.+@.+\..+/.test(value) || 'Please enter a valid email.',
      ],
      passwordRules: [
        value => !!value || 'Password is required.',
        value => (value && value.length >= 8) || 'Password must be at least 8 characters.',
        value =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].+$/.test(value) ||
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@ $ ! % * ? &).',
      ],
      showPassword: false,
      forgotPasswordDialog: false,
      forgotPasswordEmail: '',
      showMessage: false, // Control whether the alert is visible
      messageType: '', // 'success' or 'error'
      message: '', // The message to display in the alert
    };
  },
  computed: {
    showSuccessMessage() {
      return this.$route.query.successMessage !== undefined;
    },
    successMessage() {
      return this.$route.query.successMessage || '';
    },
  },
  mounted() {
    // Automatically close the success message after 10 seconds
    if (this.showSuccessMessage) {
      setTimeout(() => {
        this.$router.push({ path: '/login' }); // Redirect to login page
      }, 10000); // 10 seconds
    }
  },
  methods: {
    async submitForm() {
  try {
    // Send a POST request to your backend for login
    const response = await axios.post('http://127.0.0.1:3003/api/v1/login', {
      email: this.email,
      password: this.password,
    });

    if (response && response.data) {
      // Login was successful
      const token = response.data.token;
      const user = response.data.user; // Fetch the user data from the response
      const roleIds = response.data.roleIds; // Fetch the roleIds from the response

      // Save the token, user data, and roleIds in local storage or Vuex store as needed
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user)); // Store user data as a string
      localStorage.setItem('roleIds', JSON.stringify(roleIds)); // Store roleIds as a string

      // Set the isLoggedIn state to true
      this.$store.commit('setIsLoggedIn', true);

      // Redirect the user to a protected route or dashboard
      this.$router.push('/home');
    } else {
      // Handle the case where response or response.data is undefined
      console.error('Error during login: Response or data is undefined.');
      this.showMessage = true;
      this.messageType = 'error';
      this.message = 'An error occurred during login.';
    }
  } catch (error) {
    // Handle network errors or other issues
    console.error('Error during login:', error);
    this.showMessage = true;
    this.messageType = 'error';
    this.message = error.response ? error.response.data.message : 'An error occurred during login.';
  }
},

    redirectToRegister() {
      // Navigate to the registration page
      this.$router.push('/auth/register');
    },
    openForgotPasswordDialog() {
      this.forgotPasswordDialog = true;
    },
    sendForgotPasswordEmail() {
      // Logic to send the reset password email
      // You can use this.forgotPasswordEmail to access the email entered in the dialog

      this.forgotPasswordDialog = false; // Close the dialog after sending the email
    },
  },
};
</script>
