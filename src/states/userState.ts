// 设置一个在前端的缓存 存储用户信息不用每次都使用axios请求
let currentUser :UserType
const setCurrentUserState = (user:UserType) =>{
    currentUser = user
}
const getCurrentUserState = () =>{
    return currentUser
}
export  {
    setCurrentUserState,
    getCurrentUserState
}