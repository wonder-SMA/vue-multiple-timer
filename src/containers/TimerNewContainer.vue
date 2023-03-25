<script>
import TimerAdd from '../components/TimerAdd.vue';
import TimerLayout from '../layouts/TimerLayout.vue';

export default {
  name: 'TimerNewContainer',
  components: { TimerAdd, TimerLayout },
};
</script>

<template>
  <timer-layout ref="timerRef">
    <timer-add />
  </timer-layout>
</template>
