<template lang="html">
  <div class="destination-form-wrapper">
    <div class="destination-form" v-if='destination'>
      <form class="form">
        <div class="form-field">
          <label for="linkName" class='form-label'>Link Name <span class='red'> *</span></label>
          <input :class="{'border-red' : errors.linkName}" v-model='destination.linkName' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.linkName'>{{errors.linkName}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Heading <span class='red'> *</span></label>
          <input v-model='destination.heading' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.heading'>{{errors.heading}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Image Name <span class='red'> *</span></label>
          <input v-model='destination.imageName' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.imageName'>{{errors.imageName}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Image Caption <span class='red'> *</span></label>
          <input v-model='destination.imageCaption' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.imageCaption'>{{errors.imageCaption}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Caption <span class='red'> *</span></label>
          <textarea v-model='destination.caption' type="text" name="" value="" class='form-area' required></textarea>
          <span class='error' v-if='errors.caption'>{{errors.caption}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Tours <span class='red'> *</span></label>
          <div class="cities">
            <label v-for='tour in tours' :key='tour._id'>
              <input type="checkbox" name='tours[]' :value="tour._id" class='form-checkbox'>
                <span class='checkbox-label'>{{tour.heading}}</span>
            </label>
          </div>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Blog <span class='red'> *</span></label>
            <select v-model='destination.blog' class='form-input'>
              <option value="">Not Selected</option>
              <option v-for='blog in blogs' :key='blog._id' :value='blog._id'>{{blog.title}}</option>
            </select>
        </div>
        <a :disable='loading' href="#" @click='saveData' class='form-btn'>Save</a>
        <router-link to='/admin/dashboard/destinations'>
          <a href="/admin/dashboard/destinations" class='form-btn'>Back</a>
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
export default {
  name: 'DestinationFormNew',
  props: ['id'],
  data() {
    return {
      loading: false,
      msg: 'None',
      destination: {
        linkName: '',
        heading: '',
        imageName: '',
        imageCaption: '',
        caption: '',
        tours: [],
        blog:''
      },
      errors: {
        linkName:false,
        heading:false,
        imageName:false,
        imageCaption:false,
        caption:false
      }
    }
  },
  computed: {
    tours() {
      return this.$store.getters.tours;
    },
    blogs() {
      return this.$store.getters.blogs;
    }
  },
  methods: {
    saveData(evt) {
      evt.preventDefault();
      if (!this.validateForm()) {
        return;
      }
      let tours = [];
      let tourOptions = document.getElementsByName('tour[]');
      for(let i = 0; i < tourOptions.length; i++) {
        if(tourOptions[i].checked) tours.push(tourOptions[i]._value);
      }
      this.destination.tours = tours;
      this.loading=true;
      this.msg = 'Saving...';
      bus.$emit('loadStart', {msg:'Saving...'});
      this.$store.dispatch('addDestination',this.destination)
        .then(() => {
          this.loading = false;
          this.msg = 'Updated';
          bus.$emit('loadEnd', {msg:'Saved'});
          bus.$emit('notify', {msg:'Data Saved'});
        })
        .catch((err) => {
          this.loading = false;
          this.msg = err;
          bus.$emit('loadEnd', {msg:'Failed'});
          bus.$emit('notify', {msg:'Failed'});
        });
    },
    validateForm() {
      let validate = true;
      if (this.destination.linkName == '') {
        this.errors.linkName = 'Link name cannot be empty.';
        validate = false;
      }
      else if(this.destination.linkName.includes(' ')) {
        this.errors.linkName = 'Link name cannot have spaces.';
        validate = false;
      }
      else if(this.destination.linkName.length > 20) {
        this.errors.linkName = 'Link name cannot be longer than 20 characters.';
        validate = false;
      }
      else {
        this.errors.linkName = '';
      }

      if (this.destination.heading == '') {
        this.errors.heading = 'Heading cannot be empty.';
        validate = false;
      }
      else {
        this.errors.heading = '';
      }
      if (this.destination.imageName == '') {
        this.errors.imageName = 'Image name cannot be empty.';
        validate = false;
      }
      else {
        this.errors.imageName = '';
      }
      if (this.destination.imageCaption == '') {
        this.errors.imageCaption = 'Image caption cannot be empty.';
        validate = false;
      }
      else {
        this.errors.imageCaption = '';
      }
      if (this.destination.caption == '') {
        this.errors.caption = 'Caption cannot be empty.';
        validate = false;
      }
      else if(this.destination.caption.length > 300) {
        this.errors.caption = 'Caption cannot be longer than 300 characters.';
        validate = false;
      }
      else {
        this.errors.caption = '';
      }
      return validate;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
