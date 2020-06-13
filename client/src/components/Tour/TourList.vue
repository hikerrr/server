<template lang="html">
  <div class="destination-list-wrapper">
    <div class="destination-list">
      <TourListItem v-for='tour in tours'
        :key='tour._id'
        :tour='tour'/>
    </div>
    <router-link to='/admin/dashboard/tours/new'>
      <div class="add-btn-wrapper">
        <a class='add-btn' href="#">&plus;</a>
      </div>
    </router-link>
  </div>
</template>

<script>
import TourListItem from './TourListItem';
export default {
  name: 'TourList',
  computed: {
    tours() {
      return this.$store.getters.tours;
    }
  },
  components: {
    TourListItem
  }
}
</script>

<style lang="css" scoped>
</style>
