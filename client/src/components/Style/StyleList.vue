<template lang="html">
  <div class="destination-list-wrapper">
    <div class="destination-list">
      <StyleListItem v-for='style in styles'
        :key='style._id'
        :tripstyle='style'/>
    </div>
    <router-link to='/admin/dashboard/styles/new'>
      <div class="add-btn-wrapper">
        <a class='add-btn' href="#">&plus;</a>
      </div>
    </router-link>
  </div>
</template>

<script>
import StyleListItem from './StyleListItem';
export default {
  name: 'StyleList',
  computed: {
    styles() {
      return this.$store.getters.styles;
    }
  },
  components: {
    StyleListItem
  }
}
</script>

<style lang="css" scoped>
</style>
