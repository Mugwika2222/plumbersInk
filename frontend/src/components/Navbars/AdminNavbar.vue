<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      <a
        class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
        href=""
      >
        Dashboard
      </a>
      <!-- Form -->
      <form class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div class="relative flex w-full flex-wrap items-stretch">
                <span
                    class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10 mb-2"
                id="name" required v-model="name" name="name">
            </div>

            <div class="btn-group">
                <button v-on:click="searchUsers" class="bg-blueGray-800  text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 mb-4">Search</button>
            </div>

            <ul class="search-result">
                <li v-for="(user, index) in users" :key="index">
                    <h6>{{ user.name }} ({{ user.email }})</h6>
                </li>
            </ul>
        </form>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import http from "@/controllers/api.js";

export default {
  name: "search-user",
  data() {
        return {
            name: "",
            users: []
        };
    },
    methods: {
        searchUsers() {
            http
                .get("/users/name/" + this.name)
                .then(response => {
                    this.users = response.data; //JSON are parsed automatically.
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
};
</script>
