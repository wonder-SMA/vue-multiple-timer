<script>
import { v4 as uuidv4 } from 'uuid';
import TimerNewContainer from './containers/TimerNewContainer.vue';
import TimerContainer from './containers/TimerContainer.vue';

export default {
  name: 'App',
  components: { TimerNewContainer, TimerContainer },

  data() {
    return {
      timers: [],
    };
  },

  methods: {
    onClick(event) {
      const { action } = event.target.dataset;
      switch (action) {
        case 'add':
          this.add();
          break;
        default:
          break;
      }
    },

    add() {
      this.timers.push({ id: uuidv4() });
    },
  },
};
</script>

<template>
  <div class="App">
    <timer-container v-for="timer in timers" :key="timer.id" />
    <timer-new-container @click="onClick" />
  </div>
</template>

<style>
html {
  --color: #FFFFFF;
  --cursor: pointer;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

.App {
  min-height: 100vh;
  background: #353638;
  display: grid;
  grid-auto-rows: 120px;
  column-gap: 50px;
  row-gap: 45px;
  justify-content: center;
  padding: 27px 0;
}

@media (min-width: 320px) {
  .App {
    grid-template-columns: 225px;
  }
}

@media (min-width: 768px) {
  .App {
    grid-template-columns: 225px 225px;
  }
}

@media (min-width: 1024px) {
  .App {
    grid-template-columns: 225px 225px 225px;
  }
}
</style>
