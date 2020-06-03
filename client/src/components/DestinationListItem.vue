<template lang="html">
  <div class="list-item-wrapper">
    <div class="list-item">
      <div class="list-item-name">
        <p>{{destination.heading}}</p>
      </div>
      <div class="list-item-options">
        <router-link :to="'/admin/dashboard/destinations/' + destination._id">
          <a href="#" class='list-item-option'>
            <i class="fa fa-edit"></i>
          </a>
        </router-link>
        <a href="#" @click='deleteDestById' class='list-item-option'>
          <i class="fa fa-trash"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DestinationListItem',
  props: ['destination'],
  methods: {
    deleteDestById() {
      this.$store.dispatch('deleteDestination', this.destination.linkName);
    }
  }
}
</script>

<style lang="css" scoped>
  .list-item-wrapper {
    width: 100%;
    height: 65px;
    cursor: pointer;
    transition: all 0.4s ease;
    background-color: #40444b;
    border-radius: 4px;
  }
  .list-item-wrapper:hover {
    background-color: #1b262c;
  }
  .list-item {
    padding: 0 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .list-item-name {
    letter-spacing: 1px;
    font-size: 16px;
    color: #fff;
  }
  .list-item-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .list-item-option {
    margin: 0 5px;
  }

  .list-item-option i {
    color: #bbe1fa;
    font-size: 22px;
  }
</style>
