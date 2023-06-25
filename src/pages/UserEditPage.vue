<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请修改${editUser.editName}`"
          :rules="[{ required: true, message: '不能为空' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {onMounted, Ref, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";
import {getCurrentUser} from "../services/user";
import {getCurrentUserState} from "../states/userState.ts";
const router = useRouter();
const route = useRoute();
// 封装一个响应式对象
const editUser:Ref = ref({
  editKey:route.query.editKey,
  currentValue:route.query.currentValue,
  editName:route.query.editName,
})
console.log(route.query.editKey)

const onSubmit =async () => {
  // getCurrentUser为异步操作 使用await拿到对象
  const currrentUser = await getCurrentUser();
  if (!currrentUser)
  {
    showFailToast("用户未登录")
    return;
  }
  const res = await myAxios.post('/user/update',{
    'id' : currrentUser.id,
    // [] 方式是动态变量名
    [editUser.value.editKey] : editUser.value.currentValue
  })
  // @ts-ignore
  if (res.code === 0 && res.data > 0 )
  {
    showSuccessToast('修改成功')
    router.back();
  }
  else showFailToast('修改失败')
  console.log(editUser.value.currentValue)
};
</script>

<style scoped>

</style>