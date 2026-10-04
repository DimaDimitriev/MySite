<template>
  <main>
    <section class="about">
      <div class="accord-list">
        <button
          v-for="key in keys"
          :key="key"
          type="button"
          class="accord"
          :class="{ active: activeKey === key }"
          :aria-expanded="activeKey === key"
          aria-controls="about-info"
          @click="activeKey = key"
        >
          <span>{{ data[key].title }}</span>
          <span class="arrow" aria-hidden="true"></span>
        </button>
      </div>

      <Transition name="fade" mode="out-in">
        <div :key="activeKey" id="about-info" class="about__info">
          <h2>{{ active.title }}</h2>
          <ul class="about-list">
            <li v-for="(text, index) in active.text" :key="index">{{ text }}</li>
          </ul>
        </div>
      </Transition>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import data from '../data/about.json'

type InfoKey = keyof typeof data

const keys = Object.keys(data) as InfoKey[]
const activeKey = ref<InfoKey>('education') // первый раздел открыт сразу
const active = computed(() => data[activeKey.value])
</script>