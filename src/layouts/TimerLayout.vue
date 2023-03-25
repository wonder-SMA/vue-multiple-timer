<script>
export default {
  name: 'TimerLayout',
};
</script>

<template>
  <div class="timer_layout">
    <slot />
  </div>
</template>

<style scoped>
.timer_layout {
  min-width: 225px;
  width: 225px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #696969;
}
</style>
