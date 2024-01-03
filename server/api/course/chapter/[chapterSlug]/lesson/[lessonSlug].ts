
export default defineEventHandler((event) => {
	const {chapterSlug,lessonSlug} = event.context.params

	return `chapterSlug: ${chapterSlug} lessonSlug: ${lessonSlug}`
})