<template>
  <section class="portfolio-frl section-padding pb-70">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
            <h3 class="wow color-font">
              My Recent Projects
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="filtering col-12">
          <div class="filter wow fadeIn" data-wow-delay=".5s">
            <span data-filter="*" class="active"> All </span>
            <span data-filter=".brand">Design</span>
            <span data-filter=".web">Development</span>
            <span data-filter=".graphic">SEO</span>
          </div>
        </div>

        <div class="gallery full-width">
          
          <div class="col-md-6 items web lg-mr wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <div class="cont">
                <h6><a href="https://chicagoev.com">ChicagoEV.com</a></h6>
                <p>Simple Vue/Nuxt web app for EV charger installation.</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/Chicago-EV-Nuxt1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="/portfolio">JavaScript</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">Vue</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">Nuxt</NuxtLink>
                </span>
              </div>
            </div>
          </div>

          <div class="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <div class="cont">
                <h6>IMDB Movie App</h6>
                <p>Fetches movies with MovieDB API, built with Nuxt and Vue.</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/Movie-app-nuxt1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="/portfolio">API</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">Vue</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">Nuxt</NuxtLink>
                </span>
              </div>
            </div>
          </div>

          <div class="col-md-6 items graphic wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <div class="cont">
                <h6>Hoists.com</h6>
                <p>eCommerce website for hoist sales using WordPress and WooCommerce. Positioned to reach $1M+ annual revenue.</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/hoists-seo.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="/portfolio">eCommerce</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">WordPress</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">SEO</NuxtLink>
                </span>
              </div>
            </div>
          </div>

          <div class="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <div class="cont">
                <h6>SievertCrane.com</h6>
                <p>UI / UX redesign and rebranding for existing company website using Adobe XD and developed with WordPress.</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/sievert-crane-xd-ux1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="/portfolio">UI / UX</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">Design</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">Adobe XD</NuxtLink>
                </span>
              </div>
            </div>
          </div>

          <div class="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <div class="cont">
                <h6>Web Coder</h6>
                <p>My senior project for my B.S. in Computer Science created with HTML, CSS, Java (JSP's & Servlets), and a MySQL database.</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/webcoder-java1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="/portfolio">HTML</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">CSS</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">Java</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">SQL</NuxtLink>
                </span>
              </div>
            </div>
          </div>

          <div class="col-md-6 items graphic wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <div class="cont">
                <h6>Comp Sci Central</h6>
                <p>Computer Science blog created with Wordpress. Each blog post generates 250-300 page views monthly.</p>
              </div>
              <NuxtLink
                class="rota"
                to="project-details2/project-details2-dark"
              >
                <img src="/img/portfolio/freelancer/CompSciCentral1.jpg" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
              <div class="tags">
                <span>
                  <NuxtLink to="/portfolio">WordPress</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">Blog</NuxtLink>
                </span>
                <span>
                  <NuxtLink to="/portfolio">SEO</NuxtLink>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import initIsotope from "../../common/initIsotope";
export default {
  mounted() {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  },
};
</script>

<style scoped>
</style>