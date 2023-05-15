<template>
    <NuxtLoadingIndicator />
    <div class="h-screen flex flex-col">
        <Navbar />
        <div class="flex-grow">
            <slot />
        </div>
        <Footer />
        <Copyright />
    </div>
</template>