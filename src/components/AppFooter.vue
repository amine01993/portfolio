<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import SocialMedia from './SocialMedia.vue';
const { t } = useI18n();

</script>

<template>
    <div class="main-footer">
        <SocialMedia />
        <div class="footer-lower" v-html="t('Loosely designed in {figma} and coded in {vscode} by yours truly. Built with {vue} and {bootstrap}.', { 
            figma: '<a href=\'https://www.figma.com\' target=\'_blank\'>Figma</a>', 
            vscode: '<a href=\'https://code.visualstudio.com\' target=\'_blank\'>VS Code</a>', 
            vue: '<a href=\'https://vuejs.org\' target=\'_blank\'>Vue</a>', 
            bootstrap: '<a href=\'https://getbootstrap.com\' target=\'_blank\'>Bootstrap</a>' 
        })"></div>
    </div>
</template>

<style lang="scss">
</style>