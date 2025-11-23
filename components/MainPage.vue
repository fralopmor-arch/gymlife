<template>
  <!-- 👇 I removed the 'bg-slate-50' and gradient classes from here. 
       Now the transparent div will let the main.css background show through! -->
  <div>
    
    <!-- Hero Section -->
    <UContainer class="py-16 lg:py-24 text-center">
      <!-- Force dark text with ! -->
      <h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        Track Your Progress, Crush Your Goals
      </h1>
      <p class="mt-6 text-lg tracking-tight text-slate-600">
        Welcome to GymLife, the ultimate companion for your fitness journey. Log your workouts, visualize your progress, and stay motivated.
      </p>
      
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <!-- Buttons with correct 'neutral' color -->
        <UButton to="/register" size="xl" color="neutral" variant="solid">
          Get Started for Free
        </UButton>
        <UButton to="/features" size="xl" color="neutral" variant="ghost">
          Learn More <span aria-hidden="true">→</span>
        </UButton>
      </div>
    </UContainer>

    <!-- Features Section -->
    <!-- CHANGED: Reduced bottom padding (pb-8 lg:pb-12) to bring footer closer -->
    <UContainer class="pt-16 pb-8 lg:pt-24 lg:pb-12">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to succeed</h2>
        <p class="mt-6 text-lg leading-8 text-slate-600">
          From workout logging to progress analytics, we've got you covered.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <!-- Feature 1 -->
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
              <UIcon name="i-heroicons-chart-bar" class="h-5 w-5 flex-none text-indigo-600" />
              Workout Logging
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
              <p class="flex-auto">Easily log your exercises, sets, reps, and weight. Our intuitive interface makes tracking a breeze.</p>
            </dd>
          </div>
          <!-- Feature 2 -->
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
              <UIcon name="i-heroicons-chart-pie" class="h-5 w-5 flex-none text-indigo-600" />
              Progress Analytics
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
              <p class="flex-auto">Visualize your strength gains with beautiful charts. Track your volume, personal records, and consistency.</p>
            </dd>
          </div>
          <!-- Feature 3 -->
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
              <UIcon name="i-heroicons-users" class="h-5 w-5 flex-none text-indigo-600" />
              Community & Motivation
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
              <p class="flex-auto">Join a community of fitness enthusiasts. Share your progress and stay motivated together.</p>
            </dd>
          </div>
        </dl>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
// Logic here
</script>