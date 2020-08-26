<template>
    <div class="card-box inner-dash-box dlb-3">
    <h4 class="inner-dash-title">{{ blockData.title }}</h4>
    <div class="sm-row-wrap card-1-details">
      <div class="sm-row-wrap-child">
        <p class="subject">{{ blockData.subject }}</p>
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
    <div class="sm-row-wrap">

    </div>
  </div>
</template>

<script>
export default {
  name: 'SmBlock',
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      blockData: []
    }
  },
  created() {
    this.blockData = this.$props.data;
  },
  mounted() {
    const els = document.querySelectorAll('.dlb-3');
    const elsArr = [...els];
    window.setTimeout(() => {
      for (let i = 0; i < elsArr.length; i++) {
        elsArr[i].style = 'opacity: 1';
      }
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/dash-components/dash-large-box.scss";

.inner-dash-box {
    border-bottom: 2px solid #34C759;
}
.subject {
  text-align: left;
}

.dlb-3 {
  opacity: 0;
  transition: all .1s ease-in-out;
}
</style>