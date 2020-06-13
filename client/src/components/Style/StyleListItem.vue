<template lang="html">
  <div class="list-item-wrapper">
      <router-link :to="'/admin/dashboard/styles/' + tripstyle._id">
        <div class="list-item">
          <div class="list-item-name">
            <p>{{tripstyle.heading}}</p>
          </div>
      </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'StyleListItem',
  props: ['tripstyle']
}
</script>

<style lang="css" scoped>
</style>
