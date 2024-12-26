<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import SocialMedia from '../components/SocialMedia.vue';
import AppHeader from '../components/AppHeader.vue';
import { useMainStore } from '@/stores/main';

const { t, locale } = useI18n({ useScope: 'global' });
const { open } = useMainStore();

</script>

<template>
  <AppHeader />
  
  <div class="app-main home-page" v-if="!open">
    <h1 class="main-title">
      {{ t('I am {fullname}', { fullname: 'Amine Errafii' }) }}
    </h1>

    <p class="main-text">
      {{ t('home.description') }}
    </p>

    <div class="about-link">
      <RouterLink class="app-link" :to="{name: 'about', params: {locale: locale === 'en' ? '' : locale}}">{{ t('See more') }}</RouterLink>
    </div>

    <SocialMedia />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";

.app-main {
    margin-top: 10vh;

    .main-title {
        margin: 0 20px;
        font-size: 1.6em;

        @media (min-width: variables.$max-mobile-width) {
            margin: 0 40px;
        }
    }

    .main-text {
        margin: 3vh 20px 0;

        @media (min-width: variables.$max-mobile-width) {
            margin: 3vh 40px 0;
        }
    }

    .about-link {
        margin: 3vh 20px;

        @media (min-width: variables.$max-mobile-width) {
            margin: 3vh 40px;
        }
    }
}
</style>
