<template>
  <!-- 
    Compact Layout:
    - h-auto: Height is determined by content only
    - justify-start: Packs items to the top
  -->
  <div class="flex flex-col h-auto justify-start bg-transparent">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>