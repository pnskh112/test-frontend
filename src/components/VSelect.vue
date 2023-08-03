<template>
  <select class="VSelect" v-bind="$attrs">
    <slot />
  </select>
</template>

<style scoped>
.VSelect {
  position: relative;
  height: 48px;
  border: 2px solid black;
  border-radius: 8px;
}
</style>
