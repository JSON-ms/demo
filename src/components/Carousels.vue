<template>
  <v-sheet :color="slideColor" height="100%" style="transition: background-color 300ms ease-in-out">
    <v-carousel
      v-model="slide"
      :continuous="false"
      :show-arrows="false"
      :hide-delimiters="data.home.presentation.length <= 1"
      hide-delimiter-background
      height="100%"
    >
      <template #prev="{ props }">
        <v-btn v-bind="props" :icon="false" variant="text" height="33vh">
          <v-icon size="64" icon="mdi-chevron-left" />
        </v-btn>
      </template>
      <template #next="{ props }">
        <v-btn v-bind="props" :icon="false" variant="text" height="33vh">
          <v-icon size="64" icon="mdi-chevron-right" />
        </v-btn>
      </template>
      <v-carousel-item
        v-for="presentation in data.home.presentation"
        :key="presentation.hash"
      >
        <div style="max-width: 66%; margin: 0 auto" class="d-flex flex-column fill-height justify-center align-center text-center">
          <div class="text-h5 text-sm-h4 mt-4">
            {{ presentation.title[locale] || 'Undefined' }}
          </div>
          <p v-if="presentation.body[locale]" class="text-body-1 mt-4">
            {{ presentation.body[locale] }} <!-- HANDLE MARKDOWN -->
          </p>
          <template v-if="presentation.cta[locale]">
            <v-btn v-if="slide < data.home.presentation.length - 1" class="mt-6" size="x-large" variant="outlined" @click="onCtaClick">
              {{ presentation.cta[locale] }}
            </v-btn>
            <h1 v-else class="mt-6">
              {{ presentation.cta[locale] }}
            </h1>
          </template>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-sheet>
</template>

<script setup lang="ts">
import { useJsonMs } from '@/plugins/jsonms';

const slide = ref(0);
const { data, locale } = useJsonMs();

const onCtaClick = () => {
  slide.value++;
  if (slide.value >= data.value.home.presentation.length) {
    slide.value = 0;
  }
}

const slideColor = computed((): string => {
  if (!data.value.home.presentation[slide.value]) {
    return 'primary';
  }
  return data.value.home.presentation[slide.value].color || 'primary';
})

watch(() => slide.value, () => {
  if (data.value.home.presentation[slide.value]) {
    window.parent.postMessage({name: 'jsonms', type: 'commands', data: JSON.stringify(data.value.home.presentation[slide.value].commands) }, );
  }
})
</script>
