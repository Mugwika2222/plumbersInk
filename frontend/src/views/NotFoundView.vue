<template>
  <div class="container-fluid fill-height">
    <div class="row align-items-center justify-content-center">
      <div class="col-12 col-sm-8 col-md-6">
        <!-- Custom 404 content -->
        <div class="text-center">
          <h1 class="error-code">404</h1>
          <h2 class="error-message">Page Not Found🤔</h2>
          <p class="error-description">
            The page you are looking for might have been removed,<br> had its name changed,
            or just doesn't exist.
          </p><br>

          <p><a href="/" class="error-link">Go to the Homepage ?</a>
           
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'NotFoundView',
};
</script>
  
<style scoped>
/* Custom styles for 404 page */
.error-code {
  font-size: 6rem;
  color:  #14ce71e5;
}

.error-message {
  font-size: 2rem;
}

.error-description {
  margin-top: 20px;
}

.error-link {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  color: #14ce71e5;
  /* Blue color for the link */

}
</style>
  