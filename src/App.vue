<template>
  <main class="Main">
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.Main {
  min-width: 345px;
  height: 0;
  min-height: 100dvh;
  padding-right: min(((100dvw - 345px) / 2), 40px);
  padding-left: min(((100dvw - 345px) / 2), 40px);
  background-color: #fff1da;
}
</style>
