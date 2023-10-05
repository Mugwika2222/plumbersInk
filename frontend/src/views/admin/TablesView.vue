<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <ListUserPage :users="users" toggleForm="toggleForm" :fetchUsers="fetchUsers"/>
    </div>
    <div class="w-full mb-12 px-4">
      <card-table color="dark" />
    </div>
    <div class="w-full lg:w-8/12 px-4">
     <EditUserProfile v-if = "formActive" :toggleForm="toggleForm" :fetchUsers="fetchUsers" :userId="userId"/>
    </div>
  </div>
</template>
<script>
import ListUserPage from "@/components/Usermanagement/ListUserPage.vue";
import CardTable from "@/components/Cards/CardTable.vue";
import EditUserProfile from "@/components/Usermanagement/EditUserProfile.vue";

export default {
  components: {
    ListUserPage,
    CardTable, 
   EditUserProfile
    

  },
};
</script>
