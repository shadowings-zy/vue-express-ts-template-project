<template>
  <div class="user">
    <div v-for="(item, index) in userList" :key="`user-${index}`">
      用户名: {{ item.username }} 邮箱: {{ item.email }}
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue';
import { http } from '../../service/axios';

export default {
  setup() {
    const data = reactive({
      userList: []
    });

    onMounted(async () => {
      const res = await http.get('/api/user');
      data.userList = res.data.data;
    });

    return {
      ...toRefs(data)
    };
  }
};
</script>

<style scoped>
.user {
  margin-top: 50px;
  text-align: center;
}
</style>
