<template>
  <div class="content-page">
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-5 col-md-6">
            <h4 class="dash-title">
              Nieuwe orders
              <span class="badge badge-pill badge-1">{{ stageCount1 }}</span>
            </h4>
            <div class="card-box dash-box">
              <DashLargeBox v-for="(data, i) in largeBoxData" :data="data" :key="i" />
            </div>
          </div>

          <div class="col-xl-5 col-md-6">
            <h4 class="dash-title">
              Picking orders
              <span class="badge badge-pill badge-2">{{ stageCount2 }}</span>
            </h4>
            <div class="card-box dash-box">
              <DashMidLgBox v-for="(data, i) in mediumBoxData" :data="data" :key="i" />
            </div>
          </div>

          <div class="col-xl-2 col-md-6">
            <h4 class="dash-title">
              Gereed
              <span class="badge badge-pill badge-3">{{ stageCount3 }}</span>
            </h4>
            <div class="card-box dash-box">
              <SmBlock v-for="(data, i) in smallBoxData" :data="data" :key="i" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashLargeBox from "../components/DashboardLeft/DashLargeBox";

import DashMidLgBox from "../components/DashboardMid/DashMidLgBox";

import SmBlock from "../components/DashboardRight/SmBlock";

import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      largeBoxData: [],
      mediumBoxData: [],
      smallBoxData: [],
      stageCount1: 0,
      stageCount2: 0,
      stageCount3: 0,
    }
  },
  components: {
    DashLargeBox,
    DashMidLgBox,
    SmBlock
  },
  created() {
    window.setInterval(() => {
      axios({
        url: "https://dashboard.demo.trackware.nl/example.json",
        method: "GET",
        data: {}
      })
        .then(res => {
          console.log(res);
          this.largeBoxData = res.data[0].items;
          this.mediumBoxData = res.data[1].items;
          this.smallBoxData = res.data[2].items;

          this.stageCount1 = res.data[0].count;
          this.stageCount2 = res.data[1].count;
          this.stageCount3 = res.data[2].count;
        })
        .catch(err => {
          console.log(err);
        });
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
// Box Styles
.dash-box {
    background: #F5F6F7;
    margin-top: 25px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    max-height: 1200px;
    &::-webkit-scrollbar  {
      width: 0px;
    }
}
</style>