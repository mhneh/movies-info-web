import {defineStore} from "pinia";
import Config from "@/config";

export const useReviewStore = defineStore({
    id: 'review',
    state: () => ({
        reviews: [],
        review: null,
        loadingReview: false,
        errorReview: null
    }),
    getters: {

    },
    actions: {
        async fetchReviewsByMovieId(movieId) {
            this.reviews = [];
            this.loadingReview = false;

            try {
                this.reviews = await fetch("https://imdb-api.com/en/API/Reviews/" + Config.apiKey + "/" + movieId)
                    .then((response) => response.json())
                this.loadingReview = false;
                console.log("Reviews: ", this.reviews);
            } catch (error) {
                this.errorReview = error;
            } finally {
                this.loadingReview = false
            }
        }
    }
});