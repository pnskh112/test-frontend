<template>
  <i class="VIcon">
    <img
      :src="path"
      :alt="`${props.icon}`"
      :width="props.width"
      :height="props.height"
    />
  </i>
</template>

<script setup lang="ts">
type Props = {
  icon: "link";
  width?: number;
  height?: number;
};

const props = withDefaults(defineProps<Props>(), {
  width: 16,
  height: 16,
});

const path = new URL(`../assets/icons/${props.icon}.svg`, import.meta.url).href;
</script>
