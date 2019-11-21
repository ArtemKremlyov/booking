import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import desc from "../components/full-desc.pug"
import main from "../components/main.pug"

const routes = [
    {
        path:"/",
        component:main
    }
]

export default  new VueRouter({ routes })