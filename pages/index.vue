<template>
<NuxtLink
    class="underline"
    :href="firstLesson.path"
  >
go first lesson
</NuxtLink>

</template>

<script setup lang="ts">
const firstLesson = useFirstLesson()

</script>
