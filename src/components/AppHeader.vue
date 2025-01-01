<script setup lang="ts">
import { computed, watch } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useMainStore } from '@/stores/main';

const { t, locale } = useI18n({ useScope: 'global' });
const { open, openMenu, closeMenu, theme, toggleTheme, toggleLocale } = useMainStore();
const router = useRouter();
const route = useRoute();
const title = computed(() => 'Amine Errafii | ' + t('Web developer'));

watch(title, () => {
    document.title = title.value
});

function updateLocale() {
    toggleLocale(locale, router, route);
}

if(route.params.locale && typeof route.params.locale === 'string') {
    locale.value = route.params.locale;
}

</script>
<template>
    <div class="app-header" :class="{'open': open}">
        <div class="logo">
            <RouterLink :to="{name: 'home', params: {locale: locale === 'en' ? '' : locale}}" @click="closeMenu">
                <img src="@/assets/portfolio-logo.svg" v-if="theme === 'light'">
                <img src="@/assets/portfolio-logo-dark.svg" v-else>
            </RouterLink>
        </div>
        <div class="menu">
            <div class="menu-item">
                <RouterLink exactActiveClass="highlighted" :to="{name: 'home', params: {locale: locale === 'en' ? '' : locale}}" @click="closeMenu">{{ t('Home') }}</RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink exactActiveClass="highlighted" :to="{name: 'about', params: {locale: locale === 'en' ? '' : locale}}" @click="closeMenu">{{ t('About') }}</RouterLink>
            </div>
            <!-- <div class="menu-item">
                {{ t('Projects') }}
            </div> -->
            <div class="menu-item">
                <RouterLink exactActiveClass="highlighted" :to="{name: 'contact', params: {locale: locale === 'en' ? '' : locale}}" @click="closeMenu">{{ t('Contact') }}</RouterLink>
            </div>
            <div class="menu-item">
                <div class="locale" @click="updateLocale">
                    {{ locale === 'en' ? 'EN' : 'FR' }}
                </div>
            </div>
            <div class="menu-item">
                <!-- Themes -->
                <div class="theme" @click="toggleTheme">
                    <i class="bi bi-sun" v-if="theme === 'light'"></i>
                    <i class="bi bi-moon" v-else></i>
                </div>
            </div>
        </div>
        <div class="close-menu" @click="closeMenu">
            <i class="bi bi-x-lg"></i>
        </div>
        <div class="open-menu" @click="openMenu">
            <i class="bi bi-list"></i>
        </div>
    </div>
</template>