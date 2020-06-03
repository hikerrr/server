<template lang="html">
  <div :class="{'panel-open' : !isCollapsed}" class='top-panel'>
    <div class="bars-wrapper">
      <div class='bars-container' @click='toggleNav'>
        <div class='bar-middle'></div>
      </div>
    </div>
    <div></div>
    <div class='settings-wrapper' @click='toggleSettings'>
      <i class='fa fa-cog settings-icon'></i>
      <div class="settings-panel" v-if='isSettingOpen'>
        <ul class="settings">
          <li>
            <router-link to='/notifications'>
              <a href="notifications">Notifications</a>
            </router-link>
          </li>
          <li>
            <router-link to='/profile'>
              <a href="profile">Profile</a>
            </router-link>
          </li>
          <li>
            <a href="/admin/logout">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopPanel',
  data() {
    return {
      isCollapsed: true,
      isSettingOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isCollapsed = !this.isCollapsed;
    },
    toggleSettings() {
      this.isSettingOpen = !this.isSettingOpen;
    }
  }
}
</script>

<style lang="css" scoped>
.top-panel {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 65px;
  background-color: #2f3136;
  display: grid;
  grid-template-columns: 80px 1fr 60px;
  box-shadow: 0 1px 0 rgba(4,4.5,0.2), 0 1.5px 0 rgba(6,6,7,0.05), 0 2px 0 rgba(4,4.5,0.05);
  z-index: 2;
}
.bars-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bars-container {
  position: relative;
  width: 54px;
  height: 54px;
  cursor: pointer;
  transition: transform 0.3s;
  z-index: 1;
}

.bar-middle
{
  position: absolute;
  top: calc(50% - 1px);
  left: calc(50% - 16px);
  width: 36px;
  height: 2px;
  background-color: #fafafa;
  transition: transform 0.7s;
}

.bar-middle::before, .bar-middle::after
{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: inherit;
  transition: transform 0.5s, width 0.5s, top 0.3s;
}

.bar-middle::before
{
  width: 90%;
  transform-origin: right top;
  transform: translateY(-6px);
}

.bar-middle::after
{
  width: 60%;
  transform-origin: right bottom;
  transform: translateY(6px);
}

.panel-open .bar-middle
{
  transform-origin: center;
  transform: rotate(45deg);
}

.panel-open .bar-middle::before
{
  width: 100%;
  transform-origin: center;
  transform: rotate(90deg);
}

.panel-open .bar-middle::after
{
  display: none;
}

.settings-wrapper, .logout-wrapper {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.settings-icon, .logout-icon {
  color: #fff;
  font-size: 32px;
}

@keyframes curtainDrop {
  from {
    transform-origin: top right;
    transform: scale(0);
  }
  to {
    transform-origin: top right;
    transform: scale(1);
  }
}

.settings-panel {
  position: absolute;
  top: 65px;
  right: 0;
  width: 200px;
  height: 200px;
  background-color: #40444b;
  color: #fff;
  box-shadow: 0px 8px 24px rgba(0,0,0,0.1);
  animation: curtainDrop 0.2s forwards;
}

.settings {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.settings li {
  margin: 0.5rem;
  display: block;
  text-align: center;
  width: 100%;
}

.settings li a {
  width: 100%;
  height: 100%;
  color: #aaa;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.settings li a:hover {
  color: #fff;
}

</style>
