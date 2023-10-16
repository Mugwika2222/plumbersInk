<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify between">
        <h6 class="text-blueGray-700 text-xl font-bold">Users List</h6>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <div class="flex flex-wrap">
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]">
                Id
              </th>
              <th
                class=" text-centre px-6  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]">
                Name
              </th>
              <th
                class="px-6  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <th
                class="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <span class="ml-3 font-bold" :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]">
                
                </span>
              </th>
              <td class="border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {{ user.id }}
              </td>
              <td class="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                
              </td>
              <td class="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {{ user.username }}
              </td>
              <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {{ user.email }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [], // Store the fetched users
    };
  },
  mounted() {
    this.fetchAllUsers();
  },
  methods: {
    async fetchAllUsers() {
      try {
        const response = await axios.get('http://127.0.0.1:3303/api/v1/users'); // Adjust the URL to your endpoint
        this.users = response.data; // Assuming the response contains an array of users

        // Handle the data as needed
        console.log('Fetched users:', this.users);
      } catch (error) {
        // Handle any errors here
        console.error(error);
      }
    },
  },
};
</script>