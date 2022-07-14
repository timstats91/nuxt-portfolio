export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Tim Statler - Web Developer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "keywords", name: "keywords", content: "Tim Statler, Web Developer, Fullstack Developer, JavaScript, Vue.js, Nuxt.js, Node.js, MongoDB" },
      { hid: "description", name: "description", content: "Tim Statler is a full-stack web developer specializing in Vue.js, Nuxt.js, Node.js, Express.js, and MongoDB. I love simple, sleek designs and intuitive user experiences." },
      { name: "format-detection", content: "telephone=no" },
      { hid: 'og:title', property: 'og:title', content: 'Tim Statler: Full-Stack Developer' },
      { hid: 'og:url', property: 'og:url', content: 'http://tim-statler.herokuapp.com' },
      { hid: 'og:description', property: 'og:description', content: "Tim Statler is a full-stack web developer specializing in Vue.js, Nuxt.js, Node.js, Express.js, and MongoDB. I love simple, sleek designs and intuitive user experiences." },
      { hid: 'og:image', property: 'og:image', content: 'http://tim-statler.herokuapp.com/img/Tim-Statler-Full-Stack-Developer.jpg'},
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
    ],

    script: [
      { src: "/js/wow.min.js" },
      { src: "/js/isotope.pkgd.min.js" },
      { src: "/js/pace.min.js" },
      { src: "/js/splitting.min.js" },
      { src: "/js/simpleParallax.min.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/particles.js",
    "~/plugins/vueAwesomeSwiper.js",
    "~/plugins/vueSlickCarousel.js",
    {
      src: "~/plugins/vueEllipseProgress.js",
      mode: "client",
    },
    {
      src: "~/plugins/vueTyper.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // target: "static",
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["vue-scrollto/nuxt", { duration: 1000 }]],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    splitChunks: {
      layouts: true,
    },
  },
  // buildDir: "dist",
};
