<template>
    <div class="container mx-auto px-4 py-8">
      <!-- User profile content here -->
    </div>
  </template>

<script setup>

useHead({
    title: 'Аккаунт'
})
</script>

<script>
export default {
  data() {
    return {
      user: {
        name: "John Doe",
        avatar: "https://i.pravatar.cc/100",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        followers: 123,
        following: 456,
        posts: 789
      }
    }
  }
}
</script>