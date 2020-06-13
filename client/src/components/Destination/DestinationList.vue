<template lang="html">
  <div class="destination-list-wrapper">
    <div class="destination-list">
      <DestinationListItem v-for='destination in destinations'
        :key='destination._id'
        :destination='destination'/>
    </div>
    <router-link to='/admin/dashboard/destinations/new'>
      <div class="add-btn-wrapper">
        <a class='add-btn' href="#">&plus;</a>
      </div>
    </router-link>
  </div>
</template>

<script>
import DestinationListItem from './DestinationListItem';
export default {
  name: 'DestinationList',
  computed: {
    destinations() {
      return this.$store.getters.destinations;
    }
  },
  components: {
    DestinationListItem
  }
}
</script>

<style lang="css">

  .destination-list-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .destination-list {
    padding: 1rem;
    display: grid;
    grid-gap: 7px;
    grid-template-columns: 1fr;
  }

  .add-btn-wrapper {
    position: fixed;
    right: 40px;
    top: 90vh;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    background-color: #fafafa;
  }

  .add-btn {
    display: block;
    font-size: 24px;
    color: #555;
  }



  @media screen and (min-width:576px) {
    .destination-list {
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media screen and (min-width:768px) {
    .destination-list {
      grid-template-columns: repeat(3,1fr);
    }
  }

  @media screen and (min-width:1200px) {
    .destination-list {
      grid-template-columns: repeat(4,1fr);
    }
  }

</style>
