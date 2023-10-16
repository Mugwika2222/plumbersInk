<template>
  <div class="container mx-auto px-4 h-full mt-20">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">Sign in with</h6>
            </div>
            <div class="btn-wrapper text-center">
              <div class="alert" v-if="showSuccessMessage" style="background-color: #358a47; color: white;">
                <span class="close" onclick="this.parentElement.style.display='none';"></span>
                {{ successMessage }}
              </div>

              <div class="alert" v-if="showMessage" :class="messageType">
                <span class="close" onclick="this.parentElement.style.display='none';"></span>
                {{ message }}
              </div>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="btn-wrapper text-center">
            <button
              class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
              type="button">
              <img alt="Google" class="w-5 mr-1" :src="google" />
              Google
            </button>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form @submit.prevent="submitForm">
              <!-- Email Input -->
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="email">
                  Email
                </label>
                <input id="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email" v-model="email" :rules="emailRules" type="email" autocomplete="email" />
              </div>

              <!-- Password Input -->
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="Password">
                  Password
                </label>
                <input id="Password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password" v-model="password" :rules="passwordRules"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword" />
              </div>
              <!-- Sign In Button -->
              <div class="text-center mt-6">
                <button
                  class=" bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit">
                  Sign In
                </button>
              </div>
            </form>

          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2 text-right cursor-pointer" @click="redirectToRegister">
            <small>Don't have an account?</small>
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
        successAlert: false,
        successAlertMessage: '',
        errorAlert: false,
        errorMessage: '',
      };
  },
  computed: {
      showSuccessMessage() {
        return this.$route.query.successMessage !== undefined;
      },
      successMessage() {
        return this.$route.query.successMessage || '';
      },
      isFormValid() {
        return this.emailRules.every(rule => rule(this.email) === true) &&
          this.passwordRules.every(rule => rule(this.password) === true);
      },
    },
  mounted() {
    
    if (this.showSuccessMessage) {
      setTimeout(() => {
        this.$router.push({ path: '/auth/login' }); 
      }, 10000); // 10 seconds
    }
  },
  methods: {
    async submitForm() {
      try {
        // Send a POST request to your backend for login
        const response = await axios.post('http://localhost:3303/api/v1/login', {
          email: this.email,
          password: this.password,
        });

        if (response && response.data) {
          console.log(response);
          // Login was successful
          const token = response.data.token;
          const user = response.data.user; // Fetch the user data from the response
          const roleIds = response.data.userRoles.role_id; // Fetch the roleIds from the response

          // Save the token, user data, and roleIds in local storage or Vuex store as needed
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user)); 
          localStorage.setItem('roleIds', JSON.stringify(roleIds)); 

          // Set the isLoggedIn state to true
          this.$store.commit('setIsLoggedIn', true);

          // Redirect the user to a protected route or dashboard
          if (roleIds === 1) {
            this.$router.push('/admin/dashboard')
          } else if (roleIds === 2) {
            this.$router.push('/user-dashboard')
          } else if (roleIds === 3)
            this.$router.push('/plumber-dashboard')

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
      async sendForgotPasswordEmail() {
        try {
          // Create a request payload with the email
          const requestPayload = { email: this.forgotPasswordEmail };

          // Make a POST request to the API endpoint to send the email
          const response = await axios.patch('http://127.0.0.1:3003/api/v1/forgot-password', requestPayload);

          // Extract token, email, and firstName from the API response
          const { token, email, firstName } = response.data;

          // Create a user object with the extracted data
          const user = {
            firstName,
            email,
            token,
          };

          // Make a POST request to the /sendforgotPasswordEmail API endpoint
          await axios.post('http://127.0.0.1:3003/api/v1/sendforgotPasswordEmail', user);

          // Password reset email sent successfully
          this.forgotPasswordDialog = false; // Close the dialog after sending the email
          this.successAlert = true;
          this.successAlertMessage = 'Password reset email sent successfully. Please check your email for further instructions.';
        } catch (error) {
          // Handle network errors or other issues
          console.error('Error sending password reset email:', error);
          // Display an error message to the user if needed
          this.errorAlert = true;
          this.errorMessage = 'You have either entered an unregistered email or there was an error on our end sending the password reset email. Please try again later with a valid email.';
        }
      },


    },
  };
  </script>
