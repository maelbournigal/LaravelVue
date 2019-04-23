
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './views/App';
import Welcome from './views/Welcome';
import Login from './views/Login';
import Register from './views/Register';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Welcome
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
                name: 'register',
            component: Register
        }
    ]
});

const app = new Vue({
    el: '#app',
    components: {App},
    router
})
