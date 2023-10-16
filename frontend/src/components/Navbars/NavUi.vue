<template>
  <nav>
    <div v-if="drawer" class="bg-cyan-dark h-screen w-100 fixed flex flex-col text-white">
      <div class="mb-12"></div>
      <router-link to="user-dashboard" class="py-4 px-6 flex items-center space-x-2">
        <i class="mdi mdi-view-dashboard mb-2"></i>
        <span class="align-center">PlumbersInk <Input:checkbox></Input:checkbox></span>
      </router-link>
      <hr class="my-4 md:min-w-full" />
      <router-link to="/profile" class="py-4 px-6 flex items-center space-x-2">
        <i class="fa-solid fa-user"></i>
        <span class="align-center">Profile</span>
      </router-link>
      <button class="py-4 px-6 flex items-center space-x-2">
        <i class="fa-solid fa-calculator mr-2"></i>
        <span class="align-center"></span>
        <paystack 
           buttonClass="'button-class btn btn-primary'" 
           buttonText="Pay Online" 
           :publicKey="publicKey"
           :email="email"
           :amount="amount"
           :reference="reference" 
           :onSuccess="onSuccessfulPayment"
           :onCancel="onCancelledPayment" 
           :currency="'KES'">
        </paystack>
      </button>
      <div class="absolute bottom-0 ml-2">
        <li class="cursor-pointer flex items-center space-x-2" title="Logout" value="logout" @click="logout">
          <i class="fas fa-sign-out-alt"></i>
          <span class="">Logout</span>
        </li>
      </div>
    </div>
  </nav>
</template>
  
<script>
import paystack from "vue3-paystack";
import { nanoid } from "nanoid";

export default {
  components: {
    paystack,
  },
  data() {
    return {
      drawer: true,
      publicKey: 'pk_test_15a2b7dd42985faa9f7f391eed0f3bc6633d91e8',
      amount: 1000, // Expressed in the lowest denomination, so 1000 kobo is equivalent to 10 Naira
      email: 'somteacodes@gmail.com',
      firstname: 'Somtea', // Optional field, remember to pass it as a prop if needed
      lastname: 'Codes', // Optional field, remember to pass it as a prop if needed
    };
  },

  computed: {
    reference: function() {
      // if using nanoid to generate a randomRef
      // comment this out if not using nanoid
      return nanoid(15);

      // you can use plain JS to generate a random ref ID, just uncomment this section if you prefer
      /*
      let randomRef = "";
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 15; i++) {
        randomRef += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      return randomRef;
      */
    },
  },
  methods: {
    logout() {

      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("roleIds");



      window.location.replace('/auth/login');
    },

    onSuccessfulPayment: function(response) {
      console.log(response);
    },
    onCancelledPayment: function() {
      console.log("Payment canceled by the user");
    },

  },
};
</script>
  
<style scoped>
.bg-cyan-dark {
  background-color: hsl(155, 67%, 37%);
}
</style>


