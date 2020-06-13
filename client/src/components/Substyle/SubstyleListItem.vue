<template lang="html">
  <div class="list-item-wrapper">
      <router-link :to="'/admin/dashboard/substyles/' + substyle._id">
        <div class="list-item">
          <div class="list-item-name">
            <p>{{substyle.heading}}</p>
          </div>
      </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'SubstyleListItem',
  props: ['substyle']
}
</script>

<style lang="css" scoped>
</style>
