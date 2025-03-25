<template>
  <v-sheet color="primary" height="100%">
    <v-carousel
      height="100%"
      :show-arrows="smAndUp"
      :hide-delimiters="smAndUp"
      hide-delimiter-background
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
      <v-carousel-item>
        <div style="padding: 2rem 8rem" class="d-flex fill-height justify-center align-center text-center">
          <div class="text-h4 text-sm-h2">
            Welcome to JSON.ms
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div style="padding: 2rem 8rem" class="d-flex fill-height justify-center align-center text-center">
          <div class="text-h4 text-sm-h2">
            Slide #2
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-sheet>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { smAndUp, smAndDown } = useDisplay();
</script>
