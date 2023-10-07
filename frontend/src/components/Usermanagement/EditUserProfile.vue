<template>
  <main>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
    >
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="card shadow-lg mt-n6">
          <div class="card-body p-3">
            <div class="row gx-4">
              <div class="col-auto">
                <div class="avatar avatar-xl position-relative"></div>
              </div>
              <div class="col-auto my-auto">
                <div class="h-100">
                  <h5 class="mb-1">Name</h5>
                  <p class="mb-0 font-weight-bold text-sm">Public Relations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4 container-fluid">
        <div class="row">
          <div class="col-md-8 mb-3" @click="() => toggleForm()">
            <form @submit.prevent="(userId ==false) ? AddNewUser() : UpdateUser();">
              <div class="card mb-3">
                <h6
                  class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
                >   Basic Information
                </h6>
                <div class="card-body " v-if="userId == false">
                  <div class="col-md-12 d-flex flex-column">
                    <div class="col-md-12 mb-3">
                      <label for="example-text-input" class="form-control-label">Name</label>
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name"
                        v-model="user.name"
                      />
                    </div>
                    <div class="col-md-12">
                      <label for="example-text-input" class="form-control-label">Email address</label>
                      <input
                        type="email"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        v-model="user.email"
                      />
                    </div>
                    <div class="col-md-12" >
                      <label for="example-text-input" class="form-control-label">New password</label>
                      <input
                        type="password"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mt-2"
                        placeholder="New password"
                        v-model="user.password"
                      />
                    </div>
                  </div>
                  <button
                    class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mt-2 float-right"
                    type="submit" value="(userId != false) ? 'update':  'Add user'"
                  >Update Info</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
 
};
</script>

<style>
.form {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.card {
  margin-bottom: 1rem;
}

.card-header {
  border-bottom: 1px solid #dee2e6;
}

.card-body {
  padding: 1.5rem;
}

button:hover {
  background-color: #3b4249;
}
</style>