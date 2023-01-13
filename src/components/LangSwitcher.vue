<template>
  <div>
    <div v-if="languages">
      <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
        <a v-if="$i18next.resolvedLanguage !== lng" v-on:click="$i18next.changeLanguage(lng)">
          {{ languages[lng].nativeName }}
        </a>
        <strong v-if="$i18next.resolvedLanguage === lng">
          {{ languages[lng].nativeName }}
        </strong>
        <span v-if="index < Object.keys(languages).length - 1">&nbsp;|&nbsp;</span>
      </span>
    </div>
    <!-- <select v-model="$i18next.resolvedLanguage">
      <option
        v-for="lng in Object.keys(languages)"
        :value="lng"
        :key="lng"
        v-on:click="$i18next.changeLanguage(lng)"
        :disabled="$i18next.resolvedLanguage === lng">
        {{ languages[lng].nativeName }}
      </option>
    </select> -->
  </div>
</template>

<script>
export default {
  name: 'Language switcher',
  data() {
    return {
      languages: {
        en: { nativeName: 'English' },
        de: { nativeName: 'Deutsch' },
      },
    }
  },
}
</script>