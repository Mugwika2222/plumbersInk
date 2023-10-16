<template>
  <div>
    <navbar />
    <main>
      <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
            background-image: url('');
          ">
          <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Plumbing is what we do.
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  We provide a
                  wide range of services for both residential and commercial clients.

                  No job is too big or too small, we’ve got you covered. In addition to our services, you can check out
                  our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your one
                  stop shop.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <section>

      </section>
      <section class="flex flex-wrap">
        <div class="w-full xl:w-4/12 px-4 mb-4">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
            <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                    Search by Name
                  </h6>

                  <div class="item-centre lg:ml-auto mr-3">
                    <form class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                      <div class="relative flex w-full flex-wrap items-stretch">
                        <span
                          class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                          <i class="fas fa-search"></i>
                        </span>
                        <input type="text" placeholder="Search here..."
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10" />
                      </div>
                    </form>
                  </div>
                  <hr class="my-4 md:min-w-full" />
                   <h5>Search by Price Range</h5>
                  <div class="bg-white p-4 rounded shadow-md mt-10">
                    <h2 class="text-2xl font-semibold mb-4">Price Range Estimation</h2>
                    <div class="mb-4">
                      <label class="block text-gray-600 text-sm font-bold mb-2" for="minPrice">Minimum Price</label>
                      <input v-model="minPrice" type="number" id="minPrice" name="minPrice"
                        class="w-full py-2 px-3 border rounded" placeholder="Enter minimum price">
                    </div>
                    <div class="mb-4">
                      <label class="block text-gray-600 text-sm font-bold mb-2" for="maxPrice">Maximum Price</label>
                      <input v-model="maxPrice" type="number" id="maxPrice" name="maxPrice"
                        class="w-full py-2 px-3 border rounded" placeholder="Enter maximum price">
                    </div>
                    <button @click="estimatePrice"
                      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Estimate Price</button>
                    <div v-if="priceEstimated" class="mt-4">
                      <p class="text-lg font-semibold">Estimated Price Range:</p>
                      <p class="text-xl text-green-600">{{ minPrice }} KES - {{ maxPrice }} KES</p>
                    </div>
                    <div class="btn-group">
                      <button v-on:click="searchUsers"
                        class="bg-blueGray-800  text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 mb-4">Search</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <div class="container mx-auto px-4">
            <h5>Meanwhile here are some of our plumbers...</h5>
            <div class="flex flex-wrap">
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div>
                      <img alt="..." :src="team1" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                    </div>
                    <h6 class="text-xl font-semibold">james</h6>
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
      </section>


      <section class="pb-20 relative block bg-blueGray-800">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-blueGray-800 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">
                Build Your Career
              </h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Put the potentially record low maximum sea ice extent tihs year
                down to low ice. According to the National Oceanic and
                Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i class="fas fa-medal text-xl"></i>
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">
                Excelent Services
              </h6>
              <p class="mt-2 mb-4 text-blueGray-400">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i class="fas fa-poll text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Grow your market
              </h5>
              <p class="mt-2 mb-4 text-blueGray-400">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i class="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Work Any time
              </h5>
              <p class="mt-2 mb-4 text-blueGray-400">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/FooterStat.vue";

import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";
import team5 from "@/assets/img/team-5-vDQ-e3RtaoE-unsplash.jpg";
import team6 from "@/assets/img/team-6-histories.jpg.jpg";
import team7 from "@/assets/img/team7-photography-YpZ2cj4s0oo-unsplash.jpg";
export default {
  data() {
    return {
      team1,
      team2,
      team3,
      team4,
      team5,
      team6,
      team7,
      minPrice: null,
      maxPrice: null,
      priceEstimated: false,
    };
  },
  components: {
    Navbar,
    FooterComponent,
  },

  methods: {
    estimatePrice() {
      if (this.minPrice === null || this.maxPrice === null) {
        alert('Please enter both minimum and maximum prices.');
        return;
      }
      this.minPrice = 500;
      this.maxPrice = 1000;
      this.priceEstimated = true;
    },
  },
};
</script>
