import SwiftScroll from "./components/VueSwiftScroll.vue";

const VueSwiftScroll = {
 install(Vue) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("vue-swift-scroll", SwiftScroll);
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueSwiftScroll);
}

export default VueSwiftScroll;