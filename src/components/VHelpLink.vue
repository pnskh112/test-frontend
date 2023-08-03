<template>
  <a class="VHelpLink" :href="props.url" target="_blank">
    <span class="VHelpLink__name">{{ props.name }}</span>
    <v-icon class="VHelpLink__icon" :icon="'link'" />
  </a>
</template>

<script setup lang="ts">
import VIcon from "./VIcon.vue";

type Props = {
  url: string;
  name: string;
};

const props = defineProps<Props>();
</script>

<style scoped>
.VHelpLink {
  color: #bdbdbd;
  text-decoration: none;
}

.VHelpLink__name {
  margin-right: 10px;
  text-decoration: underline;
}

.VHelpLink__icon {
  position: relative;
  bottom: -2px;
}
</style>
