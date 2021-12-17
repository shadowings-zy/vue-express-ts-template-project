<template>
  <div>
    <app-navigator></app-navigator>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import appNavigator from './component/appNavigator.vue';
import { onMounted, reactive, toRefs } from 'vue';

const MIN_WIDTH = 750;

export default {
  components: { appNavigator },
  setup() {
    const data = reactive({
      viewValid: true,
      minWidth: MIN_WIDTH
    });

    onMounted(() => {
      window.addEventListener('resize', () => {
        if (document.body.clientWidth < MIN_WIDTH && data.viewValid) {
          data.viewValid = false;
        } else if (document.body.clientWidth >= MIN_WIDTH && !data.viewValid) {
          data.viewValid = true;
        }
      });
    });

    return {
      ...toRefs(data)
    };
  }
};
</script>

<style scoped>
.router-view {
  width: 100%;
  height: calc(100vh - 61px);
  overflow: auto;
}
</style>
