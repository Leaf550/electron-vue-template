<script setup lang="ts">
const testDebut = () => {
  console.log(window.mainProcTypes.TestEnum.Test1)
  console.log(window.mainProcTypes.TestEnum.Test2)
}
</script>

<template>
  <div>test div</div>
  <button @click="testDebut">test print Main ipc enum</button>
</template>

<style scoped></style>
