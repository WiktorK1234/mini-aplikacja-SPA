<template>
  <div class="container my-5">
    <div class="text-center mb-5">
      <h1 class="display-4 text-primary">Galeria zdjęć Firmy</h1>
      <p class="lead">Zobacz nasze realizacje i projekty</p>
    </div>

    <div class="row g-4">
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <div class="card h-100 shadow-sm">
          <ImageCard
            :id="photo.id"
            :download_url="photo.download_url"
            :author="photo.author"
            @select="onSelect"
            class="h-100"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ImageCard from "../components/imageCard.vue";

const router = useRouter();
const photos = ref<any[]>([]); // Tymczasowo używamy any, możesz później dodać interface

async function fetchPhotos() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=8"
    );
    photos.value = await response.json();
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}

const onSelect = (id: string) => {
  router.push(`/photo/${id}`);
};

onMounted(async () => {
  await fetchPhotos();
});
</script>

<style scoped>
.card {
  transition: transform 0.2s;
  border: none;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
