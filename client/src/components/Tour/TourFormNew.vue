<template lang="html">
  <div class="destination-form-wrapper">
    <div class="destination-form" v-if='tour'>
      <form class="form">
        <div class="form-field">
          <label for="linkName" class='form-label'>Link Name <span class='red'> *</span></label>
          <input :class="{'border-red' : errors.linkName}" v-model='tour.linkName' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.linkName'>{{errors.linkName}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Heading <span class='red'> *</span></label>
          <input v-model='tour.heading' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.heading'>{{errors.heading}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Image Name <span class='red'> *</span></label>
          <input v-model='tour.imageName' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.imageName'>{{errors.imageName}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Image Caption <span class='red'> *</span></label>
          <input v-model='tour.imageCaption' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.imageCaption'>{{errors.imageCaption}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Caption <span class='red'> *</span></label>
          <textarea v-model='tour.caption' type="text" name="" value="" class='form-area' required></textarea>
          <span class='error' v-if='errors.caption'>{{errors.caption}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Price Min <span class='red'> *</span></label>
          <input v-model='tour.priceMax' type="number" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.priceMin'>{{errors.priceMin}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Price Max <span class='red'> *</span></label>
          <input v-model='tour.priceMin' type="number" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.priceMax'>{{errors.priceMax}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Holiday Length <span class='red'> *</span></label>
          <input @input='updateArrays' v-model='tour.holidayLength' type="number" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.holidayLength'>{{errors.holidayLength}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Holiday Type <span class='red'> *</span></label>
          <input v-model='tour.holidayType' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.holidayType'>{{errors.holidayType}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Best time to go <span class='red'> *</span></label>
          <input v-model='tour.bestTimeToGo' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.bestTimeToGo'>{{errors.bestTimeToGo}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Form Image <span class='red'> *</span></label>
          <input v-model='tour.formImage' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.formImage'>{{errors.formImage}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Status <span class='red'> *</span></label>
          <select v-model='tour.status' class="form-input" name="">
            <option value="none">None</option>
            <option value="featured">Featured</option>
            <option value="upcoming">Up Coming</option>
          </select>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Highlights Caption <span class='red'> *</span></label>
          <input v-model='tour.highlightsCaption' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.highlightsCaption'>{{errors.highlightsCaption}}</span>
        </div>
        <div v-for='index in 4' :key="`himage-${index}`" class="form-field">
          <label for="heading" class='form-label'>Highlights Image {{index}} <span class='red'> *</span></label>
          <input v-model='tour.highlightsImages[index - 1]' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.highlightsImages'>{{errors.highlightsImages}}</span>
        </div>
        <div v-for='(image,index) in tour.itinerary' :key="`iimage-${index}`" class="form-field">
          <label for="heading" class='form-label'>Itinerary Image {{index + 1}} <span class='red'> *</span></label>
          <input type="text" v-model='tour.itinerary[index].image' class='form-input' required>
          <span class='error' v-if='errors.itineraryImages'>{{errors.itineraryImages}}</span>
        </div>
        <div v-for='(itinerary,index) in tour.itinerary' :key="`iheading-${index}`" class="form-field">
          <label for="heading" class='form-label'>Itinerary Heading {{index + 1}} <span class='red'> *</span></label>
          <input type="text" v-model='tour.itinerary[index].heading' class='form-input' required>
          <span class='error' v-if='errors.itineraryImages'>{{errors.itineraryImages}}</span>
        </div>
        <div v-for='(itinerary,index) in tour.itinerary' :key="`icaption-${index}`" class="form-field">
          <label for="heading" class='form-label'>Itinerary Caption {{index + 1}} <span class='red'> *</span></label>
          <input type="text" v-model='tour.itinerary[index].caption' class='form-input' required>
          <span class='error' v-if='errors.itineraryImages'>{{errors.itineraryImages}}</span>
        </div>
        <a :disable='loading' href="#" @click='saveData' class='form-btn'>Save</a>
        <router-link to='/admin/dashboard/cities'>
          <a href='#' @click='deleteTourById' class='form-btn'>Delete</a>
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
  name: 'TourForm',
  props: ['id'],
  data() {
    return {
      tour:{
        linkName:'',
        imageName:'',
        imageCaption:'',
        caption:'',
        heading:'',
        priceMin:0,
        priceMax:0,
        holidayLength:1,
        holidayType:'',
        bestTimeToGo:'',
        formImage:'',
        status:'',
        highlightsCaption:'',
        highlightsImages:Array(4).fill(''),
        itinerary:Array(1).fill({heading:'',caption:'',image:''})
      },
      loading: false,
      msg: 'None',
      errors: {
        linkName:false,
        heading:false,
        imageName:false,
        imageCaption:false,
        caption:false,
        priceMin:false,
        priceMax:false,
        holidayLength:false,
        bestTimeToGo:false,
        formImage:false,
        itinerary: false,
        highlightsCaption:false,
        highlightsImages:false,
      }
    }
  },
  methods: {
    updateArrays() {
      while(this.tour.itinerary.length < this.tour.holidayLength) {
        this.tour.itinerary.push({caption:'',heading:'',image:''});
      }
    },
    deleteTourById(evt) {
      evt.preventDefault();
      this.$store.dispatch('deleteTour', this.tour.linkName);
    },
    saveData(evt) {
      evt.preventDefault();
      if (!this.validateForm()) {
        return;
      }
      this.tour.itinerary = this.tour.itinerary.slice(0,this.tour.holidayLength);

      this.loading=true;
      this.msg = 'Saving...';
      bus.$emit('loadStart', {msg:'Saving'});
      this.$store.dispatch('addTour',this.tour)
        .then(() => {
          this.loading = false;
          this.msg = 'Updated';
          bus.$emit('loadEnd');
          bus.$emit('notify', {msg:'Save Success'});
        })
        .catch((err) => {
          this.loading = false;
          this.msg = err;
          bus.$emit('loadEnd');
          bus.$emit('notify', {msg:'Save Failed'});
        });
    },
    validateForm() {
      let validate = true;
      if (this.tour.linkName == '') {
        this.errors.linkName = 'Link name cannot be empty.';
        validate = false;
      }
      else if(this.tour.linkName.includes(' ')) {
        this.errors.linkName = 'Link name cannot have spaces.';
      }
      else if(this.tour.linkName.length > 20) {
        this.errors.linkName = 'Link name cannot be longer than 20 characters.';
      }

      if (this.tour.heading == '') {
        this.errors.heading = 'Heading cannot be empty.';
        validate = false;
      }
      if (this.tour.imageName == '') {
        this.errors.imageName = 'Image name cannot be empty.';
        validate = false;
      }
      if (this.tour.imageCaption == '') {
        this.errors.imageCaption = 'Image caption cannot be empty.';
        validate = false;
      }
      if (this.tour.caption == '') {
        this.errors.caption = 'Caption cannot be empty.';
        validate = false;
      }
      else if(this.tour.caption.length > 300) {
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
