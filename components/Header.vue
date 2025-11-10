<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">
        <NuxtLink to="/">GymLife</NuxtLink>
      </h1>
      <nav>
        <ul class="flex space-x-4">
          <li><NuxtLink to="/" class="hover:text-gray-400">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-gray-400">About</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-gray-400">Contact</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>
