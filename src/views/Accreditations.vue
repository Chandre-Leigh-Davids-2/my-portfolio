<template>
  <div class="container-fluid about-page-primary">
    <div class="" style="padding: 0vw 1vw;">
      <div class="row">
        <div class="col p-5">
          <h1 class="mont-primary">My Certifications</h1>
          <div class="col pt-5">
            <!-- Education and Experience Blocks -->
            <div class="timeline-grid">
              <!-- LEFT COLUMN -->
              <div class="timeline-column">
                <div v-for="(job, index) in leftJobs" :key="'left-' + index" class="timeline-item">
                  <div class="timeline-content">
                    <h3>{{ job.title }}</h3>
                    <p>{{ job.description }}</p>
                    <span>{{ job.year }}</span>
                  </div>
                </div>
              </div>

              <!-- RIGHT COLUMN -->
              <div class="timeline-column">
                <div v-for="(job, index) in rightJobs" :key="'right-' + index" class="timeline-item">
                  <div class="timeline-content">
                    <h3>{{ job.title }}</h3>
                    <p>{{ job.description }}</p>
                    <span>{{ job.year }}</span>
                    <!-- Make sure to do queries please mobile first  please-->
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

export default {
  name: "JobTimeline",
  data() {
    return {
      jobs: [
        { title: "Full Stack Developer", description: "I did a 6 month bootcamp with Life Choices academy where I learnt the basics of web development.", year: "Apr 2024 - Sep 2024" },
        { title: "Mondale High School", description: "I studied at Mondale High School, completed my year matric year with a bachelors pass", year: "2019-2023" },
        { title: "Web Developer", description: "Developed eCommerce platform.", year: "2021" },
        { title: "Software Developer", description: "Assisted with bug fixes and testing.", year: "2020" },
        { title: "Wordpress Developer", description: "Assisted with bug fixes and testing.", year: "2020" },
        { title: "Entrepreneur", description: "Assisted with bug fixes and testing.", year: "2020" }
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
