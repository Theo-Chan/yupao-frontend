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
import {Ref, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";
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
  const res = await myAxios.post('/user/update',{
    // todo 登录获取当前用户id
    'id' : 234,
    // [] 方式是动态变量名
    [editUser.value.editKey] : editUser.value.currentValue
  })
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