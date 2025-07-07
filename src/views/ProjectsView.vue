<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMainStore } from '@/stores/main'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ProjectItem from '@/components/ProjectItem.vue'

const { t } = useI18n()
const { open } = useMainStore()

const projectList = computed(() => [
    {
        title: t('Jigsaw Puzzle'),
        description: t('jigsaw-puzzle.description'),
        imgSrc: new URL(`@/assets/projects/jigsaw-puzzle-img.webp`, import.meta.url).toString(),
        imgSrcDark: new URL(
            `@/assets/projects/jigsaw-puzzle-img-dark.webp`,
            import.meta.url,
        ).toString(),
        alt: t('Jigsaw Puzzle Screenshot'),
        techStack: [
            'Typescript',
            'React',
            'HTML',
            'CSS',
            'Tailwind CSS',
            'Motion',
            'React DnD',
            'React Icons',
            'Canvas',
            'Web Workers',
            'React Router',
        ],
        links: {
            github: 'https://github.com/amine01993/jigsaw',
            githubIcon: 'bi bi-github',
            live: 'https://jigsaw-two.vercel.app/',
            liveIcon: 'bi bi-globe2',
        },
    },
    {
        title: t('Test Builder'),
        description: t('test-builder.description'),
        imgSrc: new URL(`@/assets/projects/test-builder-img.webp`, import.meta.url).toString(),
        alt: t('Test Builder Screenshot'),
        techStack: [
            'Vite',
            'Vue',
            'Pinia',
            'Bootstrap',
            'Firebase',
            'Firestore',
            'Cloud Functions',
            'Express',
            'HTML',
            'CSS',
            'SCSS',
            'Javascript',
            'Typescript',
        ],
        links: {
            github: 'https://github.com/amine01993/test-builder-vue',
            githubIcon: 'bi bi-github',
            live: 'https://test-builder-api.web.app/',
            liveIcon: 'bi bi-globe2',
        },
    },
])
</script>

<template>
    <AppHeader />

    <div class="app-main" v-if="!open">
        <h1 class="main-title">
            {{ t('Projects') }}
        </h1>

        <div class="project-list">
            <ProjectItem v-for="project in projectList" :key="project.title" :project="project" />
        </div>
    </div>

    <AppFooter v-if="!open" />
</template>

<style lang="scss" scoped>
@use 'sass:string';
@use '@/assets/variables' as vars;

.app-main {
    margin-bottom: calc(3vh + 10px + 75px);

    .main-title {
        margin: 0 20px;
        font-size: 1.6em;

        @media (min-width: vars.$max-mobile-width) {
            margin: 0 40px;
        }
    }

    .project-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 50px;
        margin-top: 10vh;

        :deep(.project) {
            display: flex;
            flex-direction: column;
            gap: 2vh;
            box-shadow: string.unquote(vars.$txt-highlight-light + '1f') 0px 0px 1rem 1rem;
            padding: 2vh;
            border-radius: 1rem;

            .img {
                overflow: hidden;
                border-radius: 1rem;

                img {
                    width: 100%;
                    transition: transform 200ms;

                    &:hover {
                        transform: scale(1.2);
                    }
                }
            }

            .title {
                font-weight: 600;
                font-size: 1.3em;
            }

            .description {
                font-size: 0.9em;
            }

            .tech-stack {
                font-size: 0.8em;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                font-weight: 300;

                .item {
                    border: 1px solid vars.$txt-highlight-light;
                    padding: 5px 10px;
                    border-radius: 1em;
                }
            }

            .links {
                display: flex;
                gap: 10px;

                a {
                    color: vars.$txt-color-light;
                    font-size: 1.2em;
                    padding: 5px;
                }
            }
        }
    }

    .social-media-links {
        margin-top: 40px;
    }
}

.dark-theme {
    .app-main {
        .project-list {
            :deep(.project) {
                box-shadow: string.unquote(vars.$txt-highlight-dark + '1f') 0px 0px 1rem 1rem;

                .tech-stack {
                    .item {
                        border: 1px solid vars.$txt-highlight-dark;
                    }
                }

                .links {
                    a {
                        color: vars.$txt-color-dark;
                    }
                }
            }
        }
    }
}
</style>
