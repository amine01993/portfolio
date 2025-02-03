<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const {t} = useI18n();
</script>

<template>
    <div class="project">
        <div class="img">
            <img src="@/assets/projects/test-builder-img.webp" :alt="t('Test Builder Screenshot')" />
        </div>
        <div class="title">
            {{ t('Test Builder') }}
        </div>
        <div class="description">
            {{ t('test-builder.description') }}
        </div>
        <div class="tech-stack">
            <div class="item">Vite</div>
            <div class="item">Vue</div>
            <div class="item">Pinia</div>
            <div class="item">Bootstrap</div>
            <div class="item">Firebase</div>
            <div class="item">Firestore</div>
            <div class="item">Cloud Functions</div>
            <div class="item">Express</div>
            <div class="item">HTML</div>
            <div class="item">CSS</div>
            <div class="item">SCSS</div>
            <div class="item">Javascript</div>
            <div class="item">Typescript</div>
        </div>
        <div class="links">
            <a href="https://github.com/amine01993/test-builder-vue" target="_blank"><i class="bi bi-github"></i></a>
        </div>
    </div>
</template>
