<template lang="html">
  <div class="destination-list-wrapper">
    <div class="destination-list">
      <router-link v-for='(booking,name) in bookings' :key='booking.name' :to="'/admin/dashboard/bookings/' + name">
      <div class="list-item-wrapper">
          <div class="list-item">
            <div class="list-item-name">
              <a href="#">{{name}}</a>
            </div>
          </div>
      </div>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingList',
  computed: {
    bookings() {
      let result = this.$store.getters.bookings;
      result = result.reduce((h, obj) => Object.assign(h, { [obj.title]:( h[obj.title] || [] ).concat(obj) }), {});
      return result;
    }
  }
}
</script>

<style lang="css" scoped>

  .destination-list-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .destination-list {
    padding: 1rem;
    display: grid;
    grid-gap: 7px;
    grid-template-columns: 1fr;
  }

  .add-btn-wrapper {
    position: fixed;
    right: 40px;
    top: 90vh;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    background-color: #fafafa;
  }

  .add-btn {
    display: block;
    font-size: 24px;
    color: #555;
  }

  .list-item-wrapper {
    width: 100%;
    height: 65px;
    cursor: pointer;
    transition: all 0.4s ease;
    background-color: #40444b;
    border-radius: 4px;
  }
  .list-item-wrapper:hover {
    background-color: #1b262c;
  }
  .list-item {
    padding: 0 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .list-item-name a {
    letter-spacing: 1px;
    font-size: 16px;
    color: #fff;
  }
  .list-item-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .list-item-option {
    margin: 0 5px;
  }

  .list-item-option i {
    color: #bbe1fa;
    font-size: 22px;
  }



  @media screen and (min-width:576px) {
    .destination-list {
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media screen and (min-width:768px) {
    .destination-list {
      grid-template-columns: repeat(3,1fr);
    }
  }

  @media screen and (min-width:1200px) {
    .destination-list {
      grid-template-columns: repeat(4,1fr);
    }
  }

</style>
