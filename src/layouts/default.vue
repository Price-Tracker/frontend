<template>
    <NuxtLoadingIndicator throttle=1000 />
    <div class="h-screen flex flex-col">
        <Navbar />
        <div class="flex-grow">
            <slot />
        </div>
        <Footer />
        <Copyright />
    </div>
</template>

<script setup>
useHead({
    titleTemplate: (titleChunk) => {
        const defaultTitle = "PriceTracker"
        return titleChunk ? `${titleChunk} | ${defaultTitle}` : defaultTitle;
    },
});
</script>