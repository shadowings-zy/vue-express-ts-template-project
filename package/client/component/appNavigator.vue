<template>
  <div class="navigator">
    <div class="navigator-left">
      <div class="navigator-item" @click="handleSelect('0')">主页</div>
      <div class="navigator-item" @click="handleSelect('1')">关于</div>
    </div>
    <github-logo class="navigator-logo" @click="goGithub"></github-logo>
  </div>
</template>

<script lang="ts">
import { ROUTER_MAP } from '../router/constant';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import githubLogo from '../asset/github.svg';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const handleSelect = (routerIndex: string) => {
      store.commit('setRouterIndex', routerIndex);
      router.push(ROUTER_MAP[routerIndex]);
    };

    const goGithub = () => {
      window.open('https://github.com/shadowingszy');
    };
    return { handleSelect, goGithub };
  },
  components: { githubLogo }
};
</script>

<style scoped>
.navigator {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  height: 60px;
  border-bottom: 1px solid #ddd;
}
.navigator-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}
.navigator-item {
  width: 150px;
  margin-right: 24px;
  cursor: pointer;
}
.navigator-logo {
  margin: 18px 24px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
