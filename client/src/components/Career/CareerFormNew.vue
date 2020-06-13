<template lang="html">
  <div class="destination-form-wrapper">
    <div class="destination-form">
      <form class="form">
        <div class="form-field">
          <label for="linkName" class='form-label'>Link Name <span class='red'> *</span></label>
          <input :class="{'border-red' : errors.linkName}" v-model='career.linkName' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.linkName'>{{errors.linkName}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Name <span class='red'> *</span></label>
          <input v-model='career.name' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.name'>{{errors.name}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Experience <span class='red'> *</span></label>
          <input v-model='career.experience' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.experience'>{{errors.experience}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Functional Areas <span class='red'> *</span></label>
          <input v-model='career.functionalAreas' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.functionalAreas'>{{errors.functionalAreas}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Mail Subject <span class='red'> *</span></label>
          <input v-model='career.mailSubject' type="text" name="" value="" class='form-input' required>
          <span class='error' v-if='errors.mailSubject'>{{errors.mailSubject}}</span>
        </div>
        <div class="form-field">
          <label for="heading" class='form-label'>Description <span class='red'> *</span></label>
          <textarea v-model='career.description' type="text" name="" value="" class='form-area' required></textarea>
          <span class='error' v-if='errors.description'>{{errors.description}}</span>
        </div>
        <a :disable='loading' href="#" @click='saveData' class='form-btn'>Save</a>
        <router-link to='/admin/dashboard/careers'>
          <a href="/admin/dashboard/careers" class='form-btn'>Back</a>
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
  name: 'CareerFormNew',
  props: ['id'],
  data() {
    return {
      career: {
        linkName:'',
        name:'',
        description:'',
        functionalAreas:'',
        experience:'',
        mailSubject:''
      },
      loading: false,
      msg: 'None',
      errors: {
        linkName:false,
        name:false,
        description:false,
        functionalAreas:false,
        experience:false,
        mailSubject:false
      }
    }
  },
  methods: {
    saveData(evt) {
      evt.preventDefault();
      if (!this.validateForm()) {
        return;
      }
      this.loading=true;
      this.msg = 'Saving...';
      bus.$emit('loadStart', {msg:'Saving'});
      this.$store.dispatch('addCareer',this.career)
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
      if (this.career.linkName == '') {
        this.errors.linkName = 'Link name cannot be empty.';
        validate = false;
      }
      else if(this.career.linkName.includes(' ')) {
        this.errors.linkName = 'Link name cannot have spaces.';
      }
      else if(this.career.linkName.length > 20) {
        this.errors.linkName = 'Link name cannot be longer than 20 characters.';
      }

      if (this.career.name == '') {
        this.errors.name = 'Name cannot be empty.';
        validate = false;
      }
      if (this.career.experience == '') {
        this.errors.experience = 'Experience name cannot be empty.';
        validate = false;
      }
      if (this.career.description == '') {
        this.errors.description = 'Description caption cannot be empty.';
        validate = false;
      }
      else if(this.career.description.length > 300) {
        this.errors.description = 'Description cannot be longer than 300 characters.';
        validate = false;
      }
      if (this.career.functionalAreas == '') {
        this.errors.functionalAreas = 'Functional Areas cannot be empty.';
        validate = false;
      }
      if (this.career.mailSubject == '') {
        this.errors.mailSubject = 'Mail Subject cannot be empty.';
        validate = false;
      }
      return validate;
    }
  }
}
</script>

<career lang="css" scoped>
</career>
