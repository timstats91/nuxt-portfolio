<template>
  <div>
    <Navbar ref="navbar" />
    <FreelancreIntro />
    <img type="hidden" url="../static/img/Tim-Statler-Full-Stack-Developer.jpg" />
    <Experience1 />
    <Experience2 />
    <Works5 />
    <AboutUs5 />
    <Services5 />
    <SContactForm noLine />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: "dark",
  head() {
    return {
      //titleTemplate: '%s - Freelancer Dark'
    };
  },
  mounted() {
    var navbar = this.$refs.navbar.$el;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  },
};
</script>

<style scoped>
</style>