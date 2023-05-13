<template>
    <b-carousel id="carousel-1" controls indicators background="#ababab" img-width="1024" img-height="480"
        style="text-shadow: 1px 1px 2px #333;">
        <div v-for="image in images">
            <b-carousel-slide>
                <template #img>
                    <img class="d-block img-fluid w-100" width="1024" height="480"
                        :src="require(`@/${image}`)" alt="image slot">
                </template>
            </b-carousel-slide>
        </div>
    </b-carousel>
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
            ]
        };
    }
};
</script>
  