<script setup lang="ts">
const linkedinUrl = 'https://www.linkedin.com/in/amine-errafii-a575019b/';
const githubUrl = 'https://github.com/amine01993';
</script>

<template>
    <div class="social-media-links">
        <div class="media-item">
            <a :href="linkedinUrl" target="_blank">
                <i class="bi bi-linkedin"></i>
            </a>
        </div>
        <div class="media-item">
            <a :href="githubUrl" target="_blank">
                <i class="bi bi-github"></i>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
@use "@/assets/social-media";
</style>