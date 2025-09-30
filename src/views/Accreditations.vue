<template>
  <div class="container-fluid about-page-primary">
    <div class="" style="padding: 0vw 1vw;">
      <div class="row">
        <div class="col p-5">
          <h1 class="mont-primary">My Certifications</h1>
          <div class="col">
            <div class="col pt-5">
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
                        <span><a href="job.link" class="link" target="_blank"><img :src="job.link" :alt="job.link"></img> Verify
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import verify from '../assets/images/verify.png'

export default {
  name: "Job",
  data() {
    return {
      jobs: [
        { title: "Full Stack Developer", description: "Amazon Web Services", capabilities: ['one', 'two', 'three', 'four', 'five'], link: verify },
        { title: "Mondale High School", description: "Amazon Web Services", capabilities: ['one', 'two', 'three', 'four', 'five'], link: verify },
        { title: "Web Developer", description: "Amazon Web Services",  capabilities: ['one', 'two', 'three', 'four', 'five'],link: verify },
        { title: "Software Developer", description: "Amazon Web Services", link: verify },
        { title: "Wordpress Developer", description: "Amazon Web Services", link: verify },
        { title: "Entrepreneur", description: "Amazon Web Services",  capabilities: ['one', 'two', 'three', 'four', 'five'], link: verify }
      ]
    };
  },
  computed: {
    leftJobs() {
      return this.jobs.filter((_, i) => i % 2 === 0); // even index jobs
    },
    rightJobs() {
      return this.jobs.filter((_, i) => i % 2 !== 0); // odd index jobs
    }
  }
};
</script>

<style src="../assets/styles/styles.css"></style>
