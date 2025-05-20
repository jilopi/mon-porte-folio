<script setup>
defineProps({
  visible: Boolean,
  titre: String,
  description: String,
  image: String,
  lien: String
});
defineEmits(['close']);
</script>

<template>
  <div v-if="visible" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal">
      <h2>{{ titre }}</h2>
      <img :src="image" :alt="titre" width="300" />
      <p>{{ description }}</p>
      <a :href="lien" target="_blank" rel="noopener" class="lien-projet">
  Voir le projet
</a><br>
      <button @click="$emit('close')">Fermer</button>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #0d1b2a;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
  color:black
}
a{
  color: black;
}
a:hover {
  color: blanchedalmond;
}
button{
  border-radius: 8px;
}

</style>