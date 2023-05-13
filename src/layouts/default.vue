<template>
    <div>
        <Navbar/>
        <div>
            Some default layout shared across all pages
            <slot />
        </div>
        <Footer/>
        <Copyright/>
    </div>
</template>