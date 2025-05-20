<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>



<template>
  <Header />
  <router-view />
  <Footer />
</template>



<style>
#app {
  display: flex;
  flex-direction: column;
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
  background-color: #121212; /* ou blanc selon ton style */
  color: white; /* ou noir selon le fond */
  overflow-y: auto;
}

section h2 {
  text-align: center;
}

section {
  margin-bottom: 60px;
  }
  #presentation {
  padding-top: 200px;
}
footer,header {
  background-color: #0d1b2a;
  }
  section:hover h2 {
  text-decoration: underline;
}
   
</style>
