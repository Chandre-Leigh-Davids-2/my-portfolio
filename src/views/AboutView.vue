<template>
  <div class="container-fluid about-page-primary">
    <div class="" style="padding: 0vw 1vw;">
      <div class="row">
        <div class="col p-5">
          <h1 class="mont-primary">About Me</h1>
          <div class="col pt-5">
            <p class="noto-primary" style="font-weight: 300;">Hi, I’m Chandré Leigh Davids, a curious and driven
              aspiring developer who loves turning ideas into real solutions. My fascination with technology began in
              Grade 11, when I first experimented with Python and Arduino, discovering how creativity and code could
              bring projects to life. During matric, I came across Life Choices Academy, and after completing school, I
              fully committed to the program, gaining hands-on experience in web development, software, and
              collaborative projects through an internship at Life Choices Studio. These experiences taught me not only
              technical skills but also the value of teamwork, adaptability, and problem-solving. I am passionate about
              building meaningful digital solutions and constantly exploring new technologies, with the goal of growing
              into a versatile developer who creates work that leaves a lasting impact.</p>

          </div>
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
          <div class="col pt-5">
            <p class="noto-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab atque quaerat distinctio
              explicabo ipsa modi ipsam sint laudantium dolorum cupiditate, est minima expedita quae unde ipsum harum
              vel dolor. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, laudantium
              rerum voluptas vero voluptates nobis, vitae quae possimus suscipit quas veniam odit reiciendis vel,
              necessitatibus in perspiciatis quisquam beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quos beatae dolore aliquid, voluptate adipisci obcaecati nobis inventore esse consectetur, eaque vero
              sapiente eius blanditiis atque eveniet, minima ipsum accusamus nam.</p>
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
