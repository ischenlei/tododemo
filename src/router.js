import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import A from "@/views/A";
import B from "@/views/B";

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/a',
        name: 'a',
        component: A
    },
    {
        path: '/b',
        name: 'b',
        component: B
    },
]

const routers = new VueRouter({
    routes
})

export default routers