<script setup>
function envoyerFormulaire(event) {
  event.preventDefault(); // Empêche le rechargement
  const email = import.meta.env.VITE_EMAIL;
  alert(`Le formulaire serait envoyé à : ${email}`);
}
import { ref } from 'vue'
import Modal from '../components/modal.vue'
import CreationCard from '../components/CreationCard.vue'

const showModal = ref(false)
const modalTitre = ref('')
const modalImage = ref('')
const modalDescription = ref('')
const modalLien = ref('')

function ouvrirModal(titre, image, description, lien) {
  modalTitre.value = titre
  modalImage.value = image
  modalDescription.value = description
  modalLien.value = lien
  showModal.value = true
}
</script>

<template>
  <div class="englobe">
   <section id="presentation">
    <h2>Trochon Pierrick</h2>
    <p>J'ai 28 ans et je suis en reconversion professionelle . avant j'etais dans la nature.<br>j'ai déja quelque projet a mon actif que vous pourrez voir plus bas.  </p>
  </section>


<section id="creations">
  <h2>Mes créations</h2>

  <CreationCard
    titre="Mon CV en ligne"
    image="/classeur.jpg"
    description="mon premier exercice en html css"
     @click="ouvrirModal('Mon CV en ligne', '/classeur.jpg', 'mon premiere exercices en html css','https://github.com/jilopi/Mon-CV-en-ligne')"
  />

  <CreationCard
    titre="dynamiser un espace commentaire"
    image="/classeurouvert.jpg"
    description="un exercice pour apprendre le JS."
     @click="ouvrirModal('dynamiser un espace commentaire', '/classeurouvert.jpg', 'un exercice pour apprendre le JS.','https://github.com/jilopi/DYNAMISER-UN-ESPACE-COMMENTAIRE')"
  />

  <Modal
  :visible="showModal"
  :titre="modalTitre"
  :image="modalImage"
  :description="modalDescription"
  :lien="modalLien"
  @close="showModal = false"
/>

</section>

  <section id="contact">
    <h2>Me contacter :</h2>
    <div class="contrainte">
    <form @submit="envoyerFormulaire">
  <input type="text" placeholder="Nom et Prénom" /><br>

  <input type="text" placeholder="objet" /><br>

    <textarea placeholder="Message"></textarea>

  <button type="submit">Envoyer</button>
</form>
</div>
  </section>
</div>
</template>

<style>
.englobe {
  background-color: #26619C;
}
section{
color: black;
}
  form {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
input,
textarea {
  text-align: center;
  border-radius: 10px;
}
form button {
  border-radius: 10px;
}


</style>
