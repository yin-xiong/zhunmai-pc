<template>
    <div class="problem">
        <div class="more-problem">
            <div class="more-problem-questions">
                <h3>常见问题</h3>
                <p>asked & QUESTIONS</p>
                <router-link :to="{path:'/problems',query:{id:1}}">更多 <i class="iconfont icon-youbianjiantou"></i></router-link>
            </div>
            <div class="more-problem-list after">
                <div class="">
                    <div>
                        <img src="../../../assets/image/icon/icon_question.png" alt="">
                        <span>如何购买网站</span>
                    </div>
                    <div>
                        <img src="../../../assets/image/icon/icon_answer.png" alt="">
                        <span>您可以通过在线注册，验证一下邮箱，注册即可。注册成功后，您可以进行实名认证，因为提现时必须是实名的。</span>
                    </div>
                </div>
                <div class="">
                    <div>
                        <img src="../../../assets/image/icon/icon_question.png" alt="">
                        <span>网站建设之前我们应该要了…</span>
                    </div>
                    <div>
                        <img src="../../../assets/image/icon/icon_answer.png" alt="">
                        <span>为了提高域名交易的安全性，zhongjie.com需要每一位用户进行实名认证。请在注册后上传您的有效证件照片（驾照、身份证或者护照和手执证件照）…</span>
                    </div>
                </div>
                <div class="">
                    <div>
                        <img src="../../../assets/image/icon/icon_question.png" alt="">
                        <span>网站建设之前我们应该要了…</span>
                    </div>
                    <div>
                        <img src="../../../assets/image/icon/icon_answer.png" alt="">
                        <span>为了提高域名交易的安全性，zhongjie.com需要每一位用户进行实名认证。请在注册后上传您的有效证件照片（驾照、身份证或者护照和手执证件照）…</span>
                    </div>
                </div>
                <router-link to="">
                    <img src="../../../assets/image/icon/zhunmai_evaluate.gif" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"problem",
        data(){
            return{

            }
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .problem{
        .more-problem{
            height: 410px;
        }
        .more-problem-questions{
            background:linear-gradient(0deg,rgba(250,102,38,1) 0%,rgba(255,163,38,1) 100%);
            color: #fff;
            width: 24%;
            height: 100%;
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
            padding-left: 55px;
            overflow: hidden;
        }
        .more-problem-questions h3{
            font-size: 30px;
            margin-top: 80px;
        }
        .more-problem-questions p{
            font-size: 14px;
            margin-top: 18px;
            text-transform: uppercase;
        }
        .more-problem-questions>a{
            display: block;
            width: 110px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            background: rgba(255, 255, 255, 0.4);
            border-radius:15px;
            margin-top: 50px;
        }
        .more-problem-list{
            position: relative;
        }
        .more-problem-list{
            float: right;
            width: 75%;
            height: 100%;
            overflow: hidden;
        }
        .more-problem-list>div{
            display: inline-block;
            vertical-align: top;
            width: 49.5%;
            min-height: 200px;
            background-color: #fff;
            box-sizing: border-box;
            padding: 20px;
        }
        .more-problem-list>div:first-child{
            margin-bottom: 10px;
        }
        .more-problem-list>div:nth-child(2){
            float: right;
            height: 210px;
        }
        .more-problem-list>div>div img{
            font-size: 0;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
        }
        .more-problem-list>div>div:first-child{
            margin-bottom: 20px;
        }
        .more-problem-list>div>div span{
            display: inline-block;
            width: 350px;
            vertical-align: top;
            font-size: 14px;
            color: #666;
        }
        .more-problem-list>a{
            float: right;
            width: 49.5%;
            height: 200px;
        }
    }
</style>