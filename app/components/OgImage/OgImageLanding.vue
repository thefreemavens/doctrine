<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{ title?: string, description?: string, headline?: string }>(), {
  title: 'title',
  description: 'description',
})

const title = computed(() => (props.title || '').slice(0, 60))
const description = computed(() => (props.description || '').slice(0, 200))
</script>

<template>
  <div class="w-full h-full flex items-center justify-center bg-neutral-900">
    <svg
      class="absolute right-0 top-0 opacity-50"
      width="629"
      height="593"
      viewBox="0 0 629 593"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    ><g filter="url(#a)"><path
      d="m628.5-578 10.834 483.578 167.264-453.859L659.827-87.387l305.569-374.957L676.925-74.079 1087.69-329.5 688.776-55.94l471.444-108.209L694.095-34.935l481.035 50.73-482.824-29.137L1130.8 190.83 683.602 6.5l348.438 335.49L668.927 22.441l220.63 430.45L649.872 32.754l68.908 478.765L628.5 36.32l-90.28 475.199 68.908-478.765L367.443 452.89l220.63-430.45-363.118 319.55L573.398 6.5l-447.2 184.33L564.694-13.342 81.874 15.795l481.031-50.73L96.784-164.15l471.44 108.21-398.91-273.562L580.075-74.079 291.604-462.344 597.173-87.387 450.402-548.281 617.666-94.422z"
      fill="#6342ff"
    /></g><defs><filter
      id="a"
      x=".874"
      y="-659"
      width="1255.25"
      height="1251.52"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    ><feFlood
      flood-opacity="0"
      result="BackgroundImageFix"
    /><feBlend
      in="SourceGraphic"
      in2="BackgroundImageFix"
      result="shape"
    /><feGaussianBlur
      stdDeviation="40.5"
      result="effect1_foregroundBlur_199_94966"
    /></filter></defs></svg>

    <div class="flex flex-col justify-center p-8">
      <div class="flex justify-center mb-12 w-36 h-36 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="138px"
          height="138px"
        >
          <defs>
            <linearGradient
              id="a"
              x1="-162.431"
              y1="1937.9"
              x2="-162.431"
              y2="837.058"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(15.474 -17.673)scale(.02139)"
            >
              <stop
                offset="0"
                stop-color="#321e9f"
              />
              <stop
                offset="1"
                stop-color="#6342ff"
              />
            </linearGradient>
          </defs>
          <rect
            rx="5.251"
            ry="5.251"
            x=".25"
            y=".25"
            width="23.5"
            height="23.5"
            fill="none"
            style="stroke:none;fill:url(#a);paint-order:stroke fill markers;fill-opacity:1;stroke-width:2;stroke-linejoin:round;display:inline;stroke-linecap:round"
          />
          <defs>
            <linearGradient
              id="b"
              x1="-162.431"
              y1="837.058"
              x2="-162.431"
              y2="1937.9"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(15.474 -17.673)scale(.02139)"
            >
              <stop
                offset="0"
                stop-color="#7575e7"
              />
              <stop
                offset=".298"
                stop-color="#3c3d6f"
              />
              <stop
                offset=".543"
                stop-color="#252042"
              />
            </linearGradient>
          </defs>
          <rect
            rx="5.251"
            ry="5.251"
            x=".25"
            y=".25"
            width="23.5"
            height="23.5"
            fill="none"
            style="stroke:url(#b);fill:none;paint-order:stroke fill markers;fill-opacity:1;stroke-width:.33;display:inline;stroke-linecap:round"
          />
          <defs>
            <linearGradient
              id="d"
              x1="470.066"
              y1="-656.684"
              x2="454.613"
              y2="-1099.207"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-1.908 38.41)scale(.03008)"
            >
              <stop
                offset="0"
                stop-opacity=".949"
              />
              <stop
                offset=".747"
                stop-color="#e6e6e6"
              />
            </linearGradient>
          </defs>
          <path
            d="M17.512 7.35c-.069.002-.12.052-.178.081L12 10.51Q9.273 8.935 6.545 7.362c-.058-.028-.123-.002-.172.032l-.976.565c-.054.038-.06.11-.056.17v1.123c.008.064.066.105.12.13l6.482 3.742c.058.028.124.003.172-.032l4.698-2.713v6.157c.01.07.084.119.151.113.046-.008.08-.042.12-.06l1.521-.88c.05-.038.059-.107.054-.166V8.057c-.006-.065-.062-.109-.116-.134l-.98-.564a.1.1 0 0 0-.051-.01M5.469 10.587a.16.16 0 0 0-.108.06c-.032.048-.016.107-.02.16v4.806c.004.065.061.109.116.134l1.554.896c.064.023.141-.014.17-.075.015-.044.004-.091.007-.137v-2.933l2.058 1.188c.06.026.125-.005.174-.039l1.382-.798c.053-.045.059-.133.018-.187-.031-.035-.078-.049-.115-.074l-5.183-2.993a.1.1 0 0 0-.053-.008"
            fill="none"
            style="stroke-opacity:1;stroke:none;fill:url(#d);stroke-width:1.40659;display:inline;stroke-linecap:round"
          />
          <defs>
            <linearGradient
              id="e"
              x1="247.135"
              y1="-843.781"
              x2="677.511"
              y2="-911.946"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-1.908 38.41)scale(.03008)"
            >
              <stop
                offset="0"
                stop-color="#bbb"
              />
              <stop
                offset=".07"
                stop-color="#acacac"
              />
              <stop
                offset="1"
                stop-color="#efefef"
              />
            </linearGradient>
          </defs>
          <path
            d="m17.511 7.467-5.51 3.182-5.514-3.182-1.025.592v1.185L12 13.019l4.934-2.848v6.365l1.604-.927V8.06Zm-12.05 3.232v4.911l1.607.928V13.29l2.231 1.288 1.44-.831Z"
            fill="none"
            style="stroke:url(#radialGradient79);fill:url(#e);fill-opacity:1;stroke-width:7.6848;display:inline;stroke-linecap:round"
          />
        </svg>
      </div>
      <h1
        v-if="title"
        class="flex justify-center m-0 text-5xl font-semibold mb-4 text-white"
      >
        <span>{{ title }}</span>
      </h1>
      <p
        v-if="description"
        class="text-center text-2xl text-neutral-300 leading-tight"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
