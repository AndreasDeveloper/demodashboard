<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/css/bootstrap.min.css';
@import './assets/css/icons.min.css';
@import './assets/css/app.min.css';

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:  #11171C;
}

body {
  margin-top: -50px;
}

html, body {
  background-color: #fff;
}

.content-page {
  margin-left: 0;
}

.sm-row-wrap {
  display: flex;
  justify-content: space-between;
  align-items: end;
  .sm-row-wrap-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}

.text-bold {
  font-weight: bold;
}

  // Title Styles
  .dash-title {
    color: #788090;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    // Badges
    .badge {
      font-size: 14px;
      margin-left: 5px;
    }
    .badge-1 {
      color: #ff9500;
      background-color: rgba(255, 149, 0, 0.123);
    }
    .badge-2 {
      color: #af52de;
      background-color: rgba(#af52de, 0.123);
    }
    .badge-3 {
      color: #34c759;
      background-color: rgba(#34c759, 0.123);
    }
  }
</style>
