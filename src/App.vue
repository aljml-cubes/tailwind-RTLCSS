<template>
  <div class="flex h-screen">
    <!-- <button
      v-if="!isOpen"
      @click="isOpen = true"
      class="md:hidden p-3 bg-blue-400 text- fixed top-4 left-4 z-50 rounded"
    >
      ☰
    </button>

    <div
      :class="[
        'sidebar fixed md:static top-0 left-0 h-full w-64 bg-blue-400 text-white flex flex-col transform transition-transform duration-300 z-40',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0',
      ]"
    >
      <div
        class="p-6 font-bold text-lg border-b-2 border-gray-700 text-black flex justify-between items-center md:block"
      >
        <span>{{ tGlobal.sidebarTitle }}</span>

        <button
          v-if="isOpen"
          @click="isOpen = false"
          class="md:hidden p-2 bg-gray-800 text-white rounded"
        >
          ✕
        </button>
      </div>
      <nav class="flex-1 p-4 space-y-5">
        <a
          class="nav-link block bg-gray-800 p-1 rounded"
          @click="isOpen = !isOpen"
        >
          {{ tGlobal.menu.dashboard }}
        </a>
        <a
          class="nav-link block bg-gray-800 p-1 rounded"
          @click="isOpen = !isOpen"
        >
          {{ tGlobal.menu.profile }}
        </a>
        <a
          class="nav-link block bg-gray-800 p-1 rounded"
          @click="isOpen = !isOpen"
        >
          {{ tGlobal.menu.settings }}
        </a>
      </nav>
    </div> -->

    <div class="w-screen">
      <!-- nav -->
      <div
        class="top-nav flex items-center justify-between bg-blue-400 text-black p-4"
      >
        <h1 class="text-xl font-bold">{{ tGlobal.navTitle }}</h1>
        <button
          class="px-4 py-2 bg-gray-800 text-white rounded"
          @click="lang == 'en' ? (lang = 'ar') : (lang = 'en')"
        >
          {{ tGlobal.changeLang }}
        </button>
      </div>

      <!-- body -->
      <!-- <div class="flex-1 p-6">
        <h2 class="text-2xl font-semibold mb-4">{{ tGlobal.pageTitle }}</h2>
        <p class="mb-4">
          {{ tGlobal.tailwindText }}
        </p>
        <div class="custom-box">
          {{ tGlobal.cssText }}
        </div>
      </div> -->

      <p
        class="mb-4 border-4 border-gray-900 w-52 p-6 bg-blue-500 ml-9 mr-9 mt-10"
      >
        {{ tGlobal.tailwindText }}
      </p>

      <div class="flex">
        <p class="mb-4 border-4 border-gray-900 w-52 p-6 bg-blue-500 ms-9">
          {{ tGlobal.tailwindText }}
        </p>
        <p class="mb-4 border-4 border-gray-900 w-52 p-6 bg-blue-500 ms-9">
          {{ tGlobal.tailwindText }}
        </p>
      </div>

      <div class="form-container">
        <h2>{{ tGlobal.formTitle }}</h2>
        <form>
          <!-- Personal Information -->
          <fieldset>
            <legend>{{ tGlobal.personalInfo }}</legend>
            <div class="form-group">
              <label for="firstName">{{ tGlobal.firstName }}</label>
              <input
                id="firstName"
                type="text"
                :placeholder="tGlobal.firstNamePlaceholder"
              />
            </div>
            <div class="form-group">
              <label for="lastName">{{ tGlobal.lastName }}</label>
              <input
                id="lastName"
                type="text"
                :placeholder="tGlobal.lastNamePlaceholder"
              />
            </div>
            <div class="form-group">
              <label for="email">{{ tGlobal.email }}</label>
              <input
                id="email"
                type="email"
                :placeholder="tGlobal.emailPlaceholder"
              />
            </div>
          </fieldset>

          <!-- Account Details -->
          <fieldset>
            <legend>{{ tGlobal.accountDetails }}</legend>
            <div class="form-group">
              <label for="username">{{ tGlobal.username }}</label>
              <input
                id="username"
                type="text"
                :placeholder="tGlobal.usernamePlaceholder"
              />
            </div>
            <div class="form-group">
              <label for="password">{{ tGlobal.password }}</label>
              <input
                id="password"
                type="password"
                :placeholder="tGlobal.passwordPlaceholder"
              />
            </div>
            <div class="form-group">
              <label for="confirmPassword">
                {{ tGlobal.confirmPassword }}</label
              >
              <input
                id="confirmPassword"
                type="password"
                :placeholder="tGlobal.confirmPasswordPlaceholder"
              />
            </div>
          </fieldset>

          <!-- Preferences -->
          <fieldset>
            <legend>{{ tGlobal.preferences }}</legend>
            <div class="form-group">
              <input type="checkbox" />
              {{ tGlobal.newsletter }}
            </div>
            <div class="form-group">
              <label for="country">{{ tGlobal.country }}</label>
              <select id="country">
                <option value="">{{ tGlobal.selectCountry }}</option>
                <option>{{ tGlobal.jordan }}</option>
                <option>{{ tGlobal.egypt }}</option>
                <option>{{ tGlobal.uae }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>{{ tGlobal.gender }}</label>
              <div class="radio-group">
                <label>
                  <input type="radio" name="gender" value="male" />
                  {{ tGlobal.male }}
                </label>
                <label>
                  <input type="radio" name="gender" value="female" />
                  {{ tGlobal.female }}
                </label>
              </div>
            </div>
          </fieldset>

          <!-- Submit -->
          <div class="form-actions">
            <button type="submit">{{ tGlobal.submit }}</button>
            <button type="reset">{{ tGlobal.reset }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { default as ar } from "./i18n/ar";
import { default as en } from "./i18n/en";

const lang = ref("en");
const isOpen = ref(false);

const tGlobal = computed(() => (lang.value === "en" ? en : ar));

watch(lang, (newLang) => {
  document.dir = newLang === "ar" ? "rtl" : "ltr";
});
</script>
