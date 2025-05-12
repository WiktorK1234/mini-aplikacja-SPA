<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow">
          <div class="card-body text-center">
            <h2 class="card-title mb-4">Szczegóły zdjęcia</h2>

            <div class="ratio ratio-16x9 mb-4">
              <img
                :src="photo?.download_url"
                :alt="photo?.author"
                class="img-fluid object-fit-cover"
              />
            </div>

            <div class="text-start">
              <h5 class="mb-3">Autor: {{ photo?.author }}</h5>
              <p><strong>Wysokość:</strong> {{ photo?.height }} px</p>
              <p><strong>Szerokość:</strong> {{ photo?.width }} px</p>
              <p><strong>Proporcje:</strong> {{ aspectRatio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

interface Photo {
  id: string;
  author: string;
  download_url: string;
  width: number;
  height: number;
}

const route = useRoute();
const photo = ref<Photo | null>(null);

const aspectRatio = computed(() => {
  if (!photo.value) return "";
  const ratio = photo.value.width / photo.value.height;
  return ratio.toFixed(2) + ":1";
});

async function fetchPhoto(id: string) {
  try {
    const res = await fetch(`https://picsum.photos/id/${id}/info`);
    photo.value = await res.json();
  } catch (error) {
    console.error("Error fetching photo:", error);
  }
}

onMounted(() => {
  if (route.params.id) {
    fetchPhoto(route.params.id as string);
  }
});
</script>

<style scoped>
.img-fluid {
  max-height: 70vh;
  width: auto;
}

.object-fit-cover {
  object-fit: cover;
}

.ratio {
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  overflow: hidden;
}

.card {
  border: none;
  border-radius: 0.75rem;
}
</style>
