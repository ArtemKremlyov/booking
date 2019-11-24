import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import favorites from "./modules/favorites";

export default new Vuex.Store({
    modules: {
        favorites
    },
})