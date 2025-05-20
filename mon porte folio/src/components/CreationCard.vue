<script setup>
defineProps({
  titre: String,
  image: String,
  description: String
});
</script>

<template>
  <div class="conteneur">
  <div class="creation-card" @click="$emit('click')">
    <h3>{{ titre }}</h3>
    <div class="contenu">
      <img :src="image" :alt="titre" />
      <p>{{ description }}</p>
    </div>
  </div>
  </div>
</template>

<style scoped>
.creation-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.creation-card:hover {
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.4);
}


.creation-card h3 {
  text-align: center;
  margin-bottom: 10px;
}

.contenu {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.contenu img {
  width: 200px;
  height: auto;
  border-radius: 4px;
}

.contenu p {
  flex: 1;
  margin: 0;
}
</style>