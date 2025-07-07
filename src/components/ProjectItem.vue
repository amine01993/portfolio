<script setup lang="ts">
import { useMainStore } from '@/stores/main'
import { computed } from 'vue'

const { theme } = useMainStore()
const { project } = defineProps<{
    project: {
        title: string
        description: string
        imgSrc: string
        imgSrcDark?: string
        alt: string
        techStack: string[]
        links: {
            github: string
            githubIcon: string
            live: string
            liveIcon: string
        }
    }
}>()

const imgSrc = computed(() =>
    theme.value === 'dark' && project.imgSrcDark ? project.imgSrcDark : project.imgSrc,
)
</script>

<template>
    <div class="project">
        <div class="img">
            <img :src="imgSrc" :alt="project.alt" />
        </div>
        <div class="title">
            {{ project.title }}
        </div>
        <div class="description">
            {{ project.description }}
        </div>
        <div class="tech-stack">
            <div class="item" v-for="tech in project.techStack" :key="tech">{{ tech }}</div>
        </div>
        <div class="links">
            <a :href="project.links.github" target="_blank"
                ><i :class="project.links.githubIcon"></i
            ></a>
            <a :href="project.links.live" target="_blank"
                ><i :class="project.links.liveIcon"></i
            ></a>
        </div>
    </div>
</template>
