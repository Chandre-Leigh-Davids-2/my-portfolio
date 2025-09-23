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
                <div class="row mt-3 py-4 g-3 ">
                    <div class="col-md-12">
                        <button class="mx-1 btn btn-outline-dark" type="button"
                            @click="filterPortfolio('all')">All</button>
                        <button class="mx-1 btn btn-outline-dark" type="button"
                            @click="filterPortfolio('websites')">Websites</button>
                        <button class="mx-1 btn btn-outline-dark" type="button"
                            @click="filterPortfolio('application')">Application</button>
                        <button class="mx-1 btn btn-outline-dark" type="button" @click="filterPortfolio('qualityAssurance')">
                            QA</button>
                    </div>
                </div>
                <!-- START THE PORTFOLIO ITEMS -->
                <div class="row">
                    <div class="col-lg-4 col-md-6" v-for="(item, index) in filteredItems" :key="index"
                        :data-category="item.category">
                        <div class="portfolio-box shadow">
                            <img :src="item.image" :alt="`portfolio ${index + 1} image`"
                                :title="`portfolio ${index + 1} picture`" class="img-fluid">
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

            </div>
        </section>
    </div>
      </div>
  </div>
  </div>
</template>

<script>
import project1 from '../assets/images/whatsapp.png'
// import project2 from '../assets/images/pokemon.png'
// import project3 from '../assets/images/visio.png'
// import project4 from '../assets/images/wordpress.png'
// import project5 from '../assets/images/to-do-list.png'
// import project6 from '../assets/images/calculator.png'
// import project7 from '../assets/images/Worpress website .png'
// import project8 from '../assets/images/sanrio.png'

export default {
    data() {
        return {
            // List of all portfolio items with categories
            portfolioItems: [
                { title: 'Creative Portfolio', category: 'websites', image: project1, url: 'https://portfoliocldavids.vercel.app/' },
                { title: 'Pokedex', category: 'websites', image: project1, url: 'https://pokemon-beta-livid.vercel.app/' },
                { title: 'HTML,CSS,JavaScript', category: 'websites', image: project1, url: 'https://visio-pearl.vercel.app/' },
                { title: 'Wordpress', category: 'websites', image: project1, url: 'https://dev-ecommerce-giftedmoments.pantheonsite.io/' },
                { title: 'To Do List', category: 'application', image: project1, url: 'https://to-do-list-nu-blush.vercel.app/' },
                { title: 'Calculator', category: 'application', image: project1, url: 'https://calculator-peach-iota-86.vercel.app/' },
                { title: 'Wordpress', category: 'website', image: project1, url: 'https://chandre.bigbeardbeta.co.za/' },
                { title: 'Wordpress', category: 'website', image: project1, url: 'https://sanrio-olive.vercel.app/' }
            ],
            selectedCategory: 'all', // default category
        };
    },
    computed: {
        filteredItems() {
            if (this.selectedCategory === 'all') {
                return this.portfolioItems;
            }
            return this.portfolioItems.filter(item => item.category === this.selectedCategory);
        }
    },
    methods: {
        filterPortfolio(category) {
            this.selectedCategory = category;
        }
    }
};
</script>


<style src="../assets/styles/styles.css">
</style>