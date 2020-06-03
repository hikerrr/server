<template lang='html'>
  <div id='app' class='app-global-wrapper'>
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

  export default {
    name: 'App',
    components: {
      TopPanel,
      NavigationPanel,
      DataPanel
    },
    created() {
      this.$store.dispatch('getDestinations');
      this.$store.dispatch('getCities');
    }
}
</script>

<style lang='css'>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;900&display=swap');
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

  .app-global-wrapper {
  }

  .app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

</style>
