<template>
  <Layout>

    <!-- carousel -->
    <image-slider />

    <!-- popular products -->
    <section class="pb-0">
      <div class="container">
        <div class="row align-items-end">
          <div class="col-sm-8 col-md-6">
            <h2>Популярные товары</h2>
          </div>
          <div class="col-sm-4 col-md-6 text-sm-right">
            <a href="" class="underlined">Больше</a>
          </div>
        </div>
        <div class="row gutter-1">

          <div class="col-md-4">
            <b-card no-body border-variant="none">
              <b-card-img top :src="require('@/assets/images/demo/confectionery.jpg')"></b-card-img>
              <b-badge variant="success" class="position-absolute top-0 start-0 m-3">Хит</b-badge>
              <b-card-footer>
                <b-card-title>Товар</b-card-title>
                <b-card-sub-title>Текст</b-card-sub-title>
              </b-card-footer>
            </b-card>
          </div>

          <div class="col-md-4">
            <b-card no-body border-variant="none">
              <b-card-img top :src="require('@/assets/images/demo/confectionery.jpg')"></b-card-img>
              <b-badge variant="success" class="position-absolute top-0 start-0 m-3">Хит</b-badge>
              <b-card-footer>
                <b-card-title>Товар</b-card-title>
                <b-card-sub-title>Текст</b-card-sub-title>
              </b-card-footer>
            </b-card>
          </div>

          <div class="col-md-4">
            <b-card no-body border-variant="none">
              <b-card-img top :src="require('@/assets/images/demo/confectionery.jpg')"></b-card-img>
              <b-badge variant="success" class="position-absolute top-0 start-0 m-3">Хит</b-badge>
              <b-card-footer>
                <b-card-title>Товар</b-card-title>
                <b-card-sub-title>Текст</b-card-sub-title>
              </b-card-footer>
            </b-card>
          </div>

        </div>
      </div>
    </section>

    <!-- categories -->
    <section>
      <div class="container">
        <div class="row align-items-end">
          <div class="col-8 col-md-6">
            <h2>Популярные категории</h2>
          </div>
          <div class="col-4 col-md-6 text-right">
            <a href="listing.html" class="underlined">Больше</a>
          </div>
        </div>
        <div class="row gutter-1">
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <g-image src="@/assets/images/demo/healty-food.jpg" class="img-fluid" />
                </div>
                <figcaption>Здоровое питание</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <g-image src="@/assets/images/demo/fruits.jpg" class="img-fluid" />
                </div>
                <figcaption>Фрукты</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <g-image src="@/assets/images/demo/vegetables.jpg" class="img-fluid" />
                </div>
                <figcaption>Овощи</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <g-image src="@/assets/images/demo/seafood.jpg" class="img-fluid" />
                </div>
                <figcaption>Морепродукты</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <g-image src="@/assets/images/demo/confectionery.jpg" class="img-fluid" />
                </div>
                <figcaption>Кондитерские изделия</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <g-image src="@/assets/images/demo/coffee-and-tea.jpg" class="img-fluid" />
                </div>
                <figcaption>Кофе, чай, какао</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <g-image src="@/assets/images/demo/beverages.jpg" class="img-fluid" />
                </div>
                <figcaption>Вода, соки, напитки</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <g-image src="@/assets/images/demo/bakery.jpg" class="img-fluid" />
                </div>
                <figcaption>Хлебобулочные</figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";

export default {
  metaInfo: {
    title: 'Главная'
  },
  components: {
    ImageSlider,
  },
}
</script>

