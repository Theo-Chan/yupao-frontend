import myAxios from "../plugins/myAxios";
import {getCurrentUserState, setCurrentUserState} from "../states/userState";
// 定义一个方法获取当前用户
export const getCurrentUser = async () =>{
    // todo 注释中的内容是使用缓存技术在用户量大的时候可以减少服务器压力，
    //  但是如果不在可以改变用户状态的页面即时更新缓存中值会导致用户看到的信息不能实时更新
    // 获得用户信息
    const currentUser = getCurrentUserState();
    // 不为空 从前端取得
    // if (currentUser)
    // {
    //     return currentUser;
    // }
    // 为空则从后端获得
    const res = await myAxios.get('user/current')
    // 响应成功
    // @ts-ignore
    if (res.code === 0)
    {
        // 将用户信息存到前端缓存
        setCurrentUserState(res.data)
        // 返回取得的对象
        return res.data
    }
    // 响应码不为0（不成功响应）返回空
    return null;
}