import ajax from './ajax'
export default {
    login : (data)=> ajax('/admin/login/login',data,'POST'), //登录接口

}