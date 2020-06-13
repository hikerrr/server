<template lang="html">
  <div class="list-item-wrapper">
      <router-link :to="'/admin/dashboard/blogs/' + blog._id">
        <div class="list-item">
          <div class="list-item-name">
            <p>{{blog.title}}</p>
          </div>
      </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogListItem',
  props: ['blog']
}
</script>

<style lang="css" scoped>
</style>
