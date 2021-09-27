import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'
import ArtificialIntelligence from './../views/ArtificialIntelligence.vue'
import Backend from './../views/Backend.vue'
import CloudEngineering from './../views/CloudEngineering.vue'
import DatabaseAdministrator from './../views/DatabaseAdministrator.vue'
import DataScience from './../views/DataScience.vue'
import DevOps from './../views/DevOps.vue'
import Frontend from './../views/Frontend.vue'
import MachineLearning from './../views/MachineLearning.vue'
import Mobile from './../views/Mobile.vue'
import ProductManagement from './../views/ProductManagement.vue'
import SoftwareTesters from './../views/SoftwareTesters.vue'
import UIUX from './../views/UIUX.vue'
import OpenSource from './../views/OpenSource.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home,
        },

        {
            name: 'Artificial-Intelligence',
            path: '/artificial-intelligence',
            component: ArtificialIntelligence,
        },

         {
            name: 'Backend-development',
            path: '/backend-development',
            component: Backend,
        },

        {
            name: 'Cloud-engineering',
            path: '/cloud-engineering',
            component: CloudEngineering,
        },

        {
            name: 'Database-Administrator',
            path: '/database-administrator',
         component: DatabaseAdministrator,
      },

        {
            name: 'Data-Science',
            path: '/data-science',
            component: DataScience,
        },

        {
            name: 'Development-Operations',
            path: '/development-operations',
            component: DevOps,
        },

        {
            name: 'Frontend-development',
            path: '/frontend-development',
            component: Frontend,
        },
        
        {
            name: 'Machine-Learning',
            path: '/machine-Learning',
            component: MachineLearning,
        },

        {
            name: 'Mobile-development',
            path: '/mobile-development',
            component: Mobile,
        },

        {
            name: 'Product-management',
            path: '/product-management',
            component: ProductManagement,
        },
        
        {
            name: 'Software-Testers',
            path: '/software-testers',
            component: SoftwareTesters ,
        },

        {
            name: 'UI-UX',
            path: '/ui-ux-design',
            component: UIUX ,
        },

        {
            name: 'open-source',
            path: '/open-source',
            component: OpenSource ,
        },
        


     ] 
});
