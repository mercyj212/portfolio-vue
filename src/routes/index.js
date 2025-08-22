import {createRouter, createWebHistory} from 'vue-router';
// import  pages 
import Home from '../views/Index.vue';
import About from '../views/About.vue'; 
import Contact from '../views/Contact.vue';
import Projects from '../views/Projects.vue';
import Products from '../views/Products.vue';
import Jobs from '../views/Jobs.vue';   

// define routes
const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
    {path: '/projects', component: Projects},
    {path: '/products', component: Products},
    {path: '/jobs', component: Jobs},
];

// create router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
