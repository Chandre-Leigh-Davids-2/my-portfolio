<template>
  <div>
    <Navbar></Navbar>
  </div>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
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
}


</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
