<template lang="html">
  <div class="navigation-panel">
    <ul>
      <li>
        <router-link to='/admin/dashboard/destinations'>
          <a href="/admin/dashboard/destinations">
            <i class="fa fa-home"></i>
            <span>Destinations</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to='/admin/dashboard/cities'>
          <a href="/admin/dashboard/cities">
            <i class="fa fa-building"></i>
            <span>Cities</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to='/admin/dashboard/bookings'>
          <a href="/admin/dashboard/bookings">
            <i class="fa fa-address-card"></i>
            <span>Bookings</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to='/admin/dashboard/styles'>
          <a href="/admin/dashboard/styles">
            <i class="fa fa-map"></i>
            <span>Trip Styles</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to='/admin/dashboard/tours'>
          <a href="/admin/dashboard/tours">
            <i class="fa fa-bus"></i>
            <span>Tours</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to='/admin/dashboard/blogs'>
          <a href="/admin/dashboard/blogs">
            <i class="fa fa-book"></i>
            <span>Blogs</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to='/admin/dashboard/analytics'>
          <a href="/admin/dashboard/analytics">
            <i class="fa fa-tree"></i>
            <span>Site Analytics</span>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to='/admin/dashboard/upload'>
          <a href="/admin/dashboard/upload">
            <i class="fa fa-upload"></i>
            <span>Uploads</span>
          </a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationPanel'
}
</script>

<style lang="css" scoped>

  .navigation-panel {
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 90%;
    width: 100%;
    min-height: calc(100% - 65px);
    background-color: #2f3136;
    box-shadow: 1px 0 0 rgba(4,4.5,0.2), 1.5px 0 0 rgba(6,6,7,0.05), 2px 0 0 rgba(4,4.5,3,0.05);
    z-index: 1;
    transform: translateX(-100%);
    transition: transform 0.4s ease;
  }

  .navigation-panel ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .navigation-panel ul li:nth-child(1) {
    margin-top: 25px;
  }

  .navigation-panel ul li {
    width: 100%;
    height: 48px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-panel-active {
    background-color: #eee;
  }

  .navigation-panel ul li a {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #40444b;
  }

  .navigation-panel ul li a:focus {
  }

  .navigation-panel ul li a span {
    margin-left: 12px;
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    display: none;
  }

  .navigation-panel ul li i {
    color: #eee;
    font-size: 24px;
  }


  .panel-open ~ .navigation-panel {
    transform: translateX(0);
  }

  .panel-open ~ .navigation-panel ul li a {
    width: 80%;
    justify-content: flex-start;
  }

  .panel-open ~ .navigation-panel ul li a span {
    display: inline-block;
  }

  @media screen and (min-width:768px) {
    .navigation-panel {
      display: block;
      width: 80px;
      transform: translateX(0);
      max-width: 340px;
      transition: width 0.4s ease;
    }
    .panel-open ~ .navigation-panel {
      width: 340px;
    }
  }

</style>
