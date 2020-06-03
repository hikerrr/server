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
          <label for="heading" class='form-label'>Cities <span class='red'> *</span></label>
          <div class="cities">
            <label v-for='(city) in cities' :key='city._id'>
              <input type="checkbox" name='cities[]' :checked="isCityPresent(city.linkName)?true:false" :value="city._id" class='form-checkbox'>
                <span class='checkbox-label'>{{city.heading}}</span>
            </label>
          </div>
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
export default {
  name: 'DestinationForm',
  props: ['id'],
  data() {
    return {
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
    cities() {
      return this.$store.getters.cities;
    },
    destination() {
      return this.$store.getters.destById(this.id);
    }
  },
  methods: {
    isCityPresent(id) {
      for(let i = 0; i < this.destination.cities.length; i++) {
        if(this.destination.cities[i].linkName === id) {
          return true;
        }
      }
      return false;
    },
    saveData(evt) {
      evt.preventDefault();
      if (!this.validateForm()) {
        return;
      }
      let cities = [];
      let cityOptions = document.getElementsByName('cities[]');
      for(let i = 0; i < cityOptions.length; i++) {
        if(cityOptions[i].checked) cities.push(cityOptions[i]._value);
      }
      let backup = this.destination.cities;
      this.destination.cities = cities;
      this.loading=true;
      this.msg = 'Saving...';
      this.$store.dispatch('updateDestination',this.destination)
        .then(() => {
          this.loading = false;
          this.msg = 'Updated';
        })
        .catch((err) => {
          this.destination.cities = backup;
          this.loading = false;
          this.msg = err;
        })
    },
    validateForm() {
      let validate = true;
      if (this.destination.linkName == '') {
        this.errors.linkName = 'Link name cannot be empty.';
        validate = false;
      }
      else if(this.destination.linkName.includes(' ')) {
        this.errors.linkName = 'Link name cannot have spaces.';
      }
      else if(this.destination.linkName.length > 20) {
        this.errors.linkName = 'Link name cannot be longer than 20 characters.';
      }

      if (this.destination.heading == '') {
        this.errors.heading = 'Heading cannot be empty.';
        validate = false;
      }
      if (this.destination.imageName == '') {
        this.errors.imageName = 'Image name cannot be empty.';
        validate = false;
      }
      if (this.destination.imageCaption == '') {
        this.errors.imageCaption = 'Image caption cannot be empty.';
        validate = false;
      }
      if (this.destination.caption == '') {
        this.errors.caption = 'Caption cannot be empty.';
        validate = false;
      }
      else if(this.destination.caption.length > 300) {
        this.errors.caption = 'Caption cannot be longer than 300 characters.';
        validate = false;
      }
      return validate;
    }
  }
}
</script>

<style lang="css" scoped>

  .border-red {
    border: 1px solid red;
  }

  .error {
    color: red;
    margin: 0.5rem 0;
    letter-spacing: 1px;
    font-weight: bold;
    display: block;
    font-size: 12px;
  }

  .destination-form-wrapper {
    width: 100%;
    height: 100%;
  }
  .destination-form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .cities {
    display: grid;
    grid-column-gap: 4px;
    grid-row-gap: 8px;
    grid-template-columns: repeat(2,1fr);
  }
  .form-checkbox {
    margin-right: 5px;
  }
  .checkbox-label {
    color:#fff;
  }
  .form-area {
    width: 100%;
    min-height: 340px;
    outline: none;
    border: none;
    padding: 0.5rem;
    color: #555;
    background-color: #40444b;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 1px;
    color: #cdcdd0;

  }
  .form {
    max-width: 640px;
    width: 100%;
  }
  .form-field {
    position: relative;
    margin: 2.5rem 0;
  }
  .form-btn {
    display: block;
    text-align: center;
    border: 1px solid #555;
    padding: 22px 24px;
    margin: 12px 4px 12px 0;
    transition: all 0.3s ease;
    color: #fff;
    background-color: #7289da;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .form-btn:hover {
    background-color: #555;
    color: white;
  }
  .form-label, .form-input {
    display: block;
    font-weight: bold;
  }
  .form-label {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
    color: #fff;
    margin-bottom: 8px;
    display: flex;
  }
  .red {
    color: red;
  }
  .form-input {
    height: 51px;
    width: 100%;
    border: none;
    color: #cdcdd0;
    background-color: #40444b;
    font-size: 14px;
    padding: 14px 20px;
    border-radius: 5px;
    outline: none;
  }
  .search-wrapper {
    width: 100%;
  }
  .search-list {
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .search-list-item {
    margin: 12px 0;
    width: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .search-btn {
    border: 1px solid #555;
    padding: 6px 12px;
  }

  @media screen and (min-width:576px) {
    .form {
      grid-template-columns: repeat(2,1fr);
    }
    .cities {
      display: grid;
      grid-template-columns: repeat(3,1fr);
    }
  }

  @media screen and (min-width:768px) {
    .form {
      grid-template-columns: repeat(3,1fr);
    }
    .cities {
      display: grid;
      grid-template-columns: repeat(4,1fr);
    }
  }

  @media screen and (min-width:1200px) {
    .form {
      grid-template-columns: repeat(4,1fr);
    }
  }
</style>
