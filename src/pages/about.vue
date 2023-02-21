<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="zh">zh</option>
      </select>
      <p>{{ $t("welcome") }} {{ config.public.appName }}</p>
    </form>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { locale, setLocaleCookie } = useI18n();
watch(locale, async (newLocale) => {
  setLocaleCookie(newLocale);
});
</script>
