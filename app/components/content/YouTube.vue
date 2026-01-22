<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'

// Define an interface for the ScriptYouTubePlayer component instance
interface YouTubePlayerComponent extends ComponentPublicInstance {
  player: {
    playVideo: () => Promise<void>
    // Add other methods you might use
    pauseVideo?: () => void
    stopVideo?: () => void
    seekTo?: (seconds: number) => void
  }
}

const props = defineProps<{
  id: string
  posterUrl?: string
  time?: number | undefined
}>()

const isLoaded = ref(false)
const isPlaying = ref(false)

// Store component instances in a ref
const videoInstances = ref<Map<string, YouTubePlayerComponent>>(new Map())

// Get the component instance for this video
const video = computed(() => {
  return videoInstances.value.get(props.id)
})

// Function to set the component instance - handles all ref types
const setVideoRef = (el: Element | ComponentPublicInstance | null) => {
  if (el && 'player' in el) {
    videoInstances.value.set(props.id, el as YouTubePlayerComponent)
  }
}

async function play() {
  if (video.value?.player) {
    await video.value.player.playVideo()
  }
}

function stateChange(event: { data: number }) {
  isPlaying.value = event.data === 1
}

const defaultPoster = '/img/content/yt-poster.png'
</script>

<template>
  <div>
    <div class="flex items-center justify-center">
      <ScriptYouTubePlayer
        :ref="setVideoRef"
        :video-id="id"
        :player-vars="{
          start: time
        }"
        @ready="isLoaded = true"
        @state-change="stateChange"
      >
        <template #awaitingLoad>
          <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
            <svg
              height="100%"
              version="1.1"
              viewBox="0 0 68 48"
              width="100%"
            >
              <path
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#f00"
              />
              <path
                d="M 45,24 27,14 27,34"
                fill="#fff"
              />
            </svg>
          </div>
        </template>
        <template #placeholder>
          <img
            :src="posterUrl || defaultPoster"
            alt="Video Placeholder"
          >
        </template>
      </ScriptYouTubePlayer>
    </div>
    <div class="text-center">
      <UButton
        v-if="isLoaded && !isPlaying"
        class="my-5"
        @click="play"
      >
        Play Video
      </UButton>
    </div>
  </div>
</template>
