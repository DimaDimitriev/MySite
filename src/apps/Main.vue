<template>
  <main>
    <section class="hero">
      <div class="hero__image">
        <img src="../data/photo.png" alt="Димитриев Дмитрий">
      </div>

      <div class="hero__content">
        <p class="hero__status">Ищу стажировку и первый коммерческий опыт</p>

        <h1 class="hero__title">
          Разработчик, который<br>превращает вашу идею<br>в продукт
        </h1>

        <p class="hero__text">
          Я — Димитриев Дмитрий, студент 3 курса Томского политехнического
          университета и начинающий веб-разработчик.
        </p>
        <p class="hero__text">
          Создаю веб-приложения на Vue и React, пишу на Python и проектирую
          макеты в Figma. Мои пет-проекты — на GitHub.
        </p>

        <div class="hero__buttons">
          <RouterLink to="/portfolio" class="hero__button">Мои проекты</RouterLink>
          <RouterLink to="/about" class="hero__button">Обо мне</RouterLink>
        </div>
      </div>
    </section>

    <section class="skills" id="skills">
      <h2 class="section-title">Навыки</h2>

      <div class="skills__grid">
        <article
          v-for="group in skills"
          :key="group.title"
          class="skills__group"
          :class="{ 'skills__group--learning': group.learning }"
        >
          <h3>{{ group.title }}</h3>
          <ul class="chips">
            <li v-for="item in group.items" :key="item" class="chip">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import skills from '../data/skills.json'
</script>