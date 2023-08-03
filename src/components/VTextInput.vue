<template>
  <input class="VInput" v-bind="$attrs" />
</template>

<style scoped>
.VInput {
  height: 66px;
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: 0px 4px black;
  width: 100%;
  padding: 15px;
}
::placeholder {
  color: #000000 35%;
  font-size: 16px;
}

.VInput[disabled] {
  background-color: #bdbdbd;
}
</style>
