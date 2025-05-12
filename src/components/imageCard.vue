<template>
  <div class="h-100 d-flex flex-column" @click="handleClick">
    <img
      :src="download_url || url"
      :alt="author"
      class="card-img-top flex-grow-1 object-fit-cover"
      style="max-height: 200px"
    />
    <div class="card-footer bg-white">
      <h5 class="card-title text-center mb-0">{{ author }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  download_url: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["select"]);

const handleClick = () => {
  emit("select", props.id);
};
</script>
