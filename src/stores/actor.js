import {defineStore} from "pinia";
import Config from "@/config";

export const useActorStore = defineStore({
    id: 'actor',
    state: () => ({
        actors: [],
        actor: null,
        searchActors: [],
        loadingActor: false,
        errorActor: null
    }),
    getters: {

    },
    actions: {
        async fetchActorById(id) {
            this.actor = null;
            this.loadingActor = true;
            try {
                this.actor = await fetch('https://imdb-api.com/en/API/Name/' + Config.apiKey + "/" + id)
                    .then((response) => response.json())
                this.loadingActor = false;
                console.log("Single Actor: ", this.actor);
            } catch (error) {
                this.errorActor = error;
                this.loadingActor = true;
            } finally {
            }
        },
        async fetchActorsByMovieId(movieId) {
            this.actors = [];
            this.loadingActor = true;
            try {
                this.actors = await fetch('https://imdb-api.com/en/API/FullCast/' + Config.apiKey + "/" + movieId)
                    .then((response) => response.json())
                this.loadingActor = false;
                console.log("Actors: ", this.actors);
            } catch (error) {
                this.errorActor = error;
            } finally {
                this.loadingActor = false
            }
        },
        async fetchActorsByName(name) {
            this.searchActors = [];
            this.loadingActor = true;

            try {
                this.searchActors = await fetch('https://imdb-api.com/en/API/SearchName/' + Config.apiKey + "/" + name, { mode: 'no-cors'})
                    .then((response) => response.json())
                this.loadingActor = false;
                console.log("Actors: ", this.searchActors);
            } catch (error) {
                this.errorActor = error;
            } finally {
                this.loadingActor = false
            }
        }
    }
});