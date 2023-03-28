<script>
export default {
  name: 'TimerDisplay',

  props: {
    time: String,
  },

  emits: {
    'updated': null,
  },

  updated() {
    this.$emit('updated');
  },
};
</script>

<template>
  <div class="timer__display">
    <span class="timer__indicator">{{ time }}</span>
  </div>
</template>

<style scoped>
.timer__display {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.timer__indicator {
  font-family: "Gotham Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 20px;
  text-align: center;
  color: var(--color);
}
</style>
