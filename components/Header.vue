<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'Workouts',
    to: '/workouts',
    active: route.path.startsWith('/workouts')
  },
  {
    label: 'Profile',
    to: '/profile',
    active: route.path.startsWith('/profile')
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" class="text-2xl font-bold">
        GymLife
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UButton
        color="primary"
        variant="solid"
        to="/login"
      >
        Sign In
      </UButton>
    </template>
  </UHeader>
</template>
