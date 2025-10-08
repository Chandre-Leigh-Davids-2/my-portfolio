<template>
  <div class="container-fluid">
    <div style="padding: 0vw 1vw;">
      <div class="row">
        <div class="div p-5">
          <section id="portfolio" class="portfolio">
            <div>
              <div class="row">
                <h1 class="mont-secondary">Check Out Some of My Projects</h1>
              </div>

              <!-- FILTER BUTTONS -->
              <div class="row mt-3 py-4 g-3">
                <div class="col-md-12 filters">
                  <button
                    class="mx-2 btn"
                    :class="{ active: selectedCategory === 'all' }"
                    @click="filterPortfolio('all')"
                  >
                    All Projects
                  </button>
                  <button
                    class="mx-2 btn"
                    :class="{ active: selectedCategory === 'websites' }"
                    @click="filterPortfolio('websites')"
                  >
                    Full Stack
                  </button>
                  <button
                    class="mx-2 btn"
                    :class="{ active: selectedCategory === 'application' }"
                    @click="filterPortfolio('application')"
                  >
                    Applications
                  </button>
                  <button
                    class="mx-2 btn"
                    :class="{ active: selectedCategory === 'qualityAssurance' }"
                    @click="filterPortfolio('qualityAssurance')"
                  >
                    QA Testing
                  </button>
                </div>
              </div>

              <!-- PORTFOLIO GRID -->
              <div class="row">
                <div
                  class="col-lg-4 col-md-6"
                  v-for="(item, index) in filteredItems"
                  :key="index"
                  :data-category="item.category"
                >
                  <div class="portfolio-box shadow">
                    <img
                      :src="item.image"
                      :alt="`portfolio ${index + 1} image`"
                      :title="`portfolio ${index + 1} picture`"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <div class="caption">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.category }} project</p>
                        <p><a :href="item.url" target="_blank">View Live</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END PORTFOLIO GRID -->
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import project1 from "../assets/images/whatsapp.png";
// Add your other images here if needed

export default {
  data() {
    return {
      portfolioItems: [
        {
          title: "Creative Portfolio",
          category: "websites",
          image: project1,
          url: "https://portfoliocldavids.vercel.app/",
        },
        {
          title: "Pokedex",
          category: "websites",
          image: project1,
          url: "https://pokemon-beta-livid.vercel.app/",
        },
        {
          title: "HTML, CSS, JavaScript",
          category: "websites",
          image: project1,
          url: "https://visio-pearl.vercel.app/",
        },
        {
          title: "Wordpress",
          category: "websites",
          image: project1,
          url: "https://dev-ecommerce-giftedmoments.pantheonsite.io/",
        },
        {
          title: "To Do List",
          category: "application",
          image: project1,
          url: "https://to-do-list-nu-blush.vercel.app/",
        },
        {
          title: "Calculator",
          category: "application",
          image: project1,
          url: "https://calculator-peach-iota-86.vercel.app/",
        },
        {
          title: "Wordpress",
          category: "websites",
          image: project1,
          url: "https://chandre.bigbeardbeta.co.za/",
        },
        {
          title: "Sanrio",
          category: "websites",
          image: project1,
          url: "https://sanrio-olive.vercel.app/",
        },
      ],
      selectedCategory: "all",
    };
  },
  computed: {
    filteredItems() {
      if (this.selectedCategory === "all") {
        return this.portfolioItems;
      }
      return this.portfolioItems.filter(
        (item) => item.category === this.selectedCategory
      );
    },
  },
  methods: {
    filterPortfolio(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style src="../assets/styles/styles.css">
</style>