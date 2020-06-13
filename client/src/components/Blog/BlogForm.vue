<template lang="html">
  <div class="destination-form-wrapper">
    <div class="destination-form" v-if='blog'>
      <form class="form">
        <div class="form-field">
          <label for="linkName" class='form-label'>Link Name <span class='red'> *</span></label>
          <input :class="{'border-red' : errors.linkName}" v-model='blog.linkName' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.linkName'>{{errors.linkName}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Author <span class='red'> *</span></label>
          <input v-model='blog.author' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.author'>{{errors.author}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Title <span class='red'> *</span></label>
          <input v-model='blog.title' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.title'>{{errors.title}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Caption <span class='red'> *</span></label>
          <input v-model='blog.caption' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.caption'>{{errors.caption}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Image Name <span class='red'> *</span></label>
          <input v-model='blog.imageName' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.imageName'>{{errors.imageName}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Image Caption <span class='red'> *</span></label>
          <input v-model='blog.imageCaption' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.imageCaption'>{{errors.imageCaption}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Read Time (minutes) <span class='red'> *</span></label>
          <input v-model='blog.readTime' type="number" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.readTime'>{{errors.readTime}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Status <span class='red'> *</span></label>
          <select v-model='blog.status' class="form-input" name="">
            <option value="none">None</option>
            <option value="featured">Featured</option>
          </select>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Content <span class='red'> *</span></label>
          <textarea v-model='blog.content' type="text" name="" value="" class='form-area' required></textarea>
          <span class='error' v-if='errors.content'>{{errors.content}}</span>
        </div>
        <a :disable='loading' href="#" @click='saveData' class='form-btn'>Save</a>
        <router-link to='/admin/dashboard/blogs'>
          <a href="/admin/dashboard/blogs" @click='deleteBlogById' class='form-btn'>Delete</a>
        </router-link>
        <div class="loader">
          <p style='color:green'>Last Update Status: [{{msg}}]</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import bus from '../../EventBus';
import _ from 'lodash';
export default {
  name: 'BlogForm',
  props: ['id'],
  data() {
    return {
      blog: {},
      loading: false,
      msg: 'None',
      errors: {
        linkName:false,
        title:false,
        content:false,
        imageName:false,
        imageCaption:false,
        readTime: false,
        caption:false,
        author:false,
      }
    }
  },
  created() {
    this.blog = _.cloneDeep(this.$store.getters.blogById(this.id));
  },
  methods: {
    deleteBlogById() {
      this.$store.dispatch('deleteBlog', this.blog.linkName);
    },
    saveData(evt) {
      evt.preventDefault();
      if (!this.validateForm()) {
        return;
      }
      this.loading=true;
      this.msg = 'Saving...';
      bus.$emit('loadStart', {msg:'Saving'});
      this.$store.dispatch('updateBlog',this.blog)
        .then(() => {
          this.blog = _.cloneDeep(this.$store.getters.blogById(this.id));
          this.loading = false;
          this.msg = 'Updated';
          bus.$emit('loadEnd');
          bus.$emit('notify', {msg:'Save Success'});
        })
        .catch((err) => {
          this.blog = _.cloneDeep(this.$store.getters.blogById(this.id));
          this.loading = false;
          this.msg = err;
          bus.$emit('loadEnd');
          bus.$emit('notify', {msg:'Save Failed'});
        });
    },
    validateForm() {
      let validate = true;
      if (this.blog.linkName == '') {
        this.errors.linkName = 'Link name cannot be empty.';
        validate = false;
      }
      else if(this.blog.linkName.includes(' ')) {
        this.errors.linkName = 'Link name cannot have spaces.';
        validate = false;
      }
      else if(this.blog.linkName.length > 20) {
        this.errors.linkName = 'Link name cannot be longer than 20 characters.';
        validate = false;
      }

      if (this.blog.title == '') {
        this.errors.title = 'Title cannot be empty.';
        validate = false;
      }
      if (this.blog.author == '') {
        this.errors.author = 'Author name cannot be empty.';
        validate = false;
      }
      if (this.blog.content == '') {
        this.errors.content = 'Content cannot be empty.';
        validate = false;
      }
      else if(this.blog.content.length > 1200) {
        this.errors.content = 'Content cannot be longer than 1200 characters.';
        validate = false;
      }
      if (this.blog.imageName == '') {
        this.errors.imageName = 'Image Name cannot be empty.';
        validate = false;
      }
      if (this.blog.imageCaption == '') {
        this.errors.imageCaption = 'Image Caption cannot be empty.';
        validate = false;
      }
      if (this.blog.caption == '') {
        this.errors.caption = 'Caption cannot be empty.';
        validate = false;
      }
      if (this.blog.readTime == 0) {
        this.errors.readTime = 'Read Time cannot be zero.';
        validate = false;
      }
      return validate;
    }
  }
}
</script>

<blog lang="css" scoped>
</blog>
