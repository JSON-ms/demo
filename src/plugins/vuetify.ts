/**
 * utils/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import { VVideo } from 'vuetify/labs/VVideo'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  // components: {
  //   VVideo,
  // },
  theme: {
    defaultTheme: 'light',
  },
})
