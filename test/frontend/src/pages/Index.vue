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
            <div class="card card-product">
              <figure class="card-image">
                <a href="#!" class="action">
                  <!-- <img src="../assets/images/navbar/heart.svg" height="40px" width="40px"> -->
                  <img src="../assets/images/demo/confectionery.jpg" alt="Image">
                </a>
                <span class="badge badge-success">Хит</span>
              </figure>
              <div class="card-footer">
                <h3 class="card-title"><a href="">текст</a></h3>
                <span class="brand">текст</span>
                <span class="price">0.00 руб</span>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-product">
              <figure class="card-image">
                <a href="#!" class="action">
                  <!-- <img src="../assets/images/navbar/heart.svg" height="40px" width="40px"> -->
                  <img src="../assets/images/demo/seafood.jpg" alt="Image">
                </a>
                <span class="badge badge-success">Хит</span>
              </figure>
              <div class="card-footer">
                <h3 class="card-title"><a href="">текст</a></h3>
                <span class="brand">текст</span>
                <span class="price">0.00 руб</span>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-product">
              <figure class="card-image">
                <a href="#!" class="action">
                  <!-- <img src="../assets/images/navbar/heart.svg" height="40px" width="40px"> -->
                  <img src="../assets/images/demo/beverages.jpg" alt="Image">
                </a>
                <span class="badge badge-success">Хит</span>
              </figure>
              <div class="card-footer">
                <h3 class="card-title"><a href="">текст</a></h3>
                <span class="brand">текст</span>
                <span class="price">0.00 руб</span>
              </div>
            </div>
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
                  <img src="../assets/images/demo/healty-food.jpg" alt="Image">
                </div>
                <figcaption>Здоровое питание</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <img src="../assets/images/demo/fruits.jpg" alt="Image">
                </div>
                <figcaption>Фрукты</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <img src="../assets/images/demo/vegetables.jpg" alt="Image">
                </div>
                <figcaption>Овощи</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <img src="../assets/images/demo/seafood.jpg" alt="Image">
                </div>
                <figcaption>Морепродукты</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <img src="../assets/images/demo/confectionery.jpg" alt="Image">
                </div>
                <figcaption>Кондитерские изделия</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <img src="../assets/images/demo/coffee-and-tea.jpg" alt="Image">
                </div>
                <figcaption>Кофе, чай, какао</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <img src="../assets/images/demo/beverages.jpg" alt="Image">
                </div>
                <figcaption>Вода, соки, напитки</figcaption>
              </figure>
            </a>
          </div>
          <div class="col-6 col-lg-3">
            <a href="">
              <figure class="category category--alt">
                <div class="equal">
                  <img src="../assets/images/demo/bakery.jpg" alt="Image">
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

