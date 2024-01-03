<template>
 <NuxtLayout>
   <div class="prose bg-gray-200">
     <h1>
       Oh no Error!
     </h1>
     <p>its look like someting error</p>
     <p>sorry about that!</p>
     <p><strong>{{error.message}}</strong></p>
   <p class="prose">
     go to first
     <a
     class="hover: cursor-pointer" @click="handleError">

first lesson
     </a>
   </p>

   </div>
 </NuxtLayout>
</template>

<script setup>
const error = useError()
const handleError =  () =>{
   clearError({
    redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
  })
}
</script>