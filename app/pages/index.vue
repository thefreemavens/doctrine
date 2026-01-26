<script setup lang="ts">
const appConfig = useAppConfig()

const title = appConfig.title
const description = appConfig.description

useSeoMeta({
  // titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '/img/assets/tfm-doctrine-home-screenshot-light.png',
  twitterImage: '/img/assets/tfm-doctrine-home-screenshot-light.png',
  ogUrl: 'https://doctrine.thefreemavens.org/',
  twitterTitle: title,
  twitterDescription: description
})
</script>

<template>
  <div>
    <AppHero />
    <AppFeaturesLearn />
    <AppFeaturesContribute />
    <AppCallAction />
  </div>
</template>
