<template>
  <div class="g-accordion" role="contentinfo">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    children: { required: false, default: " Example Accordion content " }
  },
  computed: {}
});
</script>
<style scoped>
.g-accordion {
  border: 1px solid red;
}
</style>
