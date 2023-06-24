  <template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
       autofocus
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <div>
    <van-divider v-if="activeIds == 0">请选择标签</van-divider>
  </div>
  <van-row gutter="20">
    <van-col v-for="tag in activeIds">
      <van-tag  :key = tag closeable  type="primary" @close="doClose(tag)">
        {{tag}}
      </van-tag>
    </van-col>
  </van-row>

<!--  可关闭标签 绑定下方选择-->


  <van-divider content-position="right">选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
    <div style="padding: 12px">
      <van-button block type="primary" @click="doSearchResult()">搜索 </van-button>
    </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {showToast} from "vant";
import {useRouter} from "vue-router";

const router = useRouter();
const originTagList = [
  {
    text: '性别',
    children: [
      { text: '男', id: "男" },
      { text: '女', id: "女" },
    ],
  },
  {
    text: '年级',
    children: [
      { text: '大一', id: "大一" },
      { text: '大二', id: "大二" },
      { text: '大三', id: "大三" },
      { text: '大四', id: "大四" },
    ],
  },
]
const searchText = ref('');
//搜索标签
const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag =>{
    const tempChildren = [...parentTag.children]; //克隆源数据，确保不更改
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value)); //
    return tempParentTag
  })
  showToast(val);}
//清除用法 : 将originTagList赋值回tagList
const onCancel = () => {
  showToast('取消');
  tagList.value = originTagList;
}
// 可关闭标签
const show = ref(true);
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter((item) =>{
    return  tag !== item
  })
};
// treeselect
const activeIds = ref([]);  //右侧默认选中为空
const activeIndex = ref(0); //左侧默认选择为tagList对象的第一个
// 将tagList封装成ref
// todo 根据后端数据更改
const tagList =ref([
  {
    text: '性别',
    children: [
      { text: '男', id: "男" },
      { text: '女', id: "女" },
    ],
  },
  {
    text: '年级',
    children: [
      { text: '大一', id: "大一" },
      { text: '大二', id: "大二" },
      { text: '大三', id: "大三" },
      { text: '大四', id: "大四" },
    ],
  },
])
/*
* 执行搜索
* 使用 query传值 简单
* */
const doSearchResult = () =>{
router.push(
    {
      path:"/user/list",
      query:{
        tags :activeIds.value
      }
    }
)
}
</script>

<style scoped>

</style>