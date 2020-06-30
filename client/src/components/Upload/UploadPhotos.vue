<template lang="html">
  <div class="destination-form-wrapper">
    <div class="destination-form">
      <form class='form' @submit.prevent='uploadPhotos' method="post" enctype="multipart/form-data">
        <div class="form-field">
          <label for="linkName" class='form-label'>Low Resolution Photo <span class='red'> *</span></label>
          <image-uploader
            required
            class="form-input"
            :debug="1"
            :maxWidth="300"
            :quality="0.5"
            :autoRotate=true
            outputFormat="verbose"
            :preview=false
            :capture="false"
            accept="image/*"
            doNotResize="['gif', 'svg']"
            @input="changePhotoLres"
            @onUpload="startImageResize"
            @onComplete="endImageResize"
        ></image-uploader>
          <span class='error' v-for='error in errors.lres' :key='error'>{{error}}</span>
        </div>
        <div class="form-field">
          <label for="linkName" class='form-label'>Medium Resolution Photo <span class='red'> *</span></label>
          <image-uploader
            required
            class="form-input"
            :debug="1"
            :maxWidth="1024"
            :quality="0.7"
            :autoRotate=true
            outputFormat="verbose"
            :preview=false
            :capture="false"
            accept="image/*"
            doNotResize="['gif', 'svg']"
            @input="changePhotoMres"
            @onUpload="startImageResize"
            @onComplete="endImageResize"
        ></image-uploader>
          <span class='error' v-for='error in errors.mres' :key='error'>{{error}}</span>
        </div>
        <div class="form-field">
          <label for="linkName" class='form-label'>High Resolution Photo <span class='red'> *</span></label>
          <image-uploader
            required
            class="form-input"
            :debug="1"
            :maxWidth="1920"
            :quality="0.7"
            :autoRotate=true
            outputFormat="verbose"
            :preview=false
            :capture="false"
            accept="image/*"
            doNotResize="['gif', 'svg']"
            @input="changePhotoHres"
            @onUpload="startImageResize"
            @onComplete="endImageResize"
        ></image-uploader>
          <span class='error' v-for='error in errors.hres' :key='error'>{{error}}</span>
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
import ImageUploader from 'vue-image-upload-resize';

export default {
  name: 'UploadPhotos',
  components: {
    ImageUploader
  },
  data() {
    return {
      loading:false,
      photos: Array(3).fill(null),
      errors: {
        lres:[],
        mres:[],
        hres:[]
      }
    }
  },
  methods: {
    startImageResize() {
      this.loading = true;
      bus.$emit('loadStart',{msg:'Resizing...'});
    },
    endImageResize() {
      bus.$emit('loadEnd');
      this.loading = false;
    },
    changePhotoLres(lres) {
      this.photos[0] = lres;
    },
    changePhotoMres(mres) {
      this.photos[1] = mres;
    },
    changePhotoHres(hres) {
      this.photos[2] = hres;
    },
    dataURLToBlob(dataURL) {
    const BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        let parts = dataURL.split(',');
        let contentType = parts[0].split(':')[1];
        let raw = parts[1];

        return new Blob([raw], {type: contentType});
    }

    let parts = dataURL.split(BASE64_MARKER);
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;

    let uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], {type: contentType});
  },
    validate() {
      let validate = true;

      this.errors.lres = [];
      this.errors.mres = [];
      this.errors.hres = [];

      if (!this.photos[0]) {
        this.errors.lres.push('Required');
        validate = false;
      }

      if (!this.photos[1]) {
        this.errors.mres.push('Required');
        validate = false;
      }

      if (!this.photos[2]) {
        this.errors.hres.push('Required');
        validate = false;
      }

      let nameRegex = /[ \n\t\r]+/g;
      let imageRegex = /^image\/(jpeg|png)$/g;

      this.photos.forEach(p => console.log(p.info.type));

      if(!this.photos[0].info.type.match(imageRegex)) {
        this.errors.lres.push('Only (jpg|png) images can be uploaded. Make sure the extension (jpg|png) are in lowercase');
        validate = false;
      }

      if(!this.photos[1].info.type.match(imageRegex)) {
        this.errors.mres.push('Only (jpg|png) images can be uploaded. Make sure the extension (jpg|png) are in lowercase');
        validate = false;
      }

      if(!this.photos[2].info.type.match(imageRegex)) {
        this.errors.hres.push('Only (jpg|png) images can be uploaded. Make sure the extension (jpg|png) are in lowercase');
        validate = false;
      }

      if(this.photos[0].info.name.match(nameRegex)) {
        this.errors.lres.push('Photo names cannot have spaces.');
        validate = false;
      }

      if(this.photos[1].info.name.match(nameRegex)) {
        this.errors.mres.push('Photo names cannot have spaces.');
        validate = false;
      }

      if(this.photos[2].info.name.match(nameRegex)) {
        this.errors.hres.push('Photo names cannot have spaces.');
        validate = false;
      }

      if(!(this.photos[0].info.name === this.photos[1].info.name
      && this.photos[1].info.name === this.photos[2].info.name)) {
        this.errors.hres.push('Please upload same image in all slots');
        this.errors.mres.push('Please upload same image in all slots');
        this.errors.lres.push('Please upload same image in all slots');
        validate = false;
      }

      return validate;
    },
    uploadPhotos() {

      if(!this.validate()) return;

      this.errors.lres = [];
      this.errors.mres = [];
      this.errors.hres = [];

      let formData = new FormData();

      formData.append('photos', this.dataURLToBlob(this.photos[0].dataUrl), `lres_${this.photos[0].info.name}`);
      formData.append('photos', this.dataURLToBlob(this.photos[1].dataUrl), `mres_${this.photos[1].info.name}`);
      formData.append('photos', this.dataURLToBlob(this.photos[2].dataUrl), `hres_${this.photos[2].info.name}`);

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
  .error {
    display: block;
  }
</style>
