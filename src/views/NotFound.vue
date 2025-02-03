<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t, locale } = useI18n({ useScope: 'global' });
const route = useRoute();

if(route.params.locale && typeof route.params.locale === 'string') {
    locale.value = route.params.locale;
}
</script>

<template>
    <div class="nf-container">
        <div class="nf-code">404</div>
        <div class="nf-message">{{ t('This page could not be found.') }}</div>
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables";

.nf-container {
    display: flex;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .nf-code {
        padding: 1vh 2vh 1vh 0;
    }

    .nf-message {
        border-left: 2px solid variables.$txt-highlight-light;
        padding: 1vh 0 1vh 2vh;
    }
}

.dark-theme {
    .nf-container {
        .nf-message {
            border-left: 2px solid variables.$txt-highlight-dark;
        }
    }
}
</style>