<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6 bg-red-500">
      {{ lang }}
    </h1>

    <div class="flex gap-4 mb-6">
      <button
        class="px-4 py-2 bg-blue-600 text-white rounded mx-4"
        @click="lang == 'en' ? (lang = 'ar') : (lang = 'en')"
      >
        {{ tGlobal.changeLang }}
      </button>
    </div>

    <div class="p-6 space-y-6">
      <h1 class="text-2xl font-bold">{{ tGlobal.dirDemo }}</h1>
      <div class="p-4 border rounded bg-gray-100">
        <p class="mb-2 ltr:text-left rtl:text-right">
          {{ tGlobal.tailwindText }}
        </p>
      </div>

      <!-- Custom CSS -->
      <div class="custom-box">
        {{ tGlobal.cssText }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { default as ar } from "./i18n/ar";
import { default as en } from "./i18n/en";

const lang = ref("en");

const tGlobal = computed(() => (lang.value === "en" ? en : ar));

watch(lang, (newLang) => {
  document.dir = newLang === "ar" ? "rtl" : "ltr";
});
</script>
