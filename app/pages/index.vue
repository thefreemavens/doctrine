<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const { data: page } = await useAsyncData('index', () => queryCollection('landing').path('/').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
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

const ctaContribute = ref<ButtonProps[]>([
  {
    label: 'Learn How To Contribute',
    to: '/getting-started/usage',
    trailingIcon: 'i-local-arrow-right',
    variant: 'solid'
  }
])

const ctaJoin = ref<ButtonProps[]>([
  {
    label: 'The Initiatory Path',
    to: '/getting-started/',
    trailingIcon: 'i-local-arrow-right',
    variant: 'solid'
  },
  {
    label: 'The Maven Code',
    to: '/getting-started/usage',
    trailingIcon: 'i-local-arrow-right',
    variant: 'subtle'
  }
])
</script>

<template>
  <div>
    <AppHero />
    <AppFeaturesLearn />
    <UPageSection
      title="Create. Contribute. Commit."
      description="This is a living, open-source project. Add your skills to help translate, clarify, and build tools that make this knowledge accessible to all."
      :links="ctaContribute"
    >
      <template #features>
        <UPageCard
          title="Translate the Doctrine"
          description="Join a translation team to make the texts available in your native language. All translations are peer-reviewed."
          variant="subtle"
          spotlight
          icon="i-local-globe"
        />
        <UPageCard
          title="Propose Clarifications"
          description="Submit pull requests to improve the clarity, flow, or accuracy of existing explanations."
          variant="subtle"
          spotlight
          icon="i-local-pencil-line"
        />
        <UPageCard
          title="Build Interactive Tools"
          description="Develop calculators, diagrams, or interactive exercises that help explain the principles (e.g., a Spiritual Currency Audit tool)."
          variant="subtle"
          spotlight
          icon="i-local-code"
        />
        <UPageCard
          title="Annotate & Discuss"
          description="Add contextual notes, historical references, or contemporary examples to specific passages via the discussion forum."
          variant="subtle"
          spotlight
          icon="i-local-message-circle-more"
        />
        <UPageCard
          title="Create Derivative Works"
          description="Write summarized guides, create video scripts, or design educational resources based on the Doctrine (licensed under the same open terms)."
          variant="subtle"
          spotlight
          icon="i-local-git-fork"
        />
        <UPageCard
          title="Review Contributions"
          description="Help maintain quality by reviewing and verifying the accuracy of translations, code, and edits submitted by others."
          variant="subtle"
          spotlight
          icon="i-local-search"
        />
      </template>
    </UPageSection>

    <!-- JOIN -->
    <!-- JOIN -->
    <!-- JOIN -->
    <!-- JOIN -->
    <!-- JOIN -->
    <UPageSection>
      <UPageCTA
        title="The Guided Path"
        description="The Maven Code is the Collective's structured curriculum that turns the Doctrine into actionable understanding. Progress in the initiatory path of Entered, Fellow, and Master Maven by applying the immutable principles of Natural Law to your life."
        :links="ctaJoin"
        spotlight
        class="shadow-md dark:bg-neutral-950"
      >
        <StarsBg />
      </UPageCTA>
    </UPageSection>

    <!-- <ContentRenderer
      v-if="page"
      :value="page"
      :prose="false"
    /> -->
  </div>
</template>
