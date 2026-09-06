<template>
  <div class="app">

    <!-- HEADER -->
    <header>
      <p class="logo">
        Димитриев Дмитрий
      </p>

      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">Обо мне</RouterLink>
        <RouterLink to="/portfolio">Портфолио</RouterLink>
      </nav>
    </header>


    <!-- MAIN -->
    <main>

      <section class="hero">

        <!-- Фото -->
        <div class="hero__image">
          <img
            src="../data/photo.png"
            alt="Димитриев Дмитрий"
          >
        </div>


        <!-- Текст -->
        <div class="hero__content">

          <h1 class="hero__title">
            Разработчик, который
            <br>
            превращает вашу идею
            <br>
            в продукт
          </h1>


          <p class="hero__text">
            Я — Димитриев Дмитрий, студент 3 курса
            Томского политехнического университета
            и начинающий веб-разработчик.
          </p>

          <p class="hero__text">
            Создаю современные веб-приложения
            с помощью Vue и React, постоянно развиваю
            свои навыки и превращаю интересные идеи
            в работающие цифровые решения.
          </p>

          <p class="hero__text">
            Владею навыками программирования на Python.
            Могу разработать или доработать макет
            в Figma. Сосредоточен на качественной
            разработке и поддержке.
          </p>


          <!-- Кнопки -->
          <div class="hero__buttons">

            <router-link
              to="/about"
              class="hero__button"
            >
              Обо мне
            </router-link>

            <router-link
              to="/portfolio"
              class="hero__button"
            >
              Мои проекты
            </router-link>

          </div>

        </div>

      </section>

    </main>


    <!-- FOOTER -->
    <footer>
    </footer>

  </div>
</template>

<script setup lang="ts">
</script>