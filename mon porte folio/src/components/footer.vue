<template>
    <footer>
      <ul>
      <li>
        <a href="https://github.com/jilopi" target="_blank">
        <img src="/github.png" alt="GitHub" width="30">
      </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/pietr-hilop-8b4484267/" target="_blank">
          <img src="/linkdin.png" alt="LinkedIn" width="30">
        </a>
      </li>
    </ul>
    <p class="centre">Dernière mise à jour : <br>mai 2025</p>
    </footer>
  </template>
  
  <script setup>
  </script>

<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

.centre{
  text-align: center;
  margin: 0 auto;
  width: 100%;
}


</style>