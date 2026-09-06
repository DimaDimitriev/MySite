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
        <section class="about">

            <div class="accord-list">

                <div
                v-for="(item, key) in Data"
                :key="key"
                class="accord"
                >
                <span>{{ item.title }}</span>

                <span
                    class="arrow"
                    @click="openInfo(key)"
                ></span>
                </div>

            </div>

            <div v-if="selectedInfo.length" class="about__info">

                <h2>{{ selectedTitle }}</h2>

                <ul class="about-list">
                <li
                    v-for="(text, index) in selectedInfo"
                    :key="index"
                >
                    {{ text }}
                </li>
                </ul>

            </div>

        </section>

    </main>

    <footer></footer>

    </div>
</template>

<script setup lang="ts">

    import { ref } from 'vue'
    import Data from '../data/about.json'

    type InfoKey = keyof typeof Data

    const selectedInfo = ref<string[]>([])
    const selectedTitle = ref('')

    function openInfo(type: InfoKey) {
    selectedInfo.value = Data[type].text
    selectedTitle.value = Data[type].title
    }

</script>