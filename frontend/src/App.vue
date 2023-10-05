<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { ref } from 'vue';
import APIController from "@/controllers/api";

export default {
  name: "App",


  setup() {
    const users = ref([]);
    const formActive =ref (true); 
    const userId =ref (false);

    const fetchUsers = async () => {
      users.value = await APIController.FetchUsers();
    }

    const toggleForm =(id =false) => {
      formActive.value = !formActive.value;
      userId.value = false;

      if (id) {
        userId.value =id;
      }
    }

    return {
      users,
      fetchUsers,
      formActive,
      toggleForm ,
      userId
    }
  },
  mounted(){
    this.fetchUsers();
  }

};



</script>