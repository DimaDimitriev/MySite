<template>
  <div class="page">
    <!-- Шапка и подвал теперь общие для всех страниц -->
    <header>
      <RouterLink to="/" class="logo">Димитриев Дмитрий</RouterLink>

      <nav aria-label="Основное меню">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">Обо мне</RouterLink>
        <RouterLink to="/portfolio">Портфолио</RouterLink>
      </nav>
    </header>

    <div class="page__content">
      <RouterView />
    </div>

    <footer>
      <p>© 2026 Димитриев Дмитрий · студент ТПУ, ИШИТР</p>
      <a href="https://github.com/DimaDimitriev" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import './styles/Header.css'
</script>