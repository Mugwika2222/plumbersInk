<template>
    <section class="pb-20 bg-blueGray-200">
        <div class="container mx-auto flex items-center justify-center h-screen">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div class="px-4 py-5 flex-auto">
                        <div>
                            <div>
                                <img alt="..." :src="team1" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                            </div>
                        </div>
                        <h6 class="text-xl font-semibold">Contact Me</h6>
                        <p class="mt-2 mb-4 text-blueGray-500">
                            <a href="tel:+254703106227">+254703106227</a>
                            <br/>
                            <a href="mailto:guantaicollins115@gmail.com">guantaicollins115@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import team1 from "@/assets/img/team-1-800x800.jpg";
export default {
    data() {
        return {
            team1,

        };
    },
};
</script>