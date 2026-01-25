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
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png'
})

const links = ref<ButtonProps[]>([
  {
    label: 'Read the Doctrine',
    to: '/getting-started',
    icon: 'i-local-arrow-right'
  },
  {
    label: 'View Contribution Guide',
    to: '/getting-started/usage',
    color: 'neutral',
    variant: 'subtle',
    icon: 'i-simple-icons-github'
  }
])

const ctaLearn = ref<ButtonProps[]>([
  {
    label: 'Explore the Open Doctrine',
    to: '/getting-started/usage',
    trailingIcon: 'i-local-arrow-right',
    variant: 'solid'
  }
])

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
    <!-- HERO -->
    <!-- HERO -->
    <!-- HERO -->
    <!-- HERO -->
    <!-- HERO -->
    <UPageHero
      :links="links"
      class="relative"
      orientation="horizontal"
    >
      <template #title>
        <h1>
          The <span class="text-primary">Doctrine</span> is Open.
        </h1>
      </template>

      <template #description>
        <p>The complete, structured, and immutable body of Natural Law knowledge. Learn, translate, and contribute to the source code of sovereignty.</p>
      </template>

      <template #top>
        <HeroBackground class="-z-50" />
      </template>

      <NuxtLink to="/getting-started">
        <UPageCard
          class="size-64 sm:size-72 md:size-80 lg:size-96 xl:size-112 aspect-square mx-auto rounded-2xl p-8 group relative"
          variant="ghost"
          spotlight
        >
          <AppSeed class="mx-auto group-hover:stroke-12 transition-all duration-6666 ease-out group-hover:duration-2000 text-primary group-hover:text-primary" />
        </UPageCard>
      </NuxtLink>
    </UPageHero>

    <!-- LEARN -->
    <!-- LEARN -->
    <!-- LEARN -->
    <!-- LEARN -->
    <!-- LEARN -->
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

    <!-- COMMIT -->
    <!-- COMMIT -->
    <!-- COMMIT -->
    <!-- COMMIT -->
    <!-- COMMIT -->
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

<style lang="css" scoped>
@keyframes solSeed {
  from {
    transform: translateY(300px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 0.13;
  }
}

@keyframes solSeedReverse {
  from {
    transform: translateY(-300px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 0.23;
  }
}
/* animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state]; */
.animateSolSeed {
  animation: solSeed 10s ease-in-out infinite alternate;
}

.animateSolSeedReverse {
  animation: solSeedReverse 16.2s ease-in-out infinite alternate;
}
</style>
