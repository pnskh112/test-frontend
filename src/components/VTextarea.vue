<template>
  <textarea class="VTextarea" v-bind="$attrs" />
</template>

<style scoped>
.VTextarea {
  width: 100%;
  height: 100%;
  border: 2px solid black;
  border-radius: 8px;
}

::placeholder {
  padding: 8px;
  color: #bdbdbd;
  font-size: 10px;
}
</style>
