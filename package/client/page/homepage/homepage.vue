<template>
  <div class="homepage">{{ text }}</div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const data = reactive({
      text: 'welcome to vue-express-ts template project'
    });

    return {
      ...toRefs(data)
    };
  }
};
</script>

<style scoped>
.homepage {
  margin-top: 50px;
  text-align: center;
}
</style>
