import { createApp } from 'vue'
import i18n from '../i18n'
import App from './App.vue'

import './assets/main.css'

i18n(createApp(App)).mount('#app')
