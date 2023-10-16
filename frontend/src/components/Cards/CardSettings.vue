<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Edit Profile</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <div v-if="successAlert" class="bg-green-100 border-t border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md mt-4" role="alert">
      {{ successMessage }}
      </div>
      <form @submit.prevent="editDetails">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase ">
          User Information
        </h6>
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="username" 
              >
                Username
              </label>
              <input
                type="text" 
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="user.username"
                id="username" 
                :rules="[
                  v => !!v || 'Username is required',
                  v => (v && v.length <= 12) || 'Maximum 12 characters'
                ]"
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="email" 
              >
                Email address
              </label>
              <input
                type="email"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="user.email"
                id="email" 
                :rules="[
                  v => !!v || 'Email is required', 
                  v => /.+@.+\..+/.test(v) || 'Enter a valid email address'
                ]"
              />
            </div>
          </div>
        </div>
        <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 justify-center"
          type="submit" 
        >
          Update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      drawer: true,
      rail: true,
      selectedMenuItem: '', // Store the selected menu item value
      userCount: null, // Store the number of users
      roleCount: null, // Store the number of roles
    
  
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      emailPromos: false,
      dialogVisible: false, // Controls the visibility of the dialog
      logoutDialogVisible: false,
      user: {
        username: '',
        email: '',
      },
      successAlert: false,
      successMessage: '',
      errorAlert: false,
      errorMessage: '',
    };
  },
  created() {
    // Retrieve user details from local storage and set them to the component's data
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user.id = user.id || '';
      this.user.username = user.username || '';
      this.user.email = user.email || '';
      this.user.receivePromos = user.receivePromos || false;

      // Initialize originalReceivePromos
    this.originalReceivePromos = this.user.receivePromos;
    }
  },
  mounted() {
    
    this.fetchUserData();
    this.fetchRoleData();
    
  },
  computed: {
    username() {
      return `${this.user.username} `;
    },
    isChangePasswordDisabled() {
    return (
      !this.currentPassword ||
      !this.newPassword ||
      !this.confirmNewPassword ||
      !this.passwordRules.every(rule => rule(this.newPassword) === true)
    );
  },
  },
  methods: {
  // Handle menu item clicks by updating the selectedMenuItem
  handleMenuItemClick(itemValue) {
    this.selectedMenuItem = itemValue;
  },
  // Capitalize the first letter of the first name
  capitalizeUserName(username) {
    // Capitalize the first letter of the first name
    return username.charAt(0).toUpperCase() + username.slice(1);
  }, 

  async editDetails() {
      try {
        // Retrieve the existing user data from local storage
        const storedUserData = JSON.parse(localStorage.getItem('user'));

        // Create an object to store the updated properties
        const updatedData = {
          id: this.user.id, // Include the user's ID
        };

        // Check if firstName is different and update if necessary
        if (this.user.username!== storedUserData.username) {
          updatedData.username = this.user.username;
        }

        // Check if email is different and update if necessary
        if (this.user.email !== storedUserData.email) {
          updatedData.email = this.user.email;
        }
        // Send a PATCH request to your backend with only the updated properties
        const response = await axios.patch(
          `http://127.0.0.1:3303/api/v1/users/${this.user.id}`,
          updatedData
        );
         //if successful display
         this.successMessage = 'Your details have been updated successfully';
         this.successAlert = true;


        // Check the response status code
        if (response.status === 201) {
          // User details were successfully updated
          // Optionally, you can show a success message to the user
          console.log('User details updated successfully');

          // Merge the updated data with the existing user data
          const updatedUser = { ...storedUserData, ...updatedData };

          // Save the updated user object to localStorage
          localStorage.setItem('user', JSON.stringify(updatedUser));

          // Redirect the user to the account details page or any other page
          // this.$router.push('/account-details');
          // Set the success message and show the success alert
          this.successMessage = 'Your details have been updated successfully';
          this.successAlert = true;
        } else {
          // Handle other status codes (e.g., 400 for validation errors)
          console.error('Error updating user details:', response.data);
          this.errorMessage = 'An error occurred while updating your details. Please try again later.';
          this.errorAlert = true;
        }
      } catch (error) {
        // Handle network errors or other issues
        console.error('Error during user details update:', error);
        this.errorMessage = 'An error occurred while updating your details. Please try again later.';
        this.errorAlert = true;
      }
  },

  async changePassword() {
    if (this.newPassword !== this.confirmNewPassword) {
      // Passwords do not match
      this.errorAlert = true;
      this.errorMessage = 'Passwords do not match';
      return;
    }

    try {
      // Make a request to the backend to change the password
      const response = await axios.post('http://127.0.0.1:3303/api/v1/change-password', {
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
        user_id: this.user.id, // Include the user_id in the request data
      });

        // Password changed successfully
        this.successAlert = true;
        this.successMessage = response.data.message;

        // Clear the form fields
        this.currentPassword = '';
        this.newPassword = '';
        this.confirmNewPassword = '';
      
    } catch (error) {
      // Handle other types of errors
        console.error('Error during login:', error);
        this.errorAlert = true;
        this.errorMessage = error.response.data.message;
    }
  },

  async updateReceivePromos() {
    // Check if the receivePromos value has changed
    if (this.user.receivePromos !== this.originalReceivePromos) {
      try {
        const response = await axios.patch(`http://127.0.0.1:3003/api/v1/users-promo/${this.user.id}`, {
          receivePromos: this.user.receivePromos
        });

          // User updated successfully
          console.log('User updated', response.data.message);
          this.successAlert = true;
          this.successMessage = 'Your promotions preference has been updated successfully';
          
          // Update originalReceivePromos
          this.originalReceivePromos = this.user.receivePromos;

          // Save the updated user object to localStorage
          const storedUserData = JSON.parse(localStorage.getItem('user'));

          // Update only the 'receivePromos' property
          storedUserData.receivePromos = this.user.receivePromos;

          // Save the updated user object back to local storage
          localStorage.setItem('user', JSON.stringify(storedUserData));

      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error('Error updating user', error);
        this.errorAlert = true;
        this.errorMessage = 'An error occurred while updating your promo preference';
      }
    }
  },




  // Perform the logic for account deactivation
  async deactivateAccount() {
    try {
      // Make a request to the backend to deactivate the account
      const response = await axios.patch('http://127.0.0.1:3003/api/v1/deactivate-account', {
        user_id: this.user.id, // Include the user_id in the request data
      });

      // Close the dialog
      this.dialogVisible = false;

      // Account deactivated successfully
      console.log('Account deactivated', response.data.message);

      this.successAlert = true;
      this.successMessage = 'Your account has been deactivated. We are sorry to see you go. You will be logged out of your account in 10 seconds.';
      
      // Remove the user, token, and roleIds from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("roleIds");

      // Redirect the user to the login page and force a page reload
      setTimeout(() => {
        // Redirect the user to the login page and force a page reload
        window.location.href = '/login';
      }, 10000); // 10000 milliseconds (10 seconds)

    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error deactivating account', error);
      this.errorAlert = true;
      this.errorMessage = 'We could not deactivate your account at this time. Please try again later.';
    }

    this.dialogVisible = false;
  },

 
  logout() {
    // Remove the user, token, and roleIds from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("roleIds");

    // Close the logout dialog
    this.logoutDialogVisible = false;

    // Redirect the user to the login page
    //this.$router.push('/login');

    // Redirect the user to the login page and force a page reload
    window.location.href = '/auth/login';
  },
  cancelLogout() {
    // Close the dialog
    this.logoutDialogVisible = false;
  },
  async fetchUserData() {
    try {
      const response = await axios.get('http://127.0.0.1:3003/api/v1/users-count'); // Update the URL
      const count = response.data; // Assuming the response is directly the number

  
      this.userCount = count;
        // Handle the number as needed
        console.log(`User count: ${count}`);
        
    
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  },
  async fetchRoleData() {
    try {
      const response = await axios.get('http://127.0.0.1:3303/api/v1/roles-count'); // Update the URL
      const count = response.data; // Assuming the response is directly the number
  
      this.roleCount = count;      
    
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  },
  

},
};
</script>