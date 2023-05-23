<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Корзина</h1>
      <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <CartItem />
        <section aria-labelledby="summary-heading"
          class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Итоговая стоимость</h2>
          <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dd class="text-base font-medium text-gray-900">{cart.price} {{  }}</dd>
            </div>
          </dl>
          <!-- <div class="mt-6">
            <button type="submit"
              class="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Путь</button>
          </div> -->
        </section>
      </form>
    </div>
  </div>
</template>