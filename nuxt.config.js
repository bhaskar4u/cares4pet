export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "cares4pet",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "css/bootstrap.min.css" },
      { rel: "stylesheet", href: "css/animate.css" },
      { rel: "stylesheet", href: "css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "css/themify-icons.css" },
      { rel: "stylesheet", href: "css/flaticon.css" },
      { rel: "stylesheet", href: "css/magnific-popup.css" },
      { rel: "stylesheet", href: "css/style.css" },
    ],
    script: [
      { rel: "text/javascipt", src: "js/jquery-1.12.1.min.js" },
      { rel: "text/javascipt", src: "js/popper.min.js" },
      { rel: "text/javascipt", src: "js/bootstrap.min.js" },
      { rel: "text/javascipt", src: "js/jquery.counterup.min.js" },
      { rel: "text/javascipt", src: "js/waypoints.min.js" },
      { rel: "text/javascipt", src: "js/jquery.magnific-popup.js" },
      { rel: "text/javascipt", src: "js/owl.carousel.min.js" },
      { rel: "text/javascipt", src: "js/custom.js" },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {
    // proxyHeaders: false
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "babel-eslint",
        options: {
          name: "[path][name].[vue]",
        },
      });
    },
  },
};
