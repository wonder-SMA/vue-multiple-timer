<script>
import PauseButton from './UI/PauseButton.vue';
import PlayButton from './UI/PlayButton.vue';
import StopButton from './UI/StopButton.vue';

export default {
  name: 'MyTimer',
  components: { PauseButton, PlayButton, StopButton },

  data() {
    return {
      currentTime: 0,
      currentState: 'pause',
      isStopped: false,
      timedId: null,
      timerRef: null,
    };
  },

  methods: {
    onClick(event) {
      if (!this.isStopped) {
        const { action } = event.target.dataset;
        switch (action) {
          case 'play':
            this.start();
            this.currentState = action;
            break;
          case 'pause':
            this.stop();
            this.currentState = action;
            break;
          case 'stop':
            this.stop();
            break;
          default:
            break;
        }
      }
    },

    start() {
      this.timedId = setInterval(() => {
        this.currentTime += 1;
      }, 1);
    },

    stop() {
      clearInterval(this.timedId);
      this.isStopped = true;
      this.$refs.timerRef.style.setProperty('--cursor', 'auto');
      this.$refs.timerRef.style.setProperty('--background', '#9E9E9E');
    },
  },

  beforeUnmount() {
    clearInterval(this.timedId);
  },
};
</script>

<template>
  <div class="timer" ref="timerRef">
    <div class="timer__display">
      <span class="timer__indicator" v-if="currentTime">{{ currentTime }}</span>
    </div>
    <span class="timer__separator" />
    <div class="timer_controls" @click="onClick">
      <play-button v-if="currentState === 'pause'" />
      <pause-button v-if="currentState === 'play'" />
      <stop-button />
    </div>
  </div>
</template>

<style>
:root {
  --background: #FFFFFF;
  --cursor: pointer;
}

.timer {
  min-width: 225px;;
  width: 225px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--background);
  background: #696969;
}

.timer__display {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timer__indicator {
  font-family: "Gotham Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 21px;
  text-align: center;
  color: inherit;
}

.timer__separator {
  border: 1px solid var(--background);
}

.timer_controls {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 70px;
}
</style>
