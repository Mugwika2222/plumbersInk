<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Users List</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0" >
      <ul>
          <li v-for="(user, index) in users" :key="index">
               <RouterLink :to="{
                name:'user-details',
                params: {user:user, id:user.id}
               }">
                    {{ user.name }}
               </RouterLink>
          </li>
      </ul>
    </div>
    <div  class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <RouterView @refreshData="refreshList"></RouterView>
    </div>
  </div>
</template>
  
<script>
import http from "@/controllers/api.js";


export default {
 name: "user-list",
 data(){
  return{
    users:[]
  };
 },
 methods:{
  retrieveUser(){
    http
    .get("/users")
    .then(response=>{
      this.users =response.data; //JSON are parsed automatically.
      console.log(response.data);
    })
    .catch(e=>{
      console.log(e);
    });
  },
  refreshList(){
    this.retrieveUser();
  }
 },
 mounted(){
  this.retrieveUser();
 }
};
</script>
  