<template>
    <section class="py-1">
        <div class="container-full">
            <div class="slider">
                <div v-for="(image, index) in images" :key="index" class="item" :class="{ active: activeIndex === index }">
                    <g-image :src="require(`@/${image}`)" />
                </div>
                <a class="previous" @click="previousSlide">&#10094;</a>
                <a class="next" @click="nextSlide">&#10095;</a>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: "ImageSlider",
    data() {
        return {
            images: [
                "assets/images/demo/healty-food.jpg",
                "assets/images/demo/beverages.jpg",
                "assets/images/demo/seafood.jpg",
            ],
            activeIndex: 0,
        };
    },
    methods: {
        previousSlide() {
            if (this.activeIndex === 0) {
                this.activeIndex = this.images.length - 1;
            } else {
                this.activeIndex--;
            }
        },
        nextSlide() {
            if (this.activeIndex === this.images.length - 1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
    },
};
</script>
  
<style>
.item {
    display: none;
}

.item.active {
    display: block;
}

.slider {
    max-width: 90%;
    position: relative;
    margin: auto;
    height: 300px;
}

.slider .item img {
    object-fit: cover;
    width: 100%;
    height: 300px;
}

.slider .previous,
.slider .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
}

.slider .next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.slider .previous:hover,
.slider .next:hover {
    background-color: rgba(0, 0, 0, 0.2);
}

.slider .item {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {
        opacity: 0.4
    }

    to {
        opacity: 1
    }
}

</style>
  