import { computed, ref, type WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { RouteLocationNormalizedLoadedGeneric, Router } from 'vue-router';

export const useMainStore = defineStore('main', () => {
    const open = ref(false);
    const theme = ref(getTheme()); // persist

    function openMenu() {
        open.value = true;
    }

    function closeMenu() {
        open.value = false;
    }

    function getTheme() {
        const theme = localStorage.getItem('website-theme');
        if(theme) return theme;
        return 'light';
    }

    function updateThemeClass() {
        if(theme.value === 'light') {
            document.body.classList.remove('dark-theme');
        }
        else {
            document.body.classList.add('dark-theme');
        }
    }

    function toggleTheme() {
        if(theme.value === 'light') {
            theme.value = 'dark';
        }
        else {
            theme.value = 'light';
        }
        updateThemeClass();
        localStorage.setItem('website-theme', theme.value);
    }

    function toggleLocale(locale: WritableComputedRef<string, string>, router: Router, route: RouteLocationNormalizedLoadedGeneric) {
        if(locale.value === 'en') locale.value = 'fr';
        else locale.value = 'en';
        const _locale = locale.value === 'en' ? '' : 'fr';
        console.log('toggleLocale', _locale);
        router.push({ name: route.name, params: {locale: _locale} });
    }

    return { 
        open: computed(() => open), openMenu, closeMenu,
        theme: computed(() => theme), updateThemeClass, toggleTheme,
        toggleLocale,
    }
})
