<template>
  <div class="container-fluid about-page-primary">
    <div class="" style="padding: 0vw 1vw;">
      <div class="row">
        <div class="col p-5">
          <h1 class="mont-primary">My Certifications</h1>
          <div class="pt-5">
            <!-- Education and Experience Blocks -->
            <div class="accreditations-grid">
              <!-- LEFT COLUMN -->
              <div class="accreditations-column">
                <div v-for="(job, index) in leftJobs" :key="'left-' + index" class="accreditations-item d-flex">
                  <div class="accreditations-content d-flex">
                    <div class="badge">
                      <img src="../assets/images/badge.png" alt="">
                    </div>
                    <div class="box">
                      <h3>{{ job.title }}</h3>
                      <p>{{ job.description }}</p>
                      <div class="capabilities">
                        <span v-for="(capabilities, i) in job.capabilities" :key="i" class="capabilities">
                          {{ capabilities }}
                        </span>
                      </div>
                      <span><a href="job.link" class="link" target="_blank"><img :src="job.link" :alt="job.link"></img>
                          Verify
                          Certificate</a></span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- RIGHT COLUMN -->
              <div class="accreditations-column">
                <div v-for="(job, index) in rightJobs" :key="'right-' + index" class="accreditations-item">
                  <div class="accreditations-content d-flex">
                    <div class="badge">
                      <img src="../assets/images/badge.png" alt="">
                    </div>
                    <div class="box">
                      <h3>{{ job.title }}</h3>
                      <p>{{ job.description }}</p>
                      <div class="capabilities">
                        <span v-for="(capabilities, i) in job.capabilities" :key="i" class="capabilities">
                          {{ capabilities }}
                        </span>
                      </div>
                      <span><a :href="job.link" class="link"><img :src="job.link" :alt="job.link"></img> Verify
                          Certificate</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-5 w-100 mb-5">
          <h1 class="mont-primary">Badges</h1>
          <div class="badge-container">
            <div class="inside-container">
              <!-- Prev button -->
              <div class="prev" @click="prev">&#60;</div>
              <!-- Badge items -->
              <div class="badges">
                <div v-for="(badge, index) in visibleBadges" :key="index" class="badge-item">
                  <span class="image-container">
                    <img :src="badge.image" :alt="'badge-' + index" />
                  </span>
                </div>
              </div>
              <!-- Next button -->
              <div class="next" @click="next">&#62;</div>
            </div>

            <!-- Position dots -->
            <div class="position">
              <span v-for="(dot, index) in totalPages" :key="index" :class="{ active: currentPage === index }"
                @click="goToPage(index)"></span>
            </div>
          </div>
        </div>
        <div class="container p-5">
          <h1 class="mont-primary text-center m-5">Ready To Collaborate?</h1>
          <div class="d-flex justify-content-center">
            <button class="button">SCHEDULE A CALL</button>
            <button class="button">VIEW PROJECTS</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import verify from '../assets/images/verify.png'
import next from '../assets/images/linkedin.png'

export default {
  name: "Job",
  data() {
    return {
      jobs: [
        { title: "Full Stack Developer", description: "Amazon Web Services", capabilities: ['one', 'two', 'three', 'four', 'five'], link: verify },
        { title: "Mondale High School", description: "Amazon Web Services", capabilities: ['one', 'two', 'three', 'four', 'five'], link: verify },
        { title: "Web Developer", description: "Amazon Web Services", capabilities: ['one', 'two', 'three', 'four', 'five'], link: verify },
        { title: "Software Developer", description: "Amazon Web Services", link: verify },
        { title: "Wordpress Developer", description: "Amazon Web Services", link: verify },
        { title: "Entrepreneur", description: "Amazon Web Services", capabilities: ['one', 'two', 'three', 'four', 'five'], link: verify }
      ],
      badges: [
        { image: verify },
        { image: next },
        { image: verify },
        { image: next },
        { image: verify },
        { image: next },
        { image: verify },
        { image: next },
        { image: verify }
      ],
      currentPage: 0,
      itemsPerPage: 3, // show 3 badges at a time
    };
  },
  computed: {
    leftJobs() {
      return this.jobs.filter((_, i) => i % 2 === 0); // even index jobs
    },
    rightJobs() {
      return this.jobs.filter((_, i) => i % 2 !== 0); // odd index jobs
    },
    totalPages() {
      return Math.ceil(this.badges.length / this.itemsPerPage);
    },
    visibleBadges() {
      const start = this.currentPage * this.itemsPerPage;
      return this.badges.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    prev() {
      if (this.currentPage === 0) {
        this.currentPage = this.totalPages - 1; // jump to last page
      } else {
        this.currentPage--;
      }
    },
    next() {
      if (this.currentPage === this.totalPages - 1) {
        this.currentPage = 0; // jump back to first page
      } else {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
  }
};
</script>

<style src="../assets/styles/styles.css"></style>
