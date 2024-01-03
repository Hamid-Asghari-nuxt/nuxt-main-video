<script setup>
const { chapters,title } = useCourse();
const resetError = async (error) =>{
  await navigateTo(
      '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'

  )
  error.value = null
}
</script>

<template>

    <div>
      <div class="prose mb-12">
        <h1>
        <span class="font-medium">
  
          <span class="font-bold">{{title}}</span>
        </span>
        </h1>
      </div>
      <div class="flex justify-center flex-grow">
        <div class="prose bg-white min-w-[25ch] max-w-[30ch] p-10 rounded-md mr-4">
          <h2 class="text-gray-800">chapter</h2>

          <div v-for="chapter in chapters" :key="chapter.slug">
            <h4>{{ chapter.title }}</h4>

            <NuxtLink v-for="(lesson,index) in chapter.lessons" :key="lesson.slug"

                      class="flex flex-row no-underline prose-sm font-normal py-1"
                      :to="lesson.path"
                      :class="{
               'text-blue-500':
               lesson.path === $route.fullPath,
               'text-gray-500':
               lesson.path !== $route.fullPath
              }"
            >

              <span class="text-gray-500">{{index+1}}.</span>

              <span>{{lesson.title}}</span>

            </NuxtLink>
          </div>
        </div>
        <div class="prose bg-white rounded-md w-[80ch] p-12">
          <NuxtErrorBoundary >
          <NuxtPage />
            <template #error="{error}">
              <p>oh no something wrong!</p>
              <code>{{error}}</code>
              <UButton
                  @click="resetError(error)"
                  label="reset"
              />
            </template>

          </NuxtErrorBoundary>
        </div>
      </div>
    </div>

</template>

