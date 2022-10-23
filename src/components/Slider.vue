<script setup>
import Loader from "@/components/Loader.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

</script>

<template>
  <Loader v-if="loading"/>
  <ErrorMessage v-if="error" v-bind:error="error"/>
  <div v-if="movieChunks" class="container-fluid p-0">
    <div class="row mt-5 mb-5">
      <div class="col-sm-12">
        <div class="text-black"><h5>{{title}}</h5></div>

        <div v-bind:id="id" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators" v-if="hasPagination == 'true'">
            <button type="button"
                    :class="{active: i == 0}"
                    v-bind:data-bs-target="'#' + id"
                    v-bind:data-bs-slide-to="i"
                    v-for="i in pagination">
            </button>
          </div>

          <div class="carousel-inner px-5">
            <div class="carousel-item" :class="{ active: index == 0}" v-for="(chunk, index) in movieChunks" :key="index">
              <div class="row d-flex justify-content-center h-100">
                <div class="col-4 p-0 d-flex justify-content-center h-100" v-for="movie in chunk" :key="movie.id">
                  <a
                      class="img-default-size"
                      v-bind:href="'/movies/' + movie.id">
                    <img

                      v-bind:src="movie.image"
                      alt="...">
                    <div class="carousel-caption text-warning fw-bold">
                      <h5>Name: {{ movie.fullTitle }}</h5>
                      <p>Rated: {{movie.imDbRating}}</p>
                      <p>Length: {{movie.runtimeStr}}</p>
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" v-bind:data-bs-target="'#' + id" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" v-bind:data-bs-target="'#' + id" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Slider",
  props: [
    'totalPages', 'pageSize', 'hasPagination', 'title', 'loading', 'error',
    'movieChunks'
  ],
  data() {
    return {
      id: this.genSliderId(this.title),
      pagination: this.genPagination(this.totalPages),
      imageEnlarged: false,
    }
  },
  mounted() {

  },
  methods: {
    genSliderId: function(title) {
      if (!title) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let sliderId = '';
        for ( let i = 0; i < 6; i++ ) {
          sliderId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return sliderId;
      }
      return title.replace(/\s+/g, '');
    },
    genPagination: function(size) {
      let pagination = [];
      for (let i = 0; i < parseInt(this.totalPages); ++i) {
        pagination.push(i);
      }
      return pagination;
    },
    enlargeImage(event) {
      console.log("enlarged");
      this.imageEnlarged = true;
    },
    shrinkImage() {
      this.imageEnlarged = false;
    },
  }
}
</script>

<style scoped>
.cards-wrapper {
  display: flex;
  justify-content: center;
}
.card img {
  max-width: 100%;
  max-height: 100%;
}
.card {
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
  border-radius: 0;
}
.carousel-inner {
  padding: 1em;
}
.carousel-control-prev,
.carousel-control-next {
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-indicators {
  top: -5px;
  left: auto;
}

.img-default-size {
  width: fit-content;
  overflow: hidden;
}

.img-default-size img {
  height: 500px;
  transition: all 0.2s;
}

.img-default-size:hover {
  overflow: visible;
}

.img-default-size:hover img {
  height: 600px;
  transition: all 0.2s;
  z-index: 999;

}

@media (min-width: 768px) {
  .card img {
    height: 11em;
  }
}
</style>