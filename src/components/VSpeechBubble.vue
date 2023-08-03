<template>
  <div class="VSpeechBubble">
    <slot />
  </div>
</template>

<style scoped>
.VSpeechBubble {
  position: relative;
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  background-color: #f2f2f2;
}

/* TODO: 吹き出しの矢印を完全再現していない */
.VSpeechBubble::after {
  position: absolute;
  bottom: -16px; /* -height */
  left: 16px;
  display: block;
  width: 0;
  height: 0;
  border-top: 16px solid #f2f2f2;
  border-right: 16px solid transparent;
  border-left: 0 solid transparent;
  content: "";
}
</style>
