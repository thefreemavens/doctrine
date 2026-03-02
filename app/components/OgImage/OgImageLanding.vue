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
          width="138"
          height="138"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g>
            <g style="opacity:1">
              <defs>
                <linearGradient
                  id="a"
                  x1=".5"
                  y1="0"
                  x2=".5"
                  y2="1"
                >
                  <stop
                    offset="0"
                    stop-color="#6342ff"
                  />
                  <stop
                    offset="1"
                    stop-color="#472dc1"
                  />
                </linearGradient>
                <pattern
                  id="b"
                  patternUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <path
                    style="fill:url(#a)"
                    d="M0 0h24v24H0z"
                  />
                </pattern>
              </defs>
              <rect
                rx="2"
                ry="2"
                width="24"
                height="24"
                fill="url(#b)"
              />
            </g>
            <defs>
              <linearGradient
                id="c"
                x1="3250.746"
                y1="610.76"
                x2="3205.794"
                y2="379.499"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-83.926 -6.193)scale(.03015)"
              >
                <stop
                  offset="0"
                  stop-color="#6e6e6e"
                />
                <stop
                  offset="1"
                  stop-color="#fff"
                />
              </linearGradient>
            </defs>
            <path
              d="M11.989 7.372c-.07.002-.12.058-.163.105l-3.297 3.378-3.803-1.644c-.098-.037-.219.044-.22.149-.002.066.034.125.05.187l2.387 6.974c.028.075.113.116.19.106h9.776c.08-.003.147-.072.162-.148l2.417-7.067c.03-.101-.06-.217-.165-.21-.066.004-.122.044-.183.066l-3.67 1.587-3.358-3.44a.17.17 0 0 0-.123-.043m2.39 4.735a1.44 1.44 0 0 0 1.072.433c.22-.005.435-.063.633-.157l.738-.319-.999 2.92H8.176l-1-2.92c.295.127.588.257.884.38.384.147.831.126 1.196-.067.157-.082.296-.195.417-.325l2.326-2.383z"
              style="stop-opacity:1;vector-effect:none;stroke:none;baseline-shift:baseline;overflow:visible;fill:url(#c);display:inline;stop-color:#000"
            />
            <defs>
              <linearGradient
                id="d"
                x1="2955.062"
                y1="751.807"
                x2="3339.766"
                y2="461.912"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-83.926 -6.193)scale(.03015)"
              >
                <stop
                  offset="0"
                  stop-color="#cecece"
                />
                <stop
                  offset=".603"
                  stop-color="#c6c6c6"
                />
                <stop
                  offset="1"
                  stop-color="#fff"
                />
              </linearGradient>
            </defs>
            <path
              d="M12 7.532q-.005 0-.006.002l-3.428 3.512-3.89-1.683q-.005-.002-.008.001-.005.003-.003.008l2.426 7.09.007.005H16.9a.01.01 0 0 0 .008-.006l2.425-7.089q.002-.006-.002-.008-.003-.004-.008-.001l-3.89 1.683-3.428-3.512zm0 1.908 2.494 2.556c.383.392.955.487 1.45.274h0l1.146-.496-1.153 3.37H8.061l-1.152-3.37 1.145.496q0 0 0 0t0 0 0 0 0 0h0a1.3 1.3 0 0 0 1.45-.274l.01-.01Z"
              style="stop-opacity:1;stroke:url(#linearGradient34);baseline-shift:baseline;overflow:visible;fill:url(#d);stroke-width:2.5;stroke-linejoin:round;stroke-dasharray:none;display:inline;stop-color:#000;stroke-linecap:round"
            />
            <defs>
              <linearGradient
                id="e"
                x1="2975.936"
                y1="532.055"
                x2="3323.482"
                y2="730.402"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-83.926 -6.193)scale(.03015)"
              >
                <stop
                  offset="0"
                  stop-color="#fff"
                />
                <stop
                  offset="1"
                  stop-color="#797979"
                  stop-opacity=".796"
                />
              </linearGradient>
            </defs>
            <path
              d="M12 7.462q-.033 0-.056.024L8.55 10.963 4.703 9.3a.08.08 0 0 0-.083.014.08.08 0 0 0-.02.082l2.425 7.089c.01.031.04.052.073.052h9.803a.08.08 0 0 0 .073-.052l2.425-7.09c.01-.03 0-.062-.02-.08a.08.08 0 0 0-.084-.015l-3.846 1.664-3.394-3.477a.08.08 0 0 0-.056-.024m0 .07.005.002 3.428 3.512 3.89-1.683q.006-.002.008.001.005.003.002.008l-2.425 7.09a.01.01 0 0 1-.008.005H7.098a.01.01 0 0 1-.007-.006l-2.426-7.09q-.002-.006.003-.008.002-.004.008-.001l3.89 1.683 3.428-3.512zm0 1.908-2.485 2.546-.01.01a1.3 1.3 0 0 1-1.45.274h-.001l-1.145-.496 1.152 3.37h7.876l1.153-3.37-1.145.496a1.29 1.29 0 0 1-1.451-.274Zm0 .1 2.444 2.504a1.36 1.36 0 0 0 1.528.29l.021-.01.98-.424-1.085 3.174H8.11L7.025 11.9l.995.431.006.003a1.37 1.37 0 0 0 1.516-.279h.002Z"
              style="stop-opacity:1;vector-effect:none;stroke:none;baseline-shift:baseline;overflow:visible;fill:url(#e);display:inline;stop-color:#000"
            />
          </g>
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
