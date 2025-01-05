<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AppHeader from '../components/AppHeader.vue';
import { useMainStore } from '@/stores/main';
import AppFooter from '@/components/AppFooter.vue';

const { t } = useI18n();
const { open } = useMainStore();

</script>

<template>
    <AppHeader />

    <div class="app-main" v-if="!open">
        <h1 class="main-title">
            {{ t('Contact') }}
        </h1>

        <p class="main-text" v-html="t('Email directly to {email}', { email: '<a class=\'app-link\' href=\'mailto:err.amine93@gmail.com\'>err.amine93@gmail.com</a>' })"></p>
    </div>

    <AppFooter v-if="!open" />
</template>

<style lang="scss" scoped>
@use "@/assets/variables";

.app-main {
    
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

    .social-media-links {
        margin-top: 40px;
    }
}
</style>
