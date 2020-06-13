<template lang="html">
  <div class="destination-form-wrapper">
    <div class="destination-form" v-if='style'>
      <form class="form">
        <div class="form-field">
          <label for="linkName" class='form-label'>Link Name <span class='red'> *</span></label>
          <input :class="{'border-red' : errors.linkName}" v-model='style.linkName' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.linkName'>{{errors.linkName}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Heading <span class='red'> *</span></label>
          <input v-model='style.heading' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.heading'>{{errors.heading}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Image Name <span class='red'> *</span></label>
          <input v-model='style.imageName' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.imageName'>{{errors.imageName}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Image Caption <span class='red'> *</span></label>
          <input v-model='style.imageCaption' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.imageCaption'>{{errors.imageCaption}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Caption <span class='red'> *</span></label>
          <textarea v-model='style.caption' type="text" name="" value="" class='form-area' required></textarea>
          <span class='error' v-if='errors.caption'>{{errors.caption}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Substyles <span class='red'> *</span></label>
          <div class="cities">
            <label v-for='substyle in substyles' :key='substyle._id'>
              <input type="checkbox" name='substyles[]' :checked="isSubstylePresent(substyle._id)?true:false" :value="substyle._id" class='form-checkbox'>
                <span class='checkbox-label'>{{substyle.heading}}</span>
            </label>
          </div>
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
        <router-link to='/admin/dashboard/styles'>
          <a href="/admin/dashboard/styles" @click='deleteStyleById' class='form-btn'>Delete</a>
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
  name: 'StyleForm',
  props: ['id'],
  data() {
    return {
      style: {},
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
    },
    substyles() {
      return this.$store.getters.substyles;
    }
  },
  created() {
    this.style = _.cloneDeep(this.$store.getters.styleById(this.id));
  },
  methods: {
    isTourPresent(id) {
      for(let i = 0; i < this.style.tours.length; i++) {
        if(this.style.tours[i]._id === id) {
          return true;
        }
      }
      return false;
    },
    isSubstylePresent(id) {
      for(let i = 0; i < this.style.substyles.length; i++) {
        if(this.style.substyles[i]._id === id) {
          return true;
        }
      }
      return false;
    },
    deleteStyleById() {
      this.$store.dispatch('deleteStyle', this.style.linkName);
    },
    saveData(evt) {
      evt.preventDefault();
      if (!this.validateForm()) {
        return;
      }
      let tours = [];
      let substyles = [];
      let substyleOptions = document.getElementsByName('substyles[]');
      let tourOptions = document.getElementsByName('tours[]');
      for(let i = 0; i < tourOptions.length; i++) {
        if(tourOptions[i].checked) tours.push(tourOptions[i]._value);
      }
      for(let i = 0; i < substyleOptions.length; i++) {
        if(substyleOptions[i].checked) substyles.push(substyleOptions[i]._value);
      }
      this.style.tours = tours;
      this.style.substyles = substyles;
      this.loading=true;
      this.msg = 'Saving...';
      bus.$emit('loadStart', {msg:'Saving'});
      this.$store.dispatch('updateStyle',this.style)
        .then(() => {
          this.style = _.cloneDeep(this.$store.getters.styleById(this.id));
          this.loading = false;
          this.msg = 'Updated';
          bus.$emit('loadEnd');
          bus.$emit('notify', {msg:'Save Success'});
        })
        .catch((err) => {
          this.style = _.cloneDeep(this.$store.getters.styleById(this.id));
          this.loading = false;
          this.msg = err;
          bus.$emit('loadEnd');
          bus.$emit('notify', {msg:'Save Failed'});
        });
    },
    validateForm() {
      let validate = true;
      if (this.style.linkName == '') {
        this.errors.linkName = 'Link name cannot be empty.';
        validate = false;
      }
      else if(this.style.linkName.includes(' ')) {
        this.errors.linkName = 'Link name cannot have spaces.';
      }
      else if(this.style.linkName.length > 20) {
        this.errors.linkName = 'Link name cannot be longer than 20 characters.';
      }

      if (this.style.heading == '') {
        this.errors.heading = 'Heading cannot be empty.';
        validate = false;
      }
      if (this.style.imageName == '') {
        this.errors.imageName = 'Image name cannot be empty.';
        validate = false;
      }
      if (this.style.imageCaption == '') {
        this.errors.imageCaption = 'Image caption cannot be empty.';
        validate = false;
      }
      if (this.style.caption == '') {
        this.errors.caption = 'Caption cannot be empty.';
        validate = false;
      }
      else if(this.style.caption.length > 300) {
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
