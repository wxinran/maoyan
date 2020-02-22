import Vue from 'vue'
import Router from 'vue-router'
import Movie from './Movie'
import Mine from './Mine'
import Cinema from './Cinema'

Vue.use(Router)

export default new Router({
    routes: [
        Movie,
        Mine,
        Cinema,
        {
            path: '/detail/:id',
            component: () => import('@/views/Detail')
        },

        { 
            path: '/',
            redirect: '/movie'
        }
    ]
})
