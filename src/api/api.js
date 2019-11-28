import ajax from './ajax'
export default {
    send_msg : (data)=> ajax('/home/login/send_msg',data,'POST'), // 发送验证码
    register : (data)=> ajax('/home/login/register',data,'POST'), // 注册
    login : (data)=> ajax('/home/login/login',data,'POST'), // 登录

    homepage : ()=> ajax('/home/api/homepage','GET'), // 首页
    ads : ()=> ajax('/home/api/ads','GET'), // 首页公告
    adsdetails : (data)=> ajax('/home/api/adsdetails',data,'POST'), // 公告详情

    officialwebsite : ()=> ajax('/home/website/officialwebsite','GET'), // 官方代售
    personalwebsite : ()=> ajax('/home/website/personalwebsite','GET'), // 网站交易
    officialwebsitesort : (data)=> ajax('/home/website/officialwebsitesort',data,'POST'), // 官方代售条件排序
    websitedetails : (data)=> ajax('/home/website/websitedetails',data,'POST'), // 网站详情

}