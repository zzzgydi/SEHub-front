<template>
  <div>
    <simple-header title="其他"></simple-header>
    <div>
      <div class="bg">
        <div class="clock animation">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.bg {
  width: 100px;
  height: 100px;
  background-color: pink;
}

@keyframes hrhand {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.clock {
  width: 30px;
  height: 30px;
  background-color: transparent;
  box-shadow: inset 0px 0px 0px 2px #fff;
  border-radius: 50%;
  position: relative;
  // margin: 38px auto;
}

.clock:before {
  width: 10px;
  height: 2px;
  top: 15px;
  left: 15px;
  -webkit-transform-origin: 1px 1px;
  -moz-transform-origin: 1px 1px;
  transform-origin: 1px 1px;
  -webkit-animation: hrhand 8s linear infinite;
  -moz-animation: hrhand 8s linear infinite;
  animation: hrhand 8s linear infinite;
}

.clock:after {
  width: 14px;
  height: 2px;
  top: 15px;
  left: 15px;
  -webkit-transform-origin: 1px 1px;
  -moz-transform-origin: 1px 1px;
  transform-origin: 1px 1px;
  -webkit-animation: hrhand 2s linear infinite;
  -moz-animation: hrhand 2s linear infinite;
  animation: hrhand 2s linear infinite;
}

.clock:before, .clock:after {
  position: absolute;
  content: '';
  background-color: #fff;
}
</style>
