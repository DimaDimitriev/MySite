<template>
  <div class="app">

    <!-- HEADER -->
    <header>
      <p class="logo">
        Димитриев Дмитрий
      </p>

      <p>
        
      </p>
    
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">Обо мне</RouterLink>
        <RouterLink to="/portfolio">Портфолио</RouterLink>
      </nav>
    </header>

    <!-- MAIN -->
    <main>
      <section class="project-panel">
          <div
              class="project-card"
              v-for="project in Projects"
              :key="project.id"
          >
              <div class="project-image">
                <img :src="getImageUrl(project.image)" :alt="project.title">
              </div>

              <div class="project-footer">
                  <span>{{ project.title }}</span>

                  <a
                      :href="project.link"
                      target="_blank"
                      class="project-arrow"
                  >
                      →
                  </a>
              </div>
          </div>
      </section>
    </main>

    <footer></footer>

    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Projects from '../data/projects.json'


    const selectedId = ref(0)
    const selectedDescription = ref('')
    const selectedTitle = ref('')
    const selectedImage = ref('')
    const selectedLink = ref('')

    function openProject(type: keyof typeof Projects){
        selectedId.value = Projects[type].id
        selectedDescription.value = Projects[type].description
        selectedImage.value = Projects[type].image
        selectedTitle.value = Projects[type].title
        selectedLink.value = Projects[type].link
    }

    const getImageUrl = (fileName: string): string => {
    return new URL(`../data/${fileName}`, import.meta.url).href;
    };
</script>