<template>
  <div class="container-fluid about-page-primary">
    <div style="padding: 0vw 1vw;">
      <div class="row">
        <div class="col-lg-7 p-5">
          <h1 class="mont-primary">About Me</h1>
          <div class="pt-5">
            <p class="noto-primary" style="font-weight: 300;">Hi There! I'm Chandré Leigh Davids, an enthusiastic and
              motivated aspiring developer with a strong passion for technology, creativity, and problem-solving. My
              journey into tech began in Grade 11, when I was introduced to coding and robotics through Python and
              Arduino projects. That experience sparked my curiosity about building real solutions with code. In my
              matric year, I discovered Life Choices Academy, and after finishing school I joined the program, where I
              deepened my knowledge and later gained hands-on experience during an internship with Life Choices Studio.
              <br><br>There, I worked on projects in web development, WordPress, and software development, which gave me
              a solid foundation in both technical and collaborative skills. These experiences sharpened my adaptability
              and problem-solving mindset, and fueled my passion for creating clean, impactful digital solutions. My
              goal is to grow into a versatile developer who contributes to meaningful projects while continuously
              learning and evolving.</p>
            <div class="py-5 justify-content-start">
              <!-- Host On Github pages -->
              <button class="button view-cv" style="margin-right: 10px;">
                <a href="" target="_blank">VIEW MY
                  CV</a>
                </button>
              <button class="button learn-more">
                <a href="https://www.linkedin.com/in/chandre-leigh-davids/" target="_blank">
                  LEARN MORE
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-5 pt-5 d-none d-lg-flex align-content-center justify-content-center">
          <div class="about-image">
          <img src="../assets/images/image-of-self.png" alt="">
          </div>
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
        <div class="col-outer p-5">
          <h1 class="mont-primary">Skills</h1>
          <div class="col pt-5 d-flex flex-wrap justify-content-center glass">
            <div v-for="(skill, index) in skills" :key="index" class="skill col-md-2 mb-3">
              <img :src="skill.img" :alt="skill.name">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import linkedIn from '../assets/images/linkedin.png'
import gitHub from '../assets/images/GitHub.png'

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
      ],
       skills: [
        { name: "LinkedIn", img: linkedIn },
        { name: "GitHub", img: gitHub },
        { name: "Vue", img: linkedIn },
        { name: "JavaScript", img: linkedIn },
        { name: "HTML", img: linkedIn },
        { name: "CSS", img: linkedIn },
        { name: "WordPress", img: linkedIn },
        { name: "WordPress", img: linkedIn },
        { name: "WordPress", img: linkedIn },
        { name: "WordPress", img: linkedIn },
        { name: "WordPress", img: linkedIn },
        { name: "WordPress", img: linkedIn },
        { name: "WordPress", img: linkedIn },
        { name: "WordPress", img: linkedIn },
        { name: "WordPress", img: linkedIn },
        { name: "WordPress", img: linkedIn },
        { name: "WordPress", img: linkedIn },
        { name: "WordPress", img: linkedIn }
        // ➝ Add as many as you want here
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
