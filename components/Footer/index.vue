<template>
  <footer :class="`${!hideBGCOLOR ? 'sub-bg' : ''}`">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="item md-mb50">
            <div class="title">
              <h5>Contact Me</h5>
            </div>
            <ul>
              <li>
                <span class="icon pe-7s-map-marker"></span>
                <div class="cont">
                  <h6>Approximate Address</h6>
                  <p>IL, USA</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-mail"></span>
                <div class="cont">
                  <h6>Email Me</h6>
                  <p>timstats91@gmail.com</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-call"></span>
                <div class="cont">
                  <h6>Call or Text</h6>
                  <p>+18478140711</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item md-mb50">
            <div class="title">
              <h5>Recent Projects</h5>
            </div>
            <ul>
              <li>
                <div class="img">
                  <a href="https://ev-chicago.herokuapp.com">
                    <img src="/img/portfolio/freelancer/Chicago-EV-Nuxt1.jpg" alt="Nuxt Electric Vehicle Charger application preview"
                  /></a>
                </div>
                <div class="sm-post">
                  <a href="https://ev-chicago.herokuapp.com">
                    <p>
                      Simple Vue/Nuxt web app for EV charger installation.
                    </p>
                    <span class="date">Nuxt</span>
                  </a>
                </div>
              </li>
              <li>
                <div class="img">
                  <a href="https://nuxt-imdb.herokuapp.com">
                    <img src="/img/portfolio/freelancer/Movie-app-nuxt1.jpg" alt="Nuxt IMDB movie application preview" />
                  </a>
                </div>
                <div class="sm-post">
                  <a href="https://nuxt-imdb.herokuapp.com">
                    <p>
                      Fetches movies with MovieDB API, built with Nuxt and Vue.
                    </p>
                    <span class="date">Nuxt / Fetch API</span>
                  </a>
                </div>
              </li>
              <!-- <li>
                <div class="subscribe">
                  <input type="text" placeholder="Type Your Email" />
                  <span class="subs pe-7s-paper-plane"></span>
                </div>
              </li> -->
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <div class="title">
              <h5>Social Media</h5>
            </div>
            <!-- <div class="logo">
              <img src="/img/Tim_Statler_Logo.png" alt="logo" /><span class="color-font">Tim Statler</span>
            </div> -->
            <div class="social">
              <a href="https://www.linkedin.com/in/tim-statler-a325b191/">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/c/CompSciCentral">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="https://www.compscicentral.com">
                <i class="fab fa-wordpress"></i>
              </a>
            </div>
            <div class="copy-right">
              <p>
                © 2022 timstatler.com, <br >Made with 
                <span class="icon">❤️</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    props: ['hideBGCOLOR']
};
</script>

<style scoped>
</style>