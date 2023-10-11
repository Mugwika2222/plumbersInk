<template>
    <nav>
      <div
        v-if="drawer"
        class="bg-cyan-dark h-screen w-100 fixed flex flex-col text-white"
      >
        <div class="mb-12"></div>
        <router-link to="/" class="py-4 px-6 flex items-center space-x-2">
          <i class="mdi mdi-view-dashboard mb-2"></i>
          <span class="align-center">PlumbersInk <Input:checkbox></Input:checkbox></span>
        </router-link>
        <hr class="my-4 md:min-w-full" />
        <router-link to="/profile" class="py-4 px-6 flex items-center space-x-2">
          <i class="fa-solid fa-user"></i> 
          <span class="align-center">Profile</span>
        </router-link>
        <router-link to="/contact" class="py-4 px-6 flex items-center space-x-2">
          <i class="fa-solid fa-address-book"></i>
          <span class="align-center">Contact</span>
        </router-link>
        <div class="absolute bottom-0 ml-3">
          <router-link to="/login" class="py-4 px-6 flex items-center space-x-2">
            <i class="fas fa-sign-out-alt"></i>
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data: () => ({
      drawer: true,
    }),
  };
  </script>
  
  <style scoped>
  .bg-cyan-dark {
    background-color: hsl(155, 67%, 37%);
  }
  </style>
  