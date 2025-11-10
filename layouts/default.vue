<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <Header />
    <main class="container mx-auto p-4 flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>