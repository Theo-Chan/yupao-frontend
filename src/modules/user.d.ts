// 用户类别
type UserType = {
    id:number;
    username: string;
    userAccount : string;
    avataUrl? : string;
    profile ? :string;
    gender : number;
    phone : string;
    email : string;
    userStatus : number;
    userRole : number;
    palanetCode : string;
    tags :string[];
    createTime : Date;
};