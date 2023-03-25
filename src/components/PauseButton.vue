<script>
export default {
  name: 'PauseButton',
};
</script>

<template>
  <a
      class="pause-button"
      role="button"
      data-action="pause"
      title="pause"
  />
</template>

<style scoped>
.pause-button {
  position: relative;
  display: block;
  width: 16px;
  height: 20px;
  cursor: var(--cursor);
  touch-action: manipulation;
}

.pause-button::before, .pause-button::after {
  position: absolute;
  width: 3px;
  height: 20px;
  transform: rotate(180deg);
  content: "";
  background: var(--color);
}

.pause-button::before {
  left: 3px;
}

.pause-button::after {
  left: 10px;
}
</style>
