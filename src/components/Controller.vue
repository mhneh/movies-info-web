<script setup>
import Config from "@/config";
</script>

<template>
  <div class="row justify-content-between">
    <div class="col-2 d-flex align-items-center">20120075</div>
    <div class="col-6 text-center"><h1>Movies Info</h1></div>
    <div class="col-2">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-end">{{Config.apiKey}}</div>
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
</template>

<script>
export default {
  name: "Controller",
  props: ['theme']
}
</script>

<style scoped>

</style>