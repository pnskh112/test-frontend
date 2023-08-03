<template>
  <button class="MenuButton">
    <slot />
  </button>
</template>

<script setup lang="ts">
type Props = {
  hasAlert: boolean;
};
const props = defineProps<Props>();

const alertType: "block" | "none" = props.hasAlert ? "block" : "none";
</script>

<style scoped>
.MenuButton {
  position: relative;
  width: 100%;
  padding: 24px 30px;
  border: 4px solid black;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-family: inherit;
  font-size: 20px;
  font-weight: bold;
  line-height: 35px;
}

.MenuButton::before {
  position: absolute;
  top: 4px;
  right: 4px;
  display: v-bind(alertType);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #eb5757;
  content: "";
}

/* TODO: ちゃんと矢印Iconに変更する */
.MenuButton::after {
  position: absolute;
  right: 8px;
  bottom: 16px;
  display: block;
  width: 16px;
  height: 16px;
  content: "→";
}
</style>
