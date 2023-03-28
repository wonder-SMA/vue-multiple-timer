<script>
import PauseButton from '../components/PauseButton.vue';
import PlayButton from '../components/PlayButton.vue';
import StopButton from '../components/StopButton.vue';
import TimerDisplay from '../components/TimerDisplay.vue';
import TimerSeparator from '../components/TimerSeparator.vue';
import TimerControlsLayout from '../layouts/TimerControlsLayout.vue';
import TimerLayout from '../layouts/TimerLayout.vue';
import { timeFormat } from '../utils/timeFormat.js';

export default {
  name: 'TimerContainer',
  components: { TimerControlsLayout, TimerSeparator, TimerDisplay, TimerLayout, PauseButton, PlayButton, StopButton },

  data() {
    return {
      startTime: 0,
      currentTime: 0,
      currentState: 'pause',
      isStopped: false,
      timedId: null,
      timerRef: null,
    };
  },

  computed: {
    formattedTime() {
      return timeFormat(this.currentTime);
    },
  },

  methods: {
    onClick(event) {
      if (!this.isStopped) {
        const { action } = event.target.dataset;
        switch (action) {
          case 'play':
            this.startTime = Date.now();
            this.currentState = action;
            this.start();
            break;
          case 'pause':
            this.currentState = action;
            this.pause();
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
      // Checking the delay from the timer start time
      const delay = (Date.now() - this.startTime) - this.currentTime * 1000;
      this.timedId = setTimeout(() => {
        this.currentTime += 1;
      }, Math.max(1000 - delay, 0));
    },

    pause() {
      clearTimeout(this.timedId);
    },

    stop() {
      clearTimeout(this.timedId);
      this.isStopped = true;
      this.$refs.timerRef.$el.style.setProperty('--cursor', 'auto');
      this.$refs.timerRef.$el.style.setProperty('--color', '#9E9E9E');
    },
  },
};
</script>

<template>
  <timer-layout ref="timerRef">
    <timer-display :time="formattedTime" @updated="start" />
    <timer-separator />
    <timer-controls-layout @click="onClick">
      <play-button v-if="currentState === 'pause'" />
      <pause-button v-if="currentState === 'play'" />
      <stop-button />
    </timer-controls-layout>
  </timer-layout>
</template>
