<script>
export default {
  name: 'TimerAdd',
};
</script>

<template>
  <a
      class="timer_add"
      role="button"
      data-action="add"
      title="add"
  />
</template>

<style scoped>
.timer_add {
  position: relative;
  width: 20px;
  height: 20px;
  display: block;
  align-self: center;
  cursor: pointer;
  touch-action: manipulation;
}

.timer_add::before, .timer_add::after {
  position: absolute;
  width: 3px;
  height: 20px;
  content: "";
  background: #9E9E9E;
}

.timer_add::before {
  transform: rotate(90deg);
  left: 42%;
}

.timer_add::after {
  left: 42%;
}
</style>
