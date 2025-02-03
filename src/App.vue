<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useMainStore } from '@/stores/main';
import { onMounted, onUnmounted, ref } from 'vue';

const { updateThemeClass } = useMainStore();

updateThemeClass();

const appElem = document.getElementById('app');
const customCursorElem = ref<HTMLDivElement|null>(null);
const mousemoveEvent = (event: MouseEvent) => {
    const dims = appElem?.getBoundingClientRect();
    if(dims && customCursorElem.value) {
        const x = event.clientX;
        const y = -dims.top - window.scrollY + event.clientY;
        customCursorElem.value.style.transform = `translate(calc(${x}px - 20vh),calc(${y}px - 20vh))`
    }
};

onMounted(() => {
    window.addEventListener('mousemove', mousemoveEvent);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', mousemoveEvent);
});

</script>

<template>
    <div class="custom-cursor-pointer" ref="customCursorElem"></div>
    <RouterView />
</template>

