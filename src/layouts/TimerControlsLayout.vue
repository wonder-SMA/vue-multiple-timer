<script>
export default {
  name: 'TimerControlsLayout',
};
</script>

<template>
  <div class="timer_controls">
    <slot />
  </div>
</template>

<style scoped>
.timer_controls {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 70px;
}
</style>
