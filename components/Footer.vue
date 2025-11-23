<script setup lang="ts">
// Simplified links list
const links = [
  { label: 'About Us' },
  { label: 'Contact' },
  { label: 'Help Center' }
]

const toast = useToast()
const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    toast.add({
      title: 'Subscribed!',
      description: 'You\'ve been subscribed to our newsletter.'
    })
    email.value = ''
  }, 1000)
}
</script>

<template>
  <!-- 
    PREMIUM GLASS STYLE:
    - bg-white/60: Semi-transparent white.
    - backdrop-blur-xl: Heavy blur effect (Frosted Glass).
    - This allows the 'Aurora' animation from main.css to be visible behind the footer!
  -->
  <footer class="border-t border-slate-200/60 bg-white/60 backdrop-blur-xl mt-0">
    <UContainer class="py-16">
      <div class="flex flex-col gap-12 items-center">
        
        <!-- Links -->
        <nav class="flex flex-row gap-8">
          <!-- Added hover:text-violet-600 to match your main.css gradient color -->
          <NuxtLink 
            v-for="link in links" 
            :key="link.label" 
            to="#" 
            class="text-sm font-semibold text-slate-600 hover:text-violet-600 transition-colors tracking-wide"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Newsletter Section -->
        <div class="max-w-md w-full text-center">
          <h3 class="font-bold text-lg text-slate-900 tracking-tight">Stay Motivated</h3>
          <p class="mt-2 text-sm text-slate-500 leading-relaxed">
            Get the latest workout tips and features sent to your inbox.
          </p>
          
          <form @submit.prevent="onSubmit" class="mt-8">
            <div class="flex flex-col sm:flex-row gap-3">
              <!-- Input with slight transparency to match the glass theme -->
              <UInput
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="w-full flex-1 bg-white/80 backdrop-blur-sm rounded-md shadow-sm"
                size="lg"
                color="neutral"
              />
              <UButton 
                type="submit" 
                color="neutral" 
                variant="solid" 
                size="lg"
                :loading="loading"
                class="shrink-0 font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                Subscribe
              </UButton>
            </div>
          </form>
        </div>

      </div>

      <!-- Bottom Section -->
      <div class="mt-16 border-t border-slate-200/60 pt-8">
        <p class="text-xs text-slate-400 text-center font-medium">
          © {{ new Date().getFullYear() }} GymLife. All rights reserved.
        </p>
      </div>
    </UContainer>
  </footer>
</template>