<script setup lang="ts">
const appConfig = useAppConfig()

interface SocialConfig {
  socials?: Record<string, string>
  github?: {
    url?: string
  }
}

interface LinkItem {
  'icon': string
  'to': string
  'target'?: string
  'aria-label'?: string
}

const typedConfig = appConfig as SocialConfig

const links = computed<LinkItem[]>(() => [
  ...Object.entries(typedConfig.socials || {}).map(([key, url]): LinkItem => ({
    'icon': `i-local-${key}`,
    'to': url,
    'target': '_blank',
    'aria-label': `${key} social link`,
  })),
  ...(typedConfig.github?.url
    ? [{
        'icon': 'i-local-github',
        'to': typedConfig.github.url,
        'target': '_blank',
        'aria-label': 'GitHub repository',
      } as LinkItem]
    : []),
])
</script>

<template>
  <template v-if="links.length">
    <UButton
      v-for="(link, index) of links"
      :key="index"
      size="md"
      :icon="link.icon"
      :to="link.to"
      :target="link.target"
      :aria-label="link['aria-label']"
      color="neutral"
      variant="ghost"
    />
  </template>
  <UColorModeButton size="md" />
</template>
