<template lang="html">
  <div class="destination-list-wrapper">
    <div class="destination-list">
      <CareerListItem v-for='career in careers'
        :key='career._id'
        :career='career'/>
    </div>
    <router-link to='/admin/dashboard/careers/new'>
      <div class="add-btn-wrapper">
        <a class='add-btn' href="#">&plus;</a>
      </div>
    </router-link>
  </div>
</template>

<script>
import CareerListItem from './CareerListItem';
export default {
  name: 'CareerList',
  computed: {
    careers() {
      return this.$store.getters.careers;
    }
  },
  components: {
    CareerListItem
  }
}
</script>

<career lang="css" scoped>
</career>
