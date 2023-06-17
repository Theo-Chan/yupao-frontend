 <template>
  <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
  </van-nav-bar>
  <div name = "content">
      <router-view/>
  </div>

  <van-tabbar v-model="active" @change="onChange" route>
    <van-tabbar-item icon="home-o" to="/" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/team" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/user" name="user">个人</van-tabbar-item>
  </van-tabbar>

</template>

<script setup lang="ts">
import { showToast } from 'vant';
import {ref} from "vue";
import Index from "../pages/index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/UserPage.vue";
import {useRouter} from "vue-router";
// import 'vant/es/toast/style'
const router = useRouter();
const onClickLeft = () => {
  history.back();
}
const onClickRight = () => {
  showToast('搜索')

  router.push({name:"search"})
};
const active = ref("index"); //通过active确认当前所在的地方  也可以赋予默认值
const onChange = (index) => showToast(` ${index}`);
</script>

<style scoped>

</style>