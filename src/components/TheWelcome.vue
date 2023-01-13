<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ $t('documentation.title') }}</template>
    <i18next :translation="$t('documentation.description')">
      <template #1>
        <a href="https://vuejs.org/" target="_blank" rel="noopener">{{ $t('documentation.1') }}</a>
      </template>
    </i18next>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{ $t('tooling.title') }}</template>
    <i18next :translation="$t('tooling.description')">
      <template #1>
        <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">{{ $t('tooling.1') }}</a>
      </template>
      <template #2>
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">{{ $t('tooling.2') }}</a>
      </template>
      <template #3>
        <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">{{ $t('tooling.3') }}</a>
      </template>
      <template #4>
        <a href="https://www.cypress.io/" target="_blank" rel="noopener">{{ $t('tooling.4') }}</a>
      </template>
      <template #5>
        <a href="https://on.cypress.io/component" target="_blank">{{ $t('tooling.5') }}</a>
      </template>
      <template #6>
        <code>{{ $t('tooling.6') }}</code>
      </template>
      <template #br>
        <br />
      </template>
    </i18next>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>{{ $t('ecosystem.title') }}</template>
    <i18next :translation="$t('ecosystem.description')">
      <template #1>
        <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">{{ $t('ecosystem.1') }}</a>
      </template>
      <template #2>
        <a href="https://router.vuejs.org/" target="_blank" rel="noopener">{{ $t('ecosystem.2') }}</a>
      </template>
      <template #3>
        <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">{{ $t('ecosystem.3') }}</a>
      </template>
      <template #4>
        <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">{{ $t('ecosystem.4') }}</a>
      </template>
      <template #5>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">{{ $t('ecosystem.5') }}</a>
      </template>
    </i18next>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>{{ $t('community.title') }}</template>
    <i18next :translation="$t('community.description')">
      <template #1>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">{{ $t('community.1') }}</a>
      </template>
      <template #2>
        <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">{{
          $t('community.2')
        }}</a>
      </template>
      <template #3>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">{{ $t('community.3') }}</a>
      </template>
      <template #4>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">{{ $t('community.4') }}</a>
      </template>
    </i18next>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>{{ $t('supportVue.title') }}</template>
    <i18next :translation="$t('supportVue.description')">
      <template #1>
        <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">{{ $t('supportVue.1') }}</a>
      </template>
    </i18next>
  </WelcomeItem>
</template>
