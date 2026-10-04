<template>
  <main>
    <section class="project-panel">
      <a
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="project-image">
          <img :src="getImageUrl(project.image)" :alt="project.title" loading="lazy">
        </div>

        <div class="project-body">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <ul class="chips">
            <li v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</li>
          </ul>
        </div>

        <div class="project-footer">
          <span>Смотреть код на GitHub</span>
          <span class="project-arrow" aria-hidden="true">→</span>
        </div>
      </a>
    </section>
  </main>
</template>

<script setup lang="ts">
import projectsData from '../data/projects.json'

const projects = Object.values(projectsData)

const getImageUrl = (fileName: string): string =>
  new URL(`../data/${fileName}`, import.meta.url).href
</script>