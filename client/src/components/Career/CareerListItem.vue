<template lang="html">
  <div class="list-item-wrapper">
      <router-link :to="'/admin/dashboard/careers/' + career._id">
        <div class="list-item">
          <div class="list-item-name">
            <p>{{career.name}}</p>
          </div>
      </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'CareerListItem',
  props: ['career']
}
</script>

<style lang="css" scoped>
</style>
