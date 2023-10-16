<template>
    <div class="container mx-auto mt-5">
        <div class="flex justify-center">
            <div class="w-full sm:w-2/3 md:w-1/2 bg-gray-800 rounded-lg">
                <h2 class="text-2xl text-white text-center py-4">Reset Password</h2>
                <div v-if="resetStatus === 'loading'" class="text-center">
                    <p>Verifying...</p>
                </div>
                <div v-else-if="resetStatus === 'success'" class="text-center">
                    <p>Now that we know it's you <span class="text-4xl">🧐</span>,<br> please enter your new password.</p>
                    <form @submit.prevent="resetPassword">
                        <div class="mb-4">
                            <label for="newPassword" class="text-white">New Password</label>
                            <input type="password" id="newPassword"
                                class="block w-full bg-gray-700 text-white rounded-lg px-4 py-2" v-model="newPassword"
                                :class="{ 'border-red-500': $v.newPassword.$error }">
                        </div>
                        <div class="mb-4">
                            <label for="confirmPassword" class="text-white">Confirm Password</label>
                            <input type="password" id="confirmPassword"
                                class="block w-full bg-gray-700 text-white rounded-lg px-4 py-2" v-model="confirmPassword"
                                :class="{ 'border-red-500': $v.confirmPassword.$error }">
                        </div>
                        <small class="text-white">Make sure the passwords match</small>
                        <button type="submit" class="block w-full bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
                            :disabled="!validForm">
                            Reset Password
                        </button>
                    </form>
                </div>
                <div v-else class="text-center">
                    <p>Password reset failed.</p>
                </div>
            </div>
        </div>

        <!-- Success Snackbar -->
        <div class="fixed bottom-0 right-0 mb-4 mr-4" v-if="successAlert">
            <div class="bg-green-500 text-white p-2 rounded-lg">
                {{ successMessage }}
            </div>
        </div>

        <!-- Error Snackbar -->
        <div class="fixed bottom-0 right-0 mb-4 mr-4" v-if="errorAlert">
            <div class="bg-red-500 text-white p-2 rounded-lg">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            resetStatus: 'loading', // Initial status
            newPassword: '',
            confirmPassword: '',
            email: '', // Initialize email as an empty string
            passwordRules: [
                value => !!value || 'Password is required.',
                value =>
                    (value && value.length >= 8) || 'Password must be at least 8 characters.',
                value =>
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].+$/.test(value) ||
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@ $ ! % * ? &).',
            ],
            successAlert: false,
            successMessage: '',
            errorAlert: false,
            errorMessage: '',
            showPassword: false,
        };
    },
    created() {
        // Extract the token from the route parameter
        const token = this.$route.params.token;

        // Send a request to your backend for token verification
        axios.get(`http://127.0.0.1:3303/api/v1/verify-password-reset-token/${token}`)
            .then(response => {
                // Handle the response from the backend
                const { status, data } = response;
                if (status === 200 && data.message === 'Token verified successfully') {
                    // Token verification successful
                    this.resetStatus = 'success';

                    // Access the email from the response and store it in the data property
                    this.email = data.email;
                } else {
                    // Token verification failed
                    this.resetStatus = 'error';
                }
            })
            .catch(error => {
                // Handle any errors
                console.error('Token verification error:', error);
                this.resetStatus = 'error';
            });
    },
    computed: {
        validForm() {
            // Add your password validation logic here
            // For example, you can check if newPassword and confirmPassword match
            return this.newPassword === this.confirmPassword && this.newPassword.length >= 8;
        },
    },
    methods: {
        async resetPassword() {
            try {
                // Send a POST request to your backend to reset the password
                await axios.patch('http://127.0.0.1:3303/api/v1/reset-password', {
                    newPassword: this.newPassword,
                    email: this.email,
                });


                // Password reset successful

                // Redirect to the login page with a success message in the query parameters
                this.$router.push({ path: '/login', query: { successMessage: 'Password reset successful. Please login with your new password.' } });

            } catch (error) {
                // Handle network errors or other issues
                console.error('Password reset error:', error);
                this.resetStatus = 'error';
                this.errorAlert = true;
                this.errorMessage = 'Password reset failed.';
            }
        },

    },
};
</script>
  
<style scoped>
.v-card {
    max-width: 400px;
    min-height: 350px;
    margin: 0 auto;
}

.v-card-text {
    padding: 0 50px;
    font: 1em sans-serif;
}
</style>
  
