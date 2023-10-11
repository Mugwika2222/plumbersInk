<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <ListUserPage />
    </div>
    <div class="w-full mb-12 px-4">
      <AddUserPage  />
    </div>
    <div class="w-full mb-12 px-4">
      <card-table color="dark" />
    </div>

  </div>
</template>
<script>
import ListUserPage from "@/components/Usermanagement/ListUserPage.vue";
import CardTable from "@/components/Cards/CardTable.vue";
import AddUserPage from "@/components/Usermanagement/AddUserPage.vue";


export default {
  components: {
    ListUserPage,
    CardTable,
    AddUserPage,
    
},
};
</script>
