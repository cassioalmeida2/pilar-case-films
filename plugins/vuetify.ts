// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#032541',
          secondary: '#b9b9b9'
        }
      },
    },
  },
  })
  app.vueApp.use(vuetify)
})