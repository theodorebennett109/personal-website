import Vue from 'vue';
import Router from 'vue-router';

// tslint:disable-next-line
const { default: generatedRoutes } = require('../../.rdvue/routes.js');
const HomePage = () => import(/* webpackChunkName: "home" */ '@/pages/home')
const AboutPage = () => import(/* webpackChunkName: "about" */ '@/pages/about')
const PortfolioPage = () => import(/* webpackChunkName: "portfolio" */ '@/pages/portfolio')
const ContactPage = () => import(/* webpackChunkName: "contact" */ '@/pages/contact')
const NotFoundPage = () => import(/* webpackChunkName: "not-found" */ '@/pages/not-found')

Vue.use(Router);

export enum Page {
  Hello = 'hello-world',
  Home = 'home',
  About = 'about',
  Portfolio = 'portfolio',
  Contact = 'contact',
  NotFound = 'not-found',
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/buefy-sample',
      name: 'buefy-sample',
      component: require('@/pages/buefy-sample/buefy-sample.vue').default
    },
    ...generatedRoutes,
    {
      path: '/',
      name: Page.Home,
      meta: {
        layout: 'default',
      },
      component: HomePage
    },
    {
      path: '/about',
      name: Page.About,
      meta: {
        layout: 'default',
      },
      component: AboutPage
    },
    {
      path: '/portfolio',
      name: Page.Home,
      meta: {
        layout: 'default',
      },
      component: PortfolioPage
    },
    {
      path: '/contact',
      name: Page.Contact,
      meta: {
        layout: 'default',
      },
      component: ContactPage
    },
    {
      path: '*',
      name: Page.NotFound,
      meta: {
        layout: 'default',
      },
      component: NotFoundPage
    },
  ],
});
