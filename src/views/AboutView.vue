<template>
  <div class="container-fluid about-page-primary">
    <div class="" style="padding: 0vw 1vw;">
      <div class="row">
        <div class="col-md-7 p-5">
          <h1 class="mont-primary">About Me</h1>
          <div class="pt-5">
            <p class="noto-primary" style="font-weight: 300;">Hi, I’m Chandré Leigh Davids, an enthusiastic and motivated aspiring developer with a strong passion for technology, creativity, and problem-solving. My journey into tech began in Grade 11, when I was introduced to coding and robotics through Python and Arduino projects. That experience sparked my curiosity about building real solutions with code. In my matric year, I discovered Life Choices Academy, and after finishing school I joined the program, where I deepened my knowledge and later gained hands-on experience during an internship with Life Choices Studio. <br><br>There, I worked on projects in web development, WordPress, and software development, which gave me a solid foundation in both technical and collaborative skills. These experiences sharpened my adaptability and problem-solving mindset, and fueled my passion for creating clean, impactful digital solutions. My goal is to grow into a versatile developer who contributes to meaningful projects while continuously learning and evolving.</p>
            <div class="py-5 d-flex justify-content-start">
              <!-- Host On Github pages -->
              <button class="button view-cv" style="margin-right: 10px;"><a href="" target="_blank">VIEW MY
                  CV</a></button>
              <button class="button learn-more">
                <a href="https://www.linkedin.com/in/chandre-leigh-davids/" target="_blank">
                  LEARN MORE
                </a>
              </button>
            </div>
          </div>
        </div>
          <div class="col-md-5 d-flex justify-content-center align-content-center pt-5">
            <img src="../assets/images/image-of-self.png" alt="" class="about-image">
          </div>
      </div>
    </div>
  </div>
  <div class="container-fluid about-page-secondary">
    <div class="" style="padding: 0vw 1vw;">
      <div class="row">
        <div class="col p-5">
          <h1 class="mont-secondary">Education & Experience</h1>
          <div class="col pt-5">
            <!-- Education and Experience Blocks -->
            <div class="timeline-grid">
              <!-- LEFT COLUMN -->
              <div class="timeline-column">
                <div v-for="(job, index) in leftJobs" :key="'left-' + index" class="timeline-item">
                  <div class="timeline-marker"></div>
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
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <h3>{{ job.title }}</h3>
                    <p>{{ job.description }}</p>
                    <span>{{ job.year }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid about-page-primary">
    <div class="" style="padding: 0vw 1vw;">
      <div class="row">
        <div class="col p-5">
          <h1 class="mont-primary">Skills</h1>
          <div class="col pt-5 d-flex">
            <div class="skill">
              <img src="../assets/images/linkedin.png" alt="">
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
        { title: "Frontend Developer", description: "Worked on UI/UX components.", year: "2023" },
        { title: "Backend Developer", description: "Built REST APIs with Node.js.", year: "2022" },
        { title: "Fullstack Developer", description: "Developed eCommerce platform.", year: "2021" },
        { title: "Intern", description: "Assisted with bug fixes and testing.", year: "2020" },
      ]
    };
  },
   methods: {
    setActiveLink() {
      const currentUrl = window.location.href;
      document.querySelectorAll('.nav-link').forEach(link => {
        // clear old active states first
        link.classList.remove('active');

        // mark current link as active
        if (link.href === currentUrl) {
          link.classList.add('active');
        }
      });
    }
  },
  mounted() {
    this.setActiveLink(); // run once when component loads
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
