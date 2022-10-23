import {defineStore} from "pinia";
import Config from "@/config";

export const useActorStore = defineStore({
    id: 'actor',
    state: () => ({
        actors: [],
        actor: null,
        loadingActor: false,
        errorActor: null
    }),
    getters: {

    },
    actions: {
        async fetchActorsByMovieId(movieId) {
            this.actors = [];
            this.loadingActor = true;
            try {
                this.actors = await fetch('https://imdb-api.com/en/API/FullCast/' + Config.apiKey + "/" + movieId, { mode: 'no-cors'})
                    .then((response) => response.json())
                this.loading = false;
            } catch (error) {
                this.errorActor = error;
            } finally {
                this.loadingActor = false
            }
        }
    }
});