<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson: {{ chapter.number }}-{{ lesson.number }}
    </p>
    <h2 class="my-2">
      {{ lesson.title }}
    </h2>

    <div>
      <NuxtLink
        v-if="lesson.sourceUrl"
        :to="lesson.sourceUrl"
        class="font-normal text-gray-400 text-md"
      >
        Download Source code
      </NuxtLink>

      <NuxtLink
        v-else
        :to="lesson.downloadUrl"
        class="font-normal text-gray-400 text-md"
      >
        Download Video
      </NuxtLink>
    </div>
    <VideoPlayer v-if="lesson.videoId" :video-id="lesson.videoId" />
    <p class="text-gray-500">{{ lesson.text }}</p>

    <LessonCompleateButtun
      :model-value="isLessonCompleted"
      @update:model-value="toggleComplete"
    />
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug,
  );
});

definePageMeta({
  middleware: [
    function ({ params }, from) {
      const course = useCourse();

      const chapter = computed(() => {
        return course.chapters.find(
          (chapter) => chapter.slug === params.chapterSlug,
        );
      });
      if (!chapter.value) {
        return navigateTo(
          createError({
            statusCode: 404,
            message: "Chapter not found",
          }),
        );
      }
      const lesson = computed(() => {
        return chapter.value.lessons.find(
          (lesson) => lesson.slug === params.lessonSlug,
        );
      });
      if (!lesson.value) {
        return navigateTo(
          createError({
            statusCode: 404,
            message: "lesson not found",
          }),
        );
      }
    },
    "auth",

  ],
});

const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug,
  );
});

const title = computed(() => {
  return `${lesson.value.title}-${course.title}`;
});
useHead({
  title,
});
const progress = useLocalStorage("progress", []);

const isLessonCompleted = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }
  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false;
  }
  return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }

  progress.value[chapter.value.number - 1][lesson.value.number - 1] =
    !isLessonCompleted.value;
};
</script>
