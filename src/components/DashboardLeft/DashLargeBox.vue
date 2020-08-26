<template>
  <div class="card-box inner-dash-box dlb" @click="toggleAccordion(blockData)">
    <h4 class="inner-dash-title">{{ blockData.title }}</h4>
    <div class="sm-row-wrap card-1-details">
      <div class="sm-row-wrap-child">
        <p>{{ blockData.subject }}</p>
      </div>
      <div class="sm-row-wrap-child">
        <svg
          class="dash-i-box"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 12V2H5.5H3V5.33333V8.66667V12H13Z"
            stroke="#788090"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.75 14.5C5.16421 14.5 5.5 14.1642 5.5 13.75C5.5 13.3358 5.16421 13 4.75 13C4.33579 13 4 13.3358 4 13.75C4 14.1642 4.33579 14.5 4.75 14.5Z"
            stroke="#788090"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.75 14.5C11.1642 14.5 11.5 14.1642 11.5 13.75C11.5 13.3358 11.1642 13 10.75 13C10.3358 13 10 13.3358 10 13.75C10 14.1642 10.3358 14.5 10.75 14.5Z"
            stroke="#788090"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>{{ blockData.count }}</span>
      </div>
    </div>
    <div v-if="blockData.show_details">
    <div class="sm-row-wrap">
      <div class="table-responsive">
        <table class="table table-bordered mb-0 dash-table">
          <tbody>
            <tr class="cont-el" v-for="(container, i) in blockData.containers" :key="i">
              <td class="table-data" :class="`table-td-${i}`" >
                <div v-for="(containerData, i) in container" :key="i">
                  <span>{{ containerData.name }}</span>
                  <span class="text-bold">{{ containerData.count }}</span>
                </div>
              </td>
            </tr>
            <tr v-for="(containerCustom, i) in blockData.custom" :key="i">
            <td class="table-data table-data-2" :class="`table-td-${i}`" v-if="blockData.custom">
                <div v-for="(customData, i) in containerCustom" :key="i">
                  <span>{{ customData.name }}</span>
                  <span class="text-bold">{{ customData.count }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="sm-row-wrap text-wrap" v-if="blockData.note">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z"
          stroke="#FF9500"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p>{{ blockData.note }}</p>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DashLargeBox",
  data() {
    return {
      blockData: []
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  created() {
    this.blockData = this.$props.data;
  },
  mounted() {
    // const els1 = document.querySelectorAll('.table-td-0');
    // const arrEls1 = [...els1];
    // for (let j = 0; j < arrEls1.length; j++) {
    //   arrEls1[j].style = 'border-radius: 5px 0px 0px 5px';
    // }
    // const els2 = document.querySelectorAll(`.table-td-${this.blockData.containers.length - 1}`);
    // const arrEls2 = [...els2];
    // for (let k = 0; k < arrEls2.length; k++) {
    //   arrEls2[k].style = 'border-radius: 0px 5px 5px 0px';
    // }

    const els = document.querySelectorAll('.dlb');
    const elsArr = [...els];
    window.setTimeout(() => {
      for (let i = 0; i < elsArr.length; i++) {
        elsArr[i].style = 'opacity: 1';
      }
    }, 1000);

  }, 
  methods: {
    toggleAccordion(data) {
      data.show_details = !data.show_details;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/dash-components/dash-large-box.scss";

.cont-el {
  margin: 10px 0;
}

tbody {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.table-data-2 {
  height: auto !important;
}

.dlb {
  opacity: 0;
  transition: all .1s ease-in-out;
}
</style>