import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4912cf36 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _a22cb270 = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _cae2e5e2 = () => interopDefault(import('..\\pages\\blog\\blog.vue' /* webpackChunkName: "pages/blog/blog" */))
const _435bd162 = () => interopDefault(import('..\\pages\\blog\\blog-details-dark.vue' /* webpackChunkName: "pages/blog/blog-details-dark" */))
const _d6feb5aa = () => interopDefault(import('..\\pages\\blog\\portfolio.vue' /* webpackChunkName: "pages/blog/portfolio" */))
const _17b0b818 = () => interopDefault(import('..\\pages\\projects\\about.vue' /* webpackChunkName: "pages/projects/about" */))
const _f139ca6c = () => interopDefault(import('..\\pages\\projects\\project-details2-dark.vue' /* webpackChunkName: "pages/projects/project-details2-dark" */))
const _4dd1afed = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _12177b57 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _4912cf36,
    name: "contact"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _a22cb270,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog/blog",
    component: _cae2e5e2,
    name: "blog-blog"
  }, {
    path: "/blog/blog-details-dark",
    component: _435bd162,
    name: "blog-blog-details-dark"
  }, {
    path: "/blog/portfolio",
    component: _d6feb5aa,
    name: "blog-portfolio"
  }, {
    path: "/projects/about",
    component: _17b0b818,
    name: "projects-about"
  }, {
    path: "/projects/project-details2-dark",
    component: _f139ca6c,
    name: "projects-project-details2-dark"
  }, {
    path: "/blog/:slug?",
    component: _4dd1afed,
    name: "blog-slug"
  }, {
    path: "/",
    component: _12177b57,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
