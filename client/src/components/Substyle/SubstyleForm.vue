<template lang="html">
  <div class="destination-form-wrapper">
    <div class="destination-form" v-if='substyle'>
      <form class="form">
        <div class="form-field">
          <label for="linkName" class='form-label'>Link Name <span class='red'> *</span></label>
          <input :class="{'border-red' : errors.linkName}" v-model='substyle.linkName' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.linkName'>{{errors.linkName}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Heading <span class='red'> *</span></label>
          <input v-model='substyle.heading' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.heading'>{{errors.heading}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Image Name <span class='red'> *</span></label>
          <input v-model='substyle.imageName' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.imageName'>{{errors.imageName}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Image Caption <span class='red'> *</span></label>
          <input v-model='substyle.imageCaption' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.imageCaption'>{{errors.imageCaption}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Caption <span class='red'> *</span></label>
          <textarea v-model='substyle.caption' type="text" name="" value="" class='form-area' required></textarea>
          <span class='error' v-if='errors.caption'>{{errors.caption}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Tours <span class='red'> *</span></label>
          <div class="cities">
            <label v-for='tour in tours' :key='tour._id'>
              <input type="checkbox" name='tours[]' :checked="isTourPresent(tour._id)?true:false" :value="tour._id" class='form-checkbox'>
                <span class='checkbox-label'>{{tour.heading}}</span>
            </label>
          </div>
        </div>
        <a :disable='loading' href="#" @click='saveData' class='form-btn'>Save</a>
        <router-link to='/admin/dashboard/substyles'>
          <a href="/admin/dashboard/substyles" @click='deleteSubstyleById' class='form-btn'>Delete</a>
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
  name: 'SubstyleForm',
  props: ['id'],
  data() {
    return {
      substyle: {},
      loading: false,
      msg: 'None',
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
    }
  },
  created() {
    this.substyle = _.cloneDeep(this.$store.getters.substyleById(this.id));
  },
  methods: {
    isTourPresent(id) {
      for(let i = 0; i < this.substyle.tours.length; i++) {
        if(this.substyle.tours[i]._id === id) {
          return true;
        }
      }
      return false;
    },
    deleteSubstyleById() {
      this.$store.dispatch('deleteSubstyle', this.substyle.linkName);
    },
    saveData(evt) {
      evt.preventDefault();
      if (!this.validateForm()) {
        return;
      }
      let tours = [];
      let tourOptions = document.getElementsByName('tours[]');
      for(let i = 0; i < tourOptions.length; i++) {
        if(tourOptions[i].checked) tours.push(tourOptions[i]._value);
      }
      this.substyle.tours = tours;
      this.loading=true;
      this.msg = 'Saving...';
      bus.$emit('loadStart', {msg:'Saving'});
      this.$store.dispatch('updateSubstyle',this.substyle)
        .then(() => {
          this.substyle = _.cloneDeep(this.$store.getters.substyleById(this.id));
          this.loading = false;
          this.msg = 'Updated';
          bus.$emit('loadEnd');
          bus.$emit('notify', {msg:'Save Success'});
        })
        .catch((err) => {
          this.substyle = _.cloneDeep(this.$store.getters.substyleById(this.id));
          this.loading = false;
          this.msg = err;
          bus.$emit('loadEnd');
          bus.$emit('notify', {msg:'Save Failed'});
        });
    },
    validateForm() {
      let validate = true;
      if (this.substyle.linkName == '') {
        this.errors.linkName = 'Link name cannot be empty.';
        validate = false;
      }
      else if(this.substyle.linkName.includes(' ')) {
        this.errors.linkName = 'Link name cannot have spaces.';
      }
      else if(this.substyle.linkName.length > 20) {
        this.errors.linkName = 'Link name cannot be longer than 20 characters.';
      }

      if (this.substyle.heading == '') {
        this.errors.heading = 'Heading cannot be empty.';
        validate = false;
      }
      if (this.substyle.imageName == '') {
        this.errors.imageName = 'Image name cannot be empty.';
        validate = false;
      }
      if (this.substyle.imageCaption == '') {
        this.errors.imageCaption = 'Image caption cannot be empty.';
        validate = false;
      }
      if (this.substyle.caption == '') {
        this.errors.caption = 'Caption cannot be empty.';
        validate = false;
      }
      else if(this.substyle.caption.length > 300) {
        this.errors.caption = 'Caption cannot be longer than 300 characters.';
        validate = false;
      }
      return validate;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
