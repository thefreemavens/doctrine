<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const ctaLearn = ref<ButtonProps[]>([
  {
    label: 'Explore the Open Doctrine',
    to: '/getting-started/usage',
    trailingIcon: 'i-local-arrow-right',
    variant: 'solid'
  }
])
</script>

<template>
  <UPageSection
    headline="Learn the"
    title="Science of Natural Law"
    description="Begin your journey with the foundational knowledge. The Doctrine is presented in a clear, structured format to facilitate deep understanding, from first principles to advanced synthesis."
    :links="ctaLearn"
  >
    <template #features>
      <UPageCard
        title="The Core Transcripts"
        description="The complete Natural Law seminar, segmented and annotated for study."
        variant="subtle"
        spotlight
        icon="i-local-book-open-text"
      />
      <UPageCard
        title="The Principles Decrypted"
        description="A clear breakdown of the 7 Hermetic Laws and the generative 8th (Care), with definitions and examples."
        variant="subtle"
        spotlight
        icon="i-local-compass"
      />
      <UPageCard
        title="The Science of Morality"
        description="Explore the objective framework of Right Action, Wrong Action, and the No Harm rule derived from Natural Law."
        variant="subtle"
        spotlight
        icon="i-local-scale"
      />
      <UPageCard
        title="Sovereignty & The Great Work"
        description="Learn the path of the Internal Monarchy and your role in the collective elevation of consciousness."
        variant="subtle"
        spotlight
        icon="i-local-brain"
      />
      <UPageCard
        title="Cross-Referenced Glossary"
        description="Every key term (e.g., Natural Law, Truth, Religion, Statism) is defined and linked across all texts."
        variant="subtle"
        spotlight
        icon="i-local-link"
      />
      <UPageCard
        title="Curated Reading Paths"
        description="Follow guided sequences: Start Here for First Principles, Path to The Great Work, Deep Dive on Cause & Effect."
        variant="subtle"
        spotlight
        icon="i-local-git-compare-arrows"
      />
    </template>
  </UPageSection>
</template>
