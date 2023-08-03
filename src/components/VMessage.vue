<template>
  <div class="VMessage">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.VMessage {
  padding: 4px;
  border: 1px solid #eb5757;
  border-radius: 8px;
  margin: 8px 0;
  background-color: #ffe5da;
  color: #eb5757;
}
</style>
