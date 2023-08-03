<template>
  <div class="VTitle" v-bind="$attrs">
    <slot />
  </div>
</template>

<style scoped>
.VTitle {
  color: black;
  font-size: 32px;
  font-weight: bold;
}
</style>
