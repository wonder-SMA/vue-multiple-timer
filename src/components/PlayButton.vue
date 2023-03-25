<script>
export default {
  name: 'PlayButton',
};
</script>

<template>
  <a
      class="play-button"
      role="button"
      data-action="play"
      title="play"
  />
</template>

<style scoped>
.play-button {
  position: relative;
  display: block;
  width: 17px;
  height: 20px;
  background: var(--color);
  cursor: var(--cursor);
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  touch-action: manipulation;
}
</style>
