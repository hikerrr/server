<template lang="html">
  <div class="destination-list-wrapper">
    <div class="destination-list">
      <SubstyleListItem v-for='substyle in substyles'
        :key='substyle._id'
        :substyle='substyle'/>
    </div>
    <router-link to='/admin/dashboard/substyles/new'>
      <div class="add-btn-wrapper">
        <a class='add-btn' href="#">&plus;</a>
      </div>
    </router-link>
  </div>
</template>

<script>
import SubstyleListItem from './SubstyleListItem';
export default {
  name: 'SubstyleList',
  computed: {
    substyles() {
      return this.$store.getters.substyles;
    }
  },
  components: {
    SubstyleListItem
  }
}
</script>

<style lang="css" scoped>
</style>
