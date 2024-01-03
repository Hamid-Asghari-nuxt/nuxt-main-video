// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui','@nuxtjs/tailwindcss','@nuxtjs/color-mode','@nuxt/image','nuxt-swiper','@vueuse/nuxt','@nuxtjs/supabase'],
  css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	supabase:{
	redirect:false

	}

})
