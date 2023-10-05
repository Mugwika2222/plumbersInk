<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Users List</h6>
        <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button">
          <i class="fa fa-plus me-2"></i>Add User

        </button>
      </div>
    </div>

    <div class="flex-auto px-4 lg:px-10 py-10 pt-0" >
      <table class="w-full">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">Name.</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">Role</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100" >
          <tr class="bg-white">
            <td>
              <div class="d-flex px-2">

                <div class="my-auto">
                  <h6 class="p-3 text-sm text-gray-700 whitespace-nowrap">Admin</h6>
                </div>
              </div>
            </td>
            <td class="align-middle text-center text-sm">
              <span class="p-3 text-sm text-gray-700 whitespace-nowrap">admin@test.com</span>
            </td>
            <td class="align-middle text-center">
              <span class="p-3 text-sm text-gray-700 whitespace-nowrap">admin</span>
            </td>
            <td class="align-middle">
              <button class="text-secondary font-weight-bold text-xs me-3 cursor-pointer p-3" data-toggle="tooltip"
                data-original-title="Edit user" >
                <i class="fas fa-user-edit"></i>
              </button>
              <button class="text-secondary font-weight-bold text-xs cursor-pointer p-3" data-toggle="tooltip"
                data-original-title="Delete user" >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr style="height: 100px"></tr>
        </tbody>
      </table>
    </div>
  
  </div>
</template>
  
<script>

export default {

};
</script>
  