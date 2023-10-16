<template>
  <div class="flex flex-wrap">
    <div  class="w-full lg:w-4/12 ">
      <NavUi />
    </div>
    <div  class="w-full lg:w-4/12 px-4 mt-6">
      <CardSettings />
    </div>
    <div class="w-full lg:w-4/12 px-4 mt-8">
      <CardProfile />
    </div>
    
   
  </div>
</template>
<script>
import NavUi from "@/components/Navbars/NavUi.vue";
import CardSettings from "@/components/Cards/CardSettings.vue";
import CardProfile from "@/components/Cards/CardProfile.vue";


export default {
  components: {
    NavUi,
    CardSettings,
    CardProfile,
  
  
  },
};
</script>
