<template>
    <div 
    class="h-screen bg-themeBackground p-5 text-themeText" 
    :class="{
      'theme-light': !darkMode,
      'theme-dark': darkMode,
    }">
        <Header/>
        <slot/>
    </div>
</template>

<script setup lang="ts">
import { useState } from '#app';
import { onMounted, watch } from '@vue/runtime-core';

type Theme = 'light' | 'dark';

const LOCAL_STORAGE_THEME_KEY = 'theme';

const darkMode = useState('theme', () => false);

const setTheme = (newTheme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  darkMode.value = newTheme === 'dark';
};

onMounted(() => {
  const isDarkModePreferred = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const themeFromLocalStorage = localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY
  ) as Theme;

  if (themeFromLocalStorage) {
    setTheme(themeFromLocalStorage);
  } else {
    setTheme(isDarkModePreferred ? 'dark' : 'light');
  }
});

watch(darkMode, selected => {
  setTheme(selected ? 'dark' : 'light');
});
</script>

<style src="@vueform/toggle/themes/default.css"></style>