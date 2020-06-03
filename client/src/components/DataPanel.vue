<template lang="html">
  <div class='data-panel'>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'DataPanel'
}
</script>

<style lang="css" scoped>
.data-panel {
  position: relative;
  right: 0;
  top: 0;
  margin-top: 65px;
  width: 100vw;
  min-height: calc(100vh - 65px);
  background-color: #36393f;
  -ms-overflow-style: none;
}


@media screen and (min-width:768px) {
  .data-panel {
    width: calc(100vw - 80px);
    margin-left: 80px;
  }
}

</style>
