<template>
  <component :is="component" />
</template>

<script lang="ts">
import Vue from "vue";
import { TOPICS } from "@/config/config";

export default Vue.extend({
  name: "Exercise",
  data() {
    return {
      component: TOPICS[this.$route.params.topic][this.$route.params.exercise]
    };
  }
});
</script>
