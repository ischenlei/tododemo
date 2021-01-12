import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import A from "@/views/A";
import B from "@/views/B";
import A1 from "@/views/A1";
import A2 from "@/views/A2";

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
        component: A,
        children: [
            {
                path: 'a1',
                component: A1
            },
            {
                path: 'a2',
                component: A2
            }
        ]
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