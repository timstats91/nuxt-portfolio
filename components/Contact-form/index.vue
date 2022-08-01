<template>
  <section class="contact section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="form md-mb50">
            <h4 class="fw-700 color-font mb-50">Get In Touch.</h4>

            <form id="contact-form">
              <div class="messages"></div>

              <div class="controls">
                <div class="form-group">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    required="required"
                  ></textarea>
                </div>

                <button type="submit" :class="`butn ${theme === 'light' ? 'dark': 'bord'}`">
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="cont-info">
            <h4 class="fw-700 color-font mb-50">Contact Info.</h4>
            <h3 class="wow" data-splitting>{{ contentFormData.title }}</h3>
            <div class="item mb-40">
              <h5>{{ contentFormData.name }}</h5>
              <h5>{{ contentFormData.email }}</h5>
              <h5>{{ contentFormData.phone }}</h5>
            </div>
            <h3 class="wow" data-splitting>Location.</h3>
            <div class="item">
              <h6>
                {{ contentFormData.location.first }}
                <br />
                {{ contentFormData.location.second }}
              </h6>
            </div>
            <div class="social mt-50">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contentFormData from "../../data/contact-form.json";

export default {
  props: ["theme"],
  data() {
    return {
      contentFormData,
    };
  },
};
</script>

<style scoped>
</style>