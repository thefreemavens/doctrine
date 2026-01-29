<script setup lang="ts">
// const appConfig = useAppConfig()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    aria-label="The Freemavens | Home"
    class="flex justify-center items-center drop-shadow-md/20 dark:drop-shadow-none"
  >
    <UIcon
      name="i-local-tfm"
      class="flex w-10 h-10"
    />
  </NuxtLink>
</template>
