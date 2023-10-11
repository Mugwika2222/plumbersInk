<template>
    <div class="container mx-auto px-4 h-full ">
        <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
                <div
                    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div class="rounded-t mb-0 px-6 py-6">
                        <div class="text-center mb-3">
                            <h6 class="text-blueGray-500 text-sm font-bold">Add User</h6>
                        </div>
                        <div class="submitform">
                            <div v-if="!submitted">
                                <div class="form-group">
                                    <label for="name" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Name</label>
                                    <input type="text" class="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" id="name" required v-model="user.name">
                                </div>

                                <div class="form-group">
                                    <label for="email" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Email</label>
                                    <input type="text" class="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mb-5" id="email" required v-model="user.email">
                                </div>

                                <button v-on:click="saveUser" class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">Submit</button>
                            </div>
                            <div v-else>
                                <h5>You have submitted successfully!</h5>
                                <button v-on:click="newUser" class="bg-blueGray-800  text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" >Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import http from "@/controllers/api.js";

export default {
    name: "add-user",
    data() {
        return {
            user: {
                id: 0,
                name: "",
                email: "",
                active: false,
            },
            submitted: false,
        };
    },
    methods: {
        saveUser() {
            var data = {
                name: this.user.name,
                email: this.user.email,
            };

            http
                .post("/users", data)
                .then((response) => {
                    this.user.id = response.data.id; // Assign the ID to this.user.id
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });

            this.submitted = true;
        },
        newUser() {
            this.submitted = false;
            this.user = {
                id: 0,
                name: "",
                email: "",
                active: false,
            };
        },
    },
};
</script>
  
<style>
.submitform {
    max-width: 300px;
    margin: auto;
}

.form-group {
    margin-top: 20px;
    text-align: left;
}
</style>
  