<template>
  <div class="homepage">{{ text }}</div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue';
import { http } from '../../service/axios';

export default {
  setup() {
    const data = reactive({
      text: ''
    });

    onMounted(async () => {
      const res = await http.get('/api/getHomepageData');
      const { description } = res.data.data;
      data.text = description;
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
