<template>
  <div class="container-fluid about-page-primary">
    <div style="padding: 0vw 1vw;">
      <div class="row">
        <div class="col-lg-7 p-5">
          <h1 class="mont-primary">About Me</h1>
          <div class="pt-5">
            <p class="noto-primary" style="font-weight: 300;">I am Chandré Leigh Davids, an enthusiastic and
              motivated aspiring developer with a strong passion for technology, creativity, and problem-solving. My
              journey into tech began in Grade 11, when I was introduced to coding and robotics through Python and
              Arduino projects. That experience sparked my curiosity about building real solutions with code. In my
              matric year, I discovered Life Choices Academy, and after finishing school I joined the program, where I
              deepened my knowledge and later gained hands-on experience during an internship with Life Choices Studio.
              <br><br>There, I worked on projects in web development, WordPress, and software development, which gave me
              a solid foundation in both technical and collaborative skills. These experiences sharpened my adaptability
              and problem-solving mindset, and fueled my passion for creating clean, impactful digital solutions. My
              goal is to grow into a versatile developer who contributes to meaningful projects while continuously
              learning and evolving.
            </p>
            <div class="py-5 justify-content-start">
              <!-- Host On Github pages -->
              <a href="/files/chandre-leigh-davids-resume.pdf" target="_blank" style="margin-right: 10px;">
                <button class="button view-cv">VIEW MY CV</button>
              </a>
              <a href="https://www.linkedin.com/in/chandre-leigh-davids/" target="_blank">
                <button class="button learn-more">LEARN MORE</button>
              </a>
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
                <h3 class="mb-5">Experience</h3>
                <div v-for="(job, index) in leftSide" :key="'left-' + index" class="timeline-item">
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
                <h3 class="mb-5">Education</h3>
                <div v-for="(job, index) in rightSide" :key="'right-' + index" class="timeline-item">
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
import html from '../assets/images/html.png'
import CSS from '../assets/images/css.png'
import js from '../assets/images/js.png'
import VueJS from '../assets/images/vueJs.png'
import NodeJS from '../assets/images/NodeJs.png'
import MySQL from '../assets/images/mysql.png'
import Csharp from '../assets/images/Csharp.png'
import Unity from '../assets/images/unity.png'
import Python from '../assets/images/python.png'
import Flask from '../assets/images/flask.png'
import Wordpress from '../assets/images/wordpress.png'
import SEO from '../assets/images/seo.png'
import Cypress from '../assets/images/cypress.png'
import GitHub from '../assets/images/GitHub-logo.png'
import Figma from '../assets/images/figma.png'
import Flutter from '../assets/images/lockup_flutter.png'
import Vercel from '../assets/images/vercel.png'

export default {
  name: "JobTimeline",
  data() {
    return {
      jobs: [
        { title: "Web Developer Assistant", description: "Assisted in developing and optimizing client websites using WordPress, ensuring responsive design, functionality, and alignment with client goals to deliver high-quality user experiences at Big Beard Web Solutions.", year: "May 2025 - July 2025" },
        { title: "Software Developer", description: "Developed and optimized software solutions using Python and JavaScript, ensuring efficient performance, scalability, and a seamless user experience at Life Choices Studio.", year: "Jan 2025 - Apr 2025" },
        { title: "Wordpress Developer", description: "Designed and developed responsive WordPress websites, customizing themes and plugins to meet client needs while enhancing functionality and user experience at Life Choices Studio.", year: "Oct 2024 - Jan 2025" },
        { title: "Entrepreneur", description: "Founded and manage a small business creating and selling handmade satin roses, jewelry, and crochet items, focusing on quality craftsmanship and customer satisfaction.", year: "October 2023 - Present" }
      ],
      education:[
        { title: "Life Choices Academy", description: "At Life Choices Academy, I completed a Full Stack Development Bootcamp that introduced me to the fundamentals of web development. I learned HTML, CSS, and JavaScript, and gained hands-on experience building functional web applications, preparing me for real-world development projects.", year: "Apr 2024 - Sep 2024" },
        { title: "Mondale High School", description: "At Mondale High School, I focused on Pure Mathematics, Physics, Accounting, and Life Sciences. This curriculum strengthened my logical thinking, analytical abilities, and attention to detail, preparing me for further studies and professional development.", year: "2019-2023" }
      ],
      skills: [
        { name: "HTML", img: html },
        { name: "CSS", img: CSS },
        { name: "JavaScript", img: js },
        { name: "Vue.js", img: VueJS },
        { name: "Node.js", img: NodeJS },
        { name: "MySQL", img: MySQL },
        { name: "C#", img: Csharp },
        { name: "Unity", img: Unity },
        { name: "Python", img: Python },
        { name: "Flask", img: Flask },
        { name: "WordPress", img: Wordpress },
        { name: "Php", img: linkedIn },
        { name: "SEO", img: SEO },
        { name: "Cypress", img: Cypress },
        { name: "GitHub", img: GitHub },
        { name: "Figma", img: Figma },
        { name: "Flutter.js", img: Flutter },
        { name: "Vercel", img: Vercel }
        // ➝ Add as many as you want here
      ]
    };
  },
  computed: {
    leftSide() {
      return this.jobs
    },
    rightSide() {
      return this.education
    }
  }
};
</script>

<style src="../assets/styles/styles.css"></style>
