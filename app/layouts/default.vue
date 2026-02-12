<template>
  <UMain>
    <slot />
  </UMain>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'landing',
  },
})
</script>
