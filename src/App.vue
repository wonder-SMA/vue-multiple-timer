<script>
import MyTimer from './components/MyTimer.vue';

export default {
  name: 'App',
  components: { MyTimer },

  computed: {
    ...mapState({
      login: state => state.user.login,
    }),
  },

  methods: {
    ...mapActions({
      getTopics: 'topics/getTopics',
    }),

  },

  async created() {

  },
};
</script>

<template>
  <div class="App">
    <my-timer />
  </div>
</template>

<style>
html {
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
  display: flex;
//flex-direction: column; //padding: 12px; //margin: 0 auto;
}
</style>
