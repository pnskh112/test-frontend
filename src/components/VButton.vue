<template>
  <button class="VButton" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped>
.VButton {
  min-width: 345px;
  height: 56px;
  border: 3;
  border-radius: 100px;
  border-color: black;
  box-shadow: 0px 4px black;
  background-color: #ffa800;
  color: black;
  font-family: inherit;
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 40px);
  max-width: 100%;
}
</style>
