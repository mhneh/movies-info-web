<script setup>
import Slider from '../components/Slider.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <Slider title="" hasPagination="false" pageSize="1" totalPages="5"/>
      </div>

      <div class="row">
        <Slider title="Most Popular" hasPagination="true" pageSize="3" totalPages="5"/>
      </div>

      <div class="row">
        <Slider title="Top Rating" hasPagination="true" pageSize="3" totalPages="5"/>
      </div>
    </div>
  </main>
</template>
