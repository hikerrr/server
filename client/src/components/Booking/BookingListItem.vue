<template lang="html">
  <div class="booking-table-wrapper">
    <table class='booking-table'>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Gender</th>
        <th>Departure</th>
        <th>Discount Code</th>
      </tr>
      <tr v-for='(entry, index) in booking' :key='index'>
        <td>{{entry.firstName}}</td>
        <td>{{entry.lastName}}</td>
        <td>{{entry.email}}</td>
        <td>{{entry.phone}}</td>
        <td>{{entry.gender}}</td>
        <td>{{entry.departure}}</td>
        <td>{{entry.discountCode}}</td>
      </tr>
    </table>
    <button type="button" name="button" @click='downloadCsv'>Download CSV</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'BookingListItem',
  props: ['id'],
  computed: {
    booking() {
      let result = this.$store.getters.bookings;
      result = result.reduce((h, obj) => Object.assign(h, { [obj.title]:( h[obj.title] || [] ).concat(obj) }), {});
      return result[this.id];
    }
  },
  methods: {
    downloadCsv() {
      axios.get('/api/tours/' + this.id + '/bookings?format=csv')
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>

<style lang="css" scoped>
.booking-table-wrapper {
  overflow-x: auto;
}
table
{
  width: 100%;
}

table, th, td
{
  border-collapse: collapse;
  color: white;
}

th, td
{
  padding: 1rem;
  text-align: left;
}

tr:nth-of-type(odd) {
  background-color: #333;
}

tr:nth-last-of-type(even) {
  background-color: #222;
}

th {
  background-color: var(--color-white);
}


</style>
