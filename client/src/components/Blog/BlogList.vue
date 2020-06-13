<template lang="html">
  <div class="destination-list-wrapper">
    <div class="destination-list">
      <BlogListItem v-for='blog in blogs'
        :key='blog._id'
        :blog='blog'/>
    </div>
    <router-link to='/admin/dashboard/blogs/new'>
      <div class="add-btn-wrapper">
        <a class='add-btn' href="#">&plus;</a>
      </div>
    </router-link>
  </div>
</template>

<script>
import BlogListItem from './BlogListItem';
export default {
  name: 'BlogList',
  computed: {
    blogs() {
      return this.$store.getters.blogs;
    }
  },
  components: {
    BlogListItem
  }
}
</script>

<blog lang="css" scoped>
</blog>
