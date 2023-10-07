<template>
 <div class="mt-5">
    <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-md-6">
            <div class="card bg-grey-darken-4">
                <div class="card-title"><strong>Email Verification</strong></div>
                <div class="card-text">
                    <div v-if="verificationStatus === 'loading'">
                        <p class="text-center">Verifying...</p>
                    </div>
                    <div v-else-if="verificationStatus === 'success'">
                        <p class="text-center">You have successfully verified your email address.</p>
                        <br><br>
                        <button @click="redirectToLogin" class="btn btn-primary btn-block">Go to Login</button>
                    </div>
                    <div v-else>
                        <p class="text-center">Verification failed. The token is invalid or has expired.</p>
                        <br><br>
                        <button @click="redirectToLogin" class="btn btn-error btn-block">Go to Login</button>
                    </div>
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
      verificationStatus: 'loading', // Initial status
    };
  },
  created() {
    // Extract the token from the route parameter
    const token = this.$route.params.token;

    // Send a request to your backend for token verification
    axios.get(`http://127.0.0.1:3003/api/v1/verify-email/${token}`)
      .then(response => {
        // Handle the response from the backend
        const { status, data } = response;
        if (status === 200 && data === 'Email verified successfully') {
          // Verification successful
          this.verificationStatus = 'success';
        } else if (status === 400 && data === 'Email already verified') {
          // Email already verified
          this.verificationStatus = 'already-verified';
        } else {
          // Verification failed
          this.verificationStatus = 'error';
        }
      })
      .catch(error => {
        // Handle any errors
        console.error('Verification error:', error);
        this.verificationStatus = 'error';
      });
  },
  methods: {
    redirectToLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.v-card {
  max-width: 400px;
  min-height: 250px;
  margin: 0 auto;
}

.v-card-text {
  padding: 0 50px;
  font: 1em sans-serif;
}
</style>
