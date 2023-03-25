<script>
export default {
  name: 'StopButton',
};
</script>

<template>
  <a
      class="stop-button"
      role="button"
      data-action="stop"
      title="stop"
  />
</template>

<style scoped>
.stop-button {
  display: block;
  width: 20px;
  height: 20px;
  background: var(--color);
  cursor: var(--cursor);
  touch-action: manipulation;
}
</style>
