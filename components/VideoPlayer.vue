<script  setup>
const props = defineProps({
  videoId:{
    type:Number,
    required: true
  }

})
</script>

<template>
<iframe
width="500"
height="315"
:src="`https://player.vimeo.com/video/${props.videoId}`"
title="Video Player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
allowfullscreen
>

</iframe>
</template>

<style scoped>


</style>
