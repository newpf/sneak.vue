import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import About from './components/About.vue'
import Bar from './components/bar';
import A from './components/ab/a';
import B from './components/ab/b';
import C from './components/ab/c';



Vue.use(Router);

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About,
        children:[
            {
                path:'a',
                name:'A',
                component:A
            },
            {
                path:'b',
                name:'B',
                component:B
            },
            {
                path:'c',
                name:'C',
                component:C
            }
        ]
    },
    {
        path:'/Bar/:id',
        name:'Bar',
        component:Bar
    },
    
]

export default new Router({
    routes,
    mode:'history'
})