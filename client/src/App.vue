<template lang='html'>
  <div id='app' class='app-global-wrapper'>
    <div class="msg-box" v-if='notify' @click='closeMsgBox'>
      {{this.msg}}
    </div>
    <div class="loading-overlay" v-if='loading'>
    </div>
    <div class="spinner" v-if='loading'>
    </div>
      <div class='app-wrapper'>
        <TopPanel />
        <NavigationPanel />
        <DataPanel />
      </div>
  </div>
</template>

<script>

  import TopPanel from './components/TopPanel';
  import NavigationPanel from './components/NavigationPanel';
  import DataPanel from './components/DataPanel';
  import bus from './EventBus';

  export default {
    name: 'App',
    data() {
      return {
        loading: false,
        notify: false,
        msg: 'Some example message'
      }
    },
    components: {
      TopPanel,
      NavigationPanel,
      DataPanel
    },
    methods: {
      closeMsgBox() {
        this.notify = false;
        this.msg = '';
      }
    },
    created() {

      this.$store.dispatch('getDestinations');
      this.$store.dispatch('getStyles');
      this.$store.dispatch('getSubstyles');
      this.$store.dispatch('getTours');
      this.$store.dispatch('getBookings');
      this.$store.dispatch('getBlogs');
      this.$store.dispatch('getCareers');
      this.$store.dispatch('getBlogs');

      bus.$on('loadStart', (evt) => {
        this.loading = true;
        this.msg = evt.msg;
      });

      bus.$on('loadEnd', () => {
        this.loading = false;
        this.msg = '';
      });

      bus.$on('notify', (evt) => {
        this.notify = true;
        this.msg = evt.msg;
      });
    }
}
</script>

<style lang='css'>

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Open+Sans:wght@400;600;700;800&family=Roboto:wght@400;500;700&display=swap');

  *,
  *::before,
  *::after
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    user-select: none;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    font-family: 'Roboto';
    font-size: 16px;
  }

  body::-webkit-scrollbar
  {
    display: none;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  .loading-overlay  {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    z-index: 1;
    opacity: 0.72;
  }

  .msg-box {
    position: fixed;
    width: 320px;
    height: 320px;
    background-color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #555;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    cursor: pointer;
  }

  .msg-box::before {
    content:'\274c';
    position: absolute;
    top: 20px;
    right: 20px
  }

  .spinner {
    position: fixed;
    width: 120px;
    height: 120px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    border: 16px solid #fafafa;
    border-top: 16px solid #3498db;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .app-global-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

</style>
