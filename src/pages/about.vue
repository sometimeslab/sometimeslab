<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="zh-tw">zh-tw</option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { locale } = useI18n()
</script>