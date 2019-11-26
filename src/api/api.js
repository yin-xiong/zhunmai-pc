import ajax from './ajax'
export default {
    send_msg : (data)=> ajax('/home/login/send_msg',data,'POST'), // 发送验证码
    register : (data)=> ajax('/home/login/register',data,'POST'), // 注册
    login : (data)=> ajax('/home/login/login',data,'POST'), // 登录

}