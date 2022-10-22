<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="container bg-light mt-1 p-2 rounded">
    <div class="row justify-content-between">
      <div class="col-2 d-flex align-items-center">20120075</div>
      <div class="col-6 text-center"><h1>Movies Info</h1></div>
      <div class="col-2">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex justify-content-end">Key API</div>
            <div class="col-12 d-flex justify-content-end">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Dark Theme</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <nav class="container bg-light mt-2 p-2 rounded">
    <div class="row justify-content-between">
      <div class="col-7 d-flex align-items-center">Home</div>
      <div class="col-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8">
              <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            </div>
            <div class="col-2">
              <button type="button" class="ml-1 btn btn-outline-success rounded">Search</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </nav>

  <RouterView />

  <footer class="container bg-light p-2 rounded">
    <div class="row justify-content-between">
      <div class="col-2 d-flex align-items-center">20120075</div>
      <div class="col-6 text-center"><h1>Movies Info</h1></div>
      <div class="col-2">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex justify-content-end">Key API</div>
            <div class="col-12 d-flex justify-content-end">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Dark Theme</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@media (min-width: 1024px) {

}
</style>
