<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useMainStore } from '@/stores/main';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

const { t } = useI18n();
const { open } = useMainStore();

</script>

<template>
    <AppHeader />
    
    <div class="app-main" v-if="!open">
        <h1 class="main-title">
            {{ t('About me') }}
        </h1>

        <div class="section-title">
            {{ t('Experience') }}
        </div>
        <div class="section-period">
            2022 — 2024
        </div>
        <div class="section-position">
            <a href="https://www.filovent.com/" target="_blank">{{ t('Web developer') }} <i class="bi bi-arrow-up-right"></i></a>
        </div>
        <p class="main-text" v-html="t('work2.exp')"></p>
        <div class="section-labels">
            <div class="item-label">PHP</div>
            <div class="item-label">Laravel</div>
            <div class="item-label">Vue</div>
            <div class="item-label">Javascript</div>
            <div class="item-label">HTML</div>
            <div class="item-label">CSS</div>
            <div class="item-label">Tailwind</div>
            <div class="item-label">Livewire</div>
            <div class="item-label">Alpine</div>
            <div class="item-label">MySQL</div>
            <div class="item-label">Redis</div>
        </div>

        <div class="section-period">
            2019 — 2021
        </div>
        <div class="section-position">
            {{ t('Fullstack developer') }}
        </div>
        <p class="main-text" v-html="t('work1.exp')"></p>
        <div class="section-labels">
            <div class="item-label">C#</div>
            <div class="item-label">ASP.NET</div>
            <div class="item-label">Redis</div>
            <div class="item-label">Javascript</div>
            <div class="item-label">HTML</div>
            <div class="item-label">CSS</div>
            <div class="item-label">Mustache JS</div>
            <div class="item-label">JQuery</div>
            <div class="item-label">Bootstrap</div>
            <div class="item-label">Microsoft SQL Server</div>
            <div class="item-label">RabbitMq</div>
        </div>

        <div class="section-title">
            {{ t('Education') }}
        </div>
        <div class="section-position">
            {{ t('Master\'s degree in Mathematics and Computer Engineering') }}
        </div>
    </div>

    <AppFooter v-if="!open"/>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";

.app-main {
    margin-bottom: calc(3vh + 10px + 75px);

    .main-title {
        margin: 0 20px;
        font-size: 1.6em;

        @media (min-width: variables.$max-mobile-width) {
            margin: 0 40px;
        }
    }

    .section-title {
        margin: 3vh 20px 0;

        @media (min-width: variables.$max-mobile-width) {
            margin: 3vh 40px 0;
        }
    }

    .section-period {
        margin: 3vh 20px 0;
        font-weight: 300;
        font-size: .8em;

        @media (min-width: variables.$max-mobile-width) {
            margin: 3vh 40px 0;
        }
    }

    .section-position {
        margin: .5vh 20px 0;
        font-weight: 600;

        @media (min-width: variables.$max-mobile-width) {
            margin: 1vh 40px 0;
        }

        a {
            color: inherit;
            text-decoration: none;
            display: block;
            position: relative;
            transition: color 100ms ease-in;

            i {
                position: absolute;
                font-size: 0.6em;
                transform: translateX(0.3em) translateY(.57em);
                transition: transform 100ms ease-in;
            }

            &:hover {
                color: variables.$txt-highlight-light;
                i {
                    transform: translateX(0.6em) translateY(0.26em);
                }
            }
        }
    }

    .main-text {
        margin: 1vh 20px 0;
        font-size: .9em;

        @media (min-width: variables.$max-mobile-width) {
            margin: 1vh 40px 0;
        }
    }

    .section-labels {
        margin: 1vh 20px 0;
        font-size: 0.8em;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        font-weight: 300;

        @media (min-width: variables.$max-mobile-width) {
            margin: 1vh 40px 0;
        }

        .item-label {
            border: 1px solid variables.$txt-highlight-light;
            padding: 5px 10px;
            border-radius: 1em;
        }
    }

    .social-media-links {
        margin-top: 40px;
    }
}

.dark-theme {
    .app-main {
        .section-labels {
            .item-label {
                border: 1px solid variables.$txt-highlight-dark;
            }
        }

        .section-position {
            a {
                color: inherit;
                &:hover {
                    color: variables.$txt-highlight-dark;
                }
            }
        }
    }
}

</style>
