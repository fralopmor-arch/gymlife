<template>
  <div class="flex items-center justify-center h-full py-16">
    <UCard class="w-full max-w-sm">
      <template #header>
        <h2 class="text-2xl font-bold text-center">Sign In to GymLife</h2>
      </template>

      <UForm :state="state" @submit="handleSubmit">
        <UFormGroup label="Email" name="email" class="mb-4">
          <UInput v-model="state.email" type="email" placeholder="you@example.com" icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" class="mb-6">
          <UInput v-model="state.password" type="password" placeholder="••••••••" icon="i-heroicons-lock-closed" />
        </UFormGroup>

        <UButton type="submit" block>
          Sign In
        </UButton>
      </UForm>

      <template #footer>
        <p class="text-sm text-center text-gray-500 dark:text-gray-400">
          Don't have an account?
          <NuxtLink to="/auth/register" class="text-primary font-medium">Sign up</NuxtLink>
        </p>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  email: '',
  password: ''
})

function handleSubmit() {
  // Handle login logic here
  console.log('Logging in with:', state.email, state.password)
  alert(`Login attempt for ${state.email}`)
}
</script>