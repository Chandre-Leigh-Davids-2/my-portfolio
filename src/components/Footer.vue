<template>
  <footer>
    <div class="row d-flex justify-content-center">
        <p class="find-me-on my-2 coiny">Find Me On</p>
    </div>
    <div class="row d-flex justify-content-center">
        <ul class="footer-list mb-4 mt-2">
            <li><img src="../assets/images/linkedin.png" alt="GitHub" class="icon"></li>
            <li><img src="../assets/images/GitHub.png" alt="LinkedIn" class="icon"></li>
            <li><img src="../assets/images/whatsapp.png" alt="Whatsapp" class="icon"></li>
        </ul>
    </div>
    <div class="row d-flex justify-content-center copyright-div noto-primary">
        <p class="my-3 copyright">© <span class="date">{{ getTheYear()}}</span> rights reserved. Chandre Leigh Davids</p>
    </div>
  </footer>
</template>

<script>
export default{
    data(){
        return{
            message:'Hello World'
        }
    },
    methods:{
        getTheYear(){
            return new Date().getFullYear();
        }
    }
}

</script>

<style src="../assets/styles/styles.css">
</style>
