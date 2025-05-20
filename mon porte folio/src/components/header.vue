<template>
    <header>
       
        <nav>   
          <ul>
            <li><a href="#presentation">Présentation</a></li>
            <li><a href="#creations">Créations</a></li>
            <li><a href="#contact">Me contacter</a></li> 
          </ul>
          <a href="#presentation">
          <img src="/logo.png" alt="Logo" width="50" >
          </a>
        </nav>
    </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

ul {
  list-style: none;
  display: flex;
  gap: 40px; 
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

img {
  max-height: 50px;
}
</style>

