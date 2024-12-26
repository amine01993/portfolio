<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useMainStore } from '@/stores/main';

const { updateThemeClass } = useMainStore();

updateThemeClass();

</script>

<template>
    <RouterView />
</template>

