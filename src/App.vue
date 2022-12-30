<template>
  <div class="header">
    <h1>Vue Swift Scroll</h1>
  </div>
  <div class="toolbar">

  </div>
  <div class="content">
    <SwiftScroll 
      :items=items
      :height=height
      :width=width
      :dir="vertical"
    ></SwiftScroll>
  </div>
  <div class="footer">

  </div>
</template>

<script>
import SwiftScroll from './components/VueSwiftScroll.vue'

export default {
  name: 'App',
  components: { SwiftScroll },
  data() {
    return {
      items: new Array(100000)
        .fill(null)
        .map((item, index) => "Item " + (index + 1)),
      height: 400,
      width: 800
    }
  },
  
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
#app {
  height: 100%;
}
body {
  min-height: 100%;
  height: 100%;
  font-family: "Noto Sans", "Tahoma", sans-serif;
  display: flex;
  flex-direction: column;
  color: rgba(0,0,0,0.6);
  padding: 1.25rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 2em;
}

.header h1 {
  text-align: center;
}

.toolbar {
  margin-bottom: 2em;
}
</style>
