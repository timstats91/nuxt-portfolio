export { default as AboutIntro } from '../..\\components\\About-intro\\index.vue'
export { default as AboutUs1 } from '../..\\components\\About-us1\\index.vue'
export { default as AboutUs2 } from '../..\\components\\About-us2\\index.vue'
export { default as AboutUs3 } from '../..\\components\\About-us3\\index.vue'
export { default as AboutUs4 } from '../..\\components\\About-us4\\index.vue'
export { default as AboutUs5 } from '../..\\components\\About-us5\\index.vue'
export { default as AboutUs6 } from '../..\\components\\About-us6\\index.vue'
export { default as BlogGrid } from '../..\\components\\Blog-grid\\index.vue'
export { default as BlogDetails } from '../..\\components\\Blog-details\\index.vue'
export { default as BlogListed } from '../..\\components\\Blog-listed\\index.vue'
export { default as BlogStanderd } from '../..\\components\\Blog-standerd\\index.vue'
export { default as Blogs2 } from '../..\\components\\Blogs2\\index.vue'
export { default as Blogs1 } from '../..\\components\\Blogs1\\index.vue'
export { default as Blogs3 } from '../..\\components\\Blogs3\\index.vue'
export { default as Blogs4 } from '../..\\components\\Blogs4\\index.vue'
export { default as CaseStudy } from '../..\\components\\Case-study\\index.vue'
export { default as CallToAction } from '../..\\components\\Call-to-action\\index.vue'
export { default as Clients1 } from '../..\\components\\Clients1\\index.vue'
export { default as Clients2 } from '../..\\components\\Clients2\\index.vue'
export { default as ContactArcho } from '../..\\components\\Contact-archo\\index.vue'
export { default as ContactForm } from '../..\\components\\Contact-form\\index.vue'
export { default as ContactHeader } from '../..\\components\\Contact-header\\index.vue'
export { default as Experience1 } from '../..\\components\\Experience1\\index.vue'
export { default as Footer } from '../..\\components\\Footer\\index.vue'
export { default as Experience2 } from '../..\\components\\Experience2\\index.vue'
export { default as FreelancreIntro } from '../..\\components\\Freelancre-intro\\index.vue'
export { default as FullScreenCircleSlide } from '../..\\components\\FullScreen-circle-slide\\index.vue'
export { default as FooterArch } from '../..\\components\\Footer-arch\\index.vue'
export { default as FunFacts1 } from '../..\\components\\Fun-facts1\\index.vue'
export { default as FullTestimonials } from '../..\\components\\Full-testimonials\\index.vue'
export { default as FunFacts2 } from '../..\\components\\Fun-facts2\\index.vue'
export { default as IntroWithSlider } from '../..\\components\\Intro-with-slider\\index.vue'
export { default as Intro2 } from '../..\\components\\Intro2\\index.vue'
export { default as Intro3 } from '../..\\components\\Intro3\\index.vue'
export { default as Intro4 } from '../..\\components\\Intro4\\index.vue'
export { default as Intro5 } from '../..\\components\\Intro5\\index.vue'
export { default as LatestNews } from '../..\\components\\Latest-news\\index.vue'
export { default as Loading } from '../..\\components\\Loading\\index.vue'
export { default as MinimalArea1 } from '../..\\components\\Minimal-area1\\index.vue'
export { default as MinimalArea2 } from '../..\\components\\Minimal-area2\\index.vue'
export { default as ModalVideo } from '../..\\components\\Modal-video\\index.vue'
export { default as MouseCursor } from '../..\\components\\Mouse-cursor\\index.vue'
export { default as Navbar } from '../..\\components\\Navbar\\index.vue'
export { default as NavbarArch } from '../..\\components\\navbar-arch\\index.vue'
export { default as NavbarFullMenu } from '../..\\components\\Navbar-full-menu\\index.vue'
export { default as PageHeader } from '../..\\components\\Page-header\\index.vue'
export { default as NextProject } from '../..\\components\\Next-project\\index.vue'
export { default as PagesHeader } from '../..\\components\\Pages-header\\index.vue'
export { default as Portfolio } from '../..\\components\\Portfolio\\index.vue'
export { default as ProjectDescription } from '../..\\components\\Project-description\\index.vue'
export { default as ProjectDetails2Header } from '../..\\components\\Project-details2-header\\index.vue'
export { default as ProjectGallery } from '../..\\components\\Project-gallery\\index.vue'
export { default as ProjectIntroduction } from '../..\\components\\Project-introduction\\index.vue'
export { default as ProjectVideo } from '../..\\components\\Project-video\\index.vue'
export { default as SContactForm } from '../..\\components\\S-contact-form\\index.vue'
export { default as ScrollToTop } from '../..\\components\\Scroll-to-top\\index.vue'
export { default as Services1 } from '../..\\components\\Services1\\index.vue'
export { default as Services2 } from '../..\\components\\Services2\\index.vue'
export { default as Services4 } from '../..\\components\\Services4\\index.vue'
export { default as Services3 } from '../..\\components\\Services3\\index.vue'
export { default as Services5 } from '../..\\components\\Services5\\index.vue'
export { default as ShowcasesFullScreen } from '../..\\components\\Showcases-full-screen\\index.vue'
export { default as Services6 } from '../..\\components\\Services6\\index.vue'
export { default as SkillsCircle } from '../..\\components\\Skills-circle\\index.vue'
export { default as ShowcasesGrid } from '../..\\components\\Showcases-grid\\index.vue'
export { default as Team1 } from '../..\\components\\Team1\\index.vue'
export { default as Team2 } from '../..\\components\\Team2\\index.vue'
export { default as TestimonialsArcho } from '../..\\components\\Testimonials-archo\\index.vue'
export { default as Team3 } from '../..\\components\\Team3\\index.vue'
export { default as Video } from '../..\\components\\Video\\index.vue'
export { default as VideoWithTestimonials } from '../..\\components\\Video-with-testimonials\\index.vue'
export { default as WorksHeader } from '../..\\components\\Works-header\\index.vue'
export { default as WorksStyle1 } from '../..\\components\\Works-style1\\index.vue'
export { default as WorksStyle2 } from '../..\\components\\Works-style2\\index.vue'
export { default as Works1 } from '../..\\components\\Works1\\index.vue'
export { default as Works2 } from '../..\\components\\Works2\\index.vue'
export { default as Works3 } from '../..\\components\\Works3\\index.vue'
export { default as Works5 } from '../..\\components\\Works5\\index.vue'
export { default as Works6 } from '../..\\components\\Works6\\index.vue'
export { default as Works4 } from '../..\\components\\Works4\\index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
