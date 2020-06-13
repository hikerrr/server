<template lang="html">
  <div class="list-item-wrapper">
      <router-link :to="'/admin/dashboard/tours/' + tour._id">
        <div class="list-item">
          <div class="list-item-name">
            <p>{{tour.heading}}</p>
          </div>
      </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'TourListItem',
  props: ['tour']
}
</script>

<style lang="css" scoped>
</style>
