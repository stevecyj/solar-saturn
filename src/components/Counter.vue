<!-- src/components/Counter.vue -->
<script setup>
import { ref } from 'vue';

const count = ref(0);
const heading = 'Astro with Vue 3 Counter APP';

const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<template>
  <div class="flex flex-col items-center m-5">
    <h1 class="text-xl font-bold text-purple-600">{{ heading }}</h1>
    <button
      @click="increment"
      class="px-4 py-2 text-sm text-white bg-green-600 rounded"
    >
      增加
    </button>
    <p>計數: {{ count }}</p>
    <button
      @click="decrement"
      class="px-4 py-2 text-sm text-white bg-red-600 rounded"
    >
      減少
    </button>
  </div>
</template>
