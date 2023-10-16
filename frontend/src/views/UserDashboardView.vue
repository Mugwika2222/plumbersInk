<template>
  <div class="flex flex-wrap justify-center">
    <div class="w-full lg:w-4/12">
      <NavUi />
    </div>
    <div class="w-full lg:w-8/12">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div>
                      <img alt="..." :src="team1" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                    </div>
                    <h6 class="text-xl font-semibold">james kon</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into parts.
                      A paragraph describing a feature will be enough
                    </p>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs me-3 cursor-pointer p-3"
                        data-toggle="tooltip" data-original-title="Phone">
                        <i class="fa-solid fa-phone"></i>
                      </button>
                    </RouterLink>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs cursor-pointer p-3" data-toggle="tooltip"
                        data-original-title="Email">
                        <i class="fa-solid fa-envelope"></i>
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div>
                      <img alt="..." :src="team1" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                    </div>
                    <h6 class="text-xl font-semibold"> kon</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into parts.
                      A paragraph describing a feature will be enough
                    </p>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs me-3 cursor-pointer p-3"
                        data-toggle="tooltip" data-original-title="Phone">
                        <i class="fa-solid fa-phone"></i>
                      </button>
                    </RouterLink>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs cursor-pointer p-3" data-toggle="tooltip"
                        data-original-title="Email">
                         <i class="fa-solid fa-envelope"></i>
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>

              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div>
                      <img alt="..." :src="team1" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                    </div>
                    <h6 class="text-xl font-semibold">mike</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into parts.
                      A paragraph describing a feature will be enough
                    </p>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs me-3 cursor-pointer p-3"
                        data-toggle="tooltip" data-original-title="Phone">
                        <i class="fa-solid fa-phone"></i>
                      </button>
                    </RouterLink>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs cursor-pointer p-3" data-toggle="tooltip"
                        data-original-title="Email">
                         <i class="fa-solid fa-envelope"></i>
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div>
                      <img alt="..." :src="team3" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                    </div>
                    <h6 class="text-xl font-semibold">Ann</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into parts.
                      A paragraph describing a feature will be enough.
                    </p>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs me-3 cursor-pointer p-3"
                        data-toggle="tooltip" data-original-title="Phone">
                        <i class="fa-solid fa-phone"></i>
                      </button>
                    </RouterLink>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs cursor-pointer p-3" data-toggle="tooltip"
                        data-original-title="Email">
                         <i class="fa-solid fa-envelope"></i>
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>

              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div>
                      <img alt="..." :src="team4" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                    </div>
                    <h6 class="text-xl font-semibold">Jane</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs me-3 cursor-pointer p-3"
                        data-toggle="tooltip" data-original-title="Phone">
                        <i class="fa-solid fa-phone"></i>
                      </button>
                    </RouterLink>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs cursor-pointer p-3" data-toggle="tooltip"
                        data-original-title="Email">
                         <i class="fa-solid fa-envelope"></i>
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>

              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div>
                      <img alt="..." :src="team2" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                    </div>
                    <h6 class="text-xl font-semibold">Martine</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs me-3 cursor-pointer p-3"
                        data-toggle="tooltip" data-original-title="Phone">
                        <i class="fa-solid fa-phone"></i>
                      </button>
                    </RouterLink>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs cursor-pointer p-3" data-toggle="tooltip"
                        data-original-title="Email">
                         <i class="fa-solid fa-envelope"></i>
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div>
                      <img alt="..." :src="team1" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                    </div>
                    <h6 class="text-xl font-semibold">Paul</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into parts.
                      A paragraph describing a feature will be enough.
                    </p>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs me-3 cursor-pointer p-3"
                        data-toggle="tooltip" data-original-title="Phone">
                        <i class="fa-solid fa-phone"></i>
                      </button>
                    </RouterLink>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs cursor-pointer p-3" data-toggle="tooltip"
                        data-original-title="Email">
                         <i class="fa-solid fa-envelope"></i>
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>

              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div>
                      <img alt="..." :src="team1" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                    </div>
                    <h6 class="text-xl font-semibold">Tim</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs me-3 cursor-pointer p-3"
                        data-toggle="tooltip" data-original-title="Phone">
                        <i class="fa-solid fa-phone"></i>
                      </button>
                    </RouterLink>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs cursor-pointer p-3" data-toggle="tooltip"
                        data-original-title="Email">
                         <i class="fa-solid fa-envelope"></i>
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>

              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div>
                      <img alt="..." :src="team1" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                    </div>
                    <h6 class="text-xl font-semibold">Bintos</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs me-3 cursor-pointer p-3"
                        data-toggle="tooltip" data-original-title="Phone">
                        <i class="fa-solid fa-phone"></i>
                      </button>
                    </RouterLink>
                    <RouterLink to="/phone">
                      <button class="text-secondary font-weight-bold text-xs cursor-pointer p-3" data-toggle="tooltip"
                        data-original-title="Email">
                        <i class="fa-solid fa-envelope"></i>
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavUi from "@/components/Navbars/NavUi.vue";

import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";
import team5 from "@/assets/img/team-5-vDQ-e3RtaoE-unsplash.jpg";
import team6 from "@/assets/img/team-6-histories.jpg.jpg";
import team7 from "@/assets/img/team7-photography-YpZ2cj4s0oo-unsplash.jpg";

export default {
  components: {
    NavUi,
  },
  data() {
    return {
      team1,
      team2,
      team3,
      team4,
      team5,
      team6,
      team7,
    };
  },
};
</script>
