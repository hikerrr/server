<template lang="html">
  <div class="destination-form-wrapper">
    <div class="destination-form">
      <form class='form' @submit.prevent='uploadPhotos' method="post" enctype="multipart/form-data">
        <div class="form-field">
          <label for="linkName" class='form-label'>Low Resolution Photo <span class='red'> *</span></label>
          <input name='files[]' @change='changePhotoLres' type="file"  value="" class='form-input' required>
          <span class='error' v-if='errors.lres'>{{errors.lres}}</span>
        </div>
        <div class="form-field">
          <label for="linkName" class='form-label'>Medium Resolution Photo <span class='red'> *</span></label>
          <input type="file" name='files[]' @change='changePhotoMres' value="" class='form-input' required>
          <span class='error' v-if='errors.mres'>{{errors.mres}}</span>
        </div>
        <div class="form-field">
          <label for="linkName" class='form-label'>High Resolution Photo <span class='red'> *</span></label>
          <input type="file" name='files[]' @change='changePhotoHres' value="" class='form-input' required>
          <span class='error' v-if='errors.hres'>{{errors.hres}}</span>
        </div>
        <input type='submit' value='Upload' :disable='loading' class='form-btn'>
        <router-link to='/admin/dashboard/cities'>
          <a href='#' class='form-btn'>Back</a>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import bus from '../../EventBus';
export default {
  name: 'UploadPhotos',
  data() {
    return {
      loading:false,
      photos: Array(3).fill(null),
      errors: {
        lres:false,
        mres:false,
        hres:false
      }
    }
  },
  methods: {
    changePhotoLres(evt) {
      this.photos[0] = evt.target.files[0];
    },
    changePhotoMres(evt) {
      this.photos[1] = evt.target.files[0];
    },
    changePhotoHres(evt) {
      this.photos[2] = evt.target.files[0];
    },
    validate() {
      let validate = true;

      this.errors.lres = '';
      this.errors.mres = '';
      this.errors.hres = '';

      let lres_size = this.photos[0].size/1024/1024;
      let mres_size = this.photos[1].size/1024/1024;
      let hres_size = this.photos[2].size/1024/1024;

      let nameRegex = /\s+/ig;
      let imageRegex = /^image\/(jpeg|png|jpg|gif)$/ig;

      if(!imageRegex.test(this.photos[0].type)) {
        this.errors.lres += 'Only photos can be uploaded.\n';
      }

      if(!imageRegex.test(this.photos[1].type)) {
        this.errors.mres += 'Only photos can be uploaded.\n';
      }

      if(!imageRegex.test(this.photos[2].type)) {
        this.errors.hres += 'Only photos can be uploaded.\n';
      }

      if(nameRegex.test(this.photos[0].name)) {
        this.errors.lres += 'Photo names cannot have spaces and special characters. ';
      }

      if(nameRegex.test(this.photos[1].name)) {
        this.errors.mres += 'Photo names cannot have spaces and special characters. ';
      }

      if(nameRegex.test(this.photos[2].name)) {
        this.errors.hres += 'Photo names cannot have spaces and special characters. ';
      }

      if (lres_size > 0.4) {
        validate = false;
        this.errors.lres += `File size cannot be larger than 400KB. Current is about ${lres_size.toFixed(3) * 1024} KB`;
      }

      if (mres_size > 1) {
        validate = false;
        this.errors.mres += `File size cannot be larger than 800KB. Current is about ${mres_size.toFixed(3) * 1024} KB`;
      }

      if (hres_size > 2) {
        validate = false;
        this.errors.lres += `File size cannot be larger than 2MB. Current is about ${hres_size.toFixed(3) * 1024} KB`;
      }

      return validate;
    },
    uploadPhotos() {

      if(!this.validate()) return;

      this.errors.lres = false;
      this.errors.mres = false;
      this.errors.hres = false;

      let formData = new FormData();

      formData.append('photos', this.photos[0], `lres_${this.photos[0].name}`);
      formData.append('photos', this.photos[1], `mres_${this.photos[1].name}`);
      formData.append('photos', this.photos[2], `hres_${this.photos[2].name}`);

      this.loading = true;
      bus.$emit('loadStart',{msg:'Uploading...'});

      axios.post('/upload/photos',formData, {
        headers: {
          'Content-Type':'multipart/form-data'
        }
      })
        .then ((response) => {
          bus.$emit('loadEnd');
          this.loading = false;
          if(response.status === 201) {
            bus.$emit('notify', {msg:'Upload Success'});
          }
          else {
            bus.$emit('notify', {msg:'Upload Failed'});
          }
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          bus.$emit('loadEnd');
          bus.$emit('notify', {msg:'Upload Error.'});
        });
    }
  }
}
</script>

<style lang="css" scoped>
  input[type='submit'] {
    display: block;
    width: 100%;
    cursor: pointer;
  }
</style>
