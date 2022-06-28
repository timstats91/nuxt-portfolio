import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d6c9070 = () => interopDefault(import('..\\pages\\about\\about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _0c5e7998 = () => interopDefault(import('..\\pages\\about\\about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _4e5df33a = () => interopDefault(import('..\\pages\\blog-details\\blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _1743f602 = () => interopDefault(import('..\\pages\\blog-details\\blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _a22cb270 = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _6fa29798 = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _fa5be470 = () => interopDefault(import('..\\pages\\blog-list\\blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _71532d34 = () => interopDefault(import('..\\pages\\blog-list\\blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _c9a4dbb8 = () => interopDefault(import('..\\pages\\blog\\blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _64683458 = () => interopDefault(import('..\\pages\\blog\\blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _41577eb0 = () => interopDefault(import('..\\pages\\contact\\contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _b5d15358 = () => interopDefault(import('..\\pages\\contact\\contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _591dfa2a = () => interopDefault(import('..\\pages\\homepage\\home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _6484cd12 = () => interopDefault(import('..\\pages\\homepage\\home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _4d676b49 = () => interopDefault(import('..\\pages\\homepage\\home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _0d2d005a = () => interopDefault(import('..\\pages\\homepage\\home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _41b0dc68 = () => interopDefault(import('..\\pages\\homepage\\home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _e3639ad8 = () => interopDefault(import('..\\pages\\homepage\\home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _35fa4d87 = () => interopDefault(import('..\\pages\\homepage\\home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _2332e555 = () => interopDefault(import('..\\pages\\homepage\\home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _2a43bea6 = () => interopDefault(import('..\\pages\\homepage\\home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _8fd0cfd4 = () => interopDefault(import('..\\pages\\homepage\\home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _1e8d2fc5 = () => interopDefault(import('..\\pages\\homepage\\home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _4cfc4ad7 = () => interopDefault(import('..\\pages\\homepage\\home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _12d6a0e4 = () => interopDefault(import('..\\pages\\homepage\\home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _3c3e04d0 = () => interopDefault(import('..\\pages\\homepage\\home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _07201203 = () => interopDefault(import('..\\pages\\homepage\\home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _76c5b059 = () => interopDefault(import('..\\pages\\homepage\\home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _c57f4cc0 = () => interopDefault(import('..\\pages\\project-details2\\project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _b6a34748 = () => interopDefault(import('..\\pages\\project-details2\\project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _2a672ee4 = () => interopDefault(import('..\\pages\\showcase\\showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _08a42b2e = () => interopDefault(import('..\\pages\\showcase\\showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _1fb24970 = () => interopDefault(import('..\\pages\\showcase2\\showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _a2cfe098 = () => interopDefault(import('..\\pages\\showcase2\\showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _1ded7c30 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _6bfb05d8 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _38475d30 = () => interopDefault(import('..\\pages\\works\\works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _31915d94 = () => interopDefault(import('..\\pages\\works\\works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _5b501708 = () => interopDefault(import('..\\pages\\works2\\works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _aed36818 = () => interopDefault(import('..\\pages\\works2\\works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _142b6a46 = () => interopDefault(import('..\\pages\\works3\\works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _0b256076 = () => interopDefault(import('..\\pages\\works3\\works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))
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
    path: "/about/about-dark",
    component: _6d6c9070,
    name: "about-about-dark"
  }, {
    path: "/about/about-light",
    component: _0c5e7998,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _4e5df33a,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _1743f602,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _a22cb270,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _6fa29798,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _fa5be470,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _71532d34,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _c9a4dbb8,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _64683458,
    name: "blog-blog-light"
  }, {
    path: "/contact/contact-dark",
    component: _41577eb0,
    name: "contact-contact-dark"
  }, {
    path: "/contact/contact-light",
    component: _b5d15358,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _591dfa2a,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _6484cd12,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _4d676b49,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _0d2d005a,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _41b0dc68,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _e3639ad8,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _35fa4d87,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _2332e555,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _2a43bea6,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _8fd0cfd4,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _1e8d2fc5,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _4cfc4ad7,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _12d6a0e4,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _3c3e04d0,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _07201203,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _76c5b059,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _c57f4cc0,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _b6a34748,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _2a672ee4,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _08a42b2e,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _1fb24970,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _a2cfe098,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _1ded7c30,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _6bfb05d8,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _38475d30,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _31915d94,
    name: "works-works-light"
  }, {
    path: "/works2/works2-dark",
    component: _5b501708,
    name: "works2-works2-dark"
  }, {
    path: "/works2/works2-light",
    component: _aed36818,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _142b6a46,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _0b256076,
    name: "works3-works3-light"
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
