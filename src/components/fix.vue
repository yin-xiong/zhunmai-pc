<template>
    <div class="fixedContent">
        <div class="fixedNav">
            <a>
                <i class="iconfont icon-kefu"></i>
                <div>我是客服</div>
            </a>
            <a>
                <i class="iconfont icon-ico"></i>
                <div>我是二维码</div>
            </a>
            <a>
                <i class="iconfont icon-jianyi"></i>
                <div>我是编辑</div>
            </a>
            <a v-if="btnFlag" class="go-top" @click="backTop">
                <i class="iconfont icon-up"></i>
            </a>

        </div>

    </div>
</template>
<script>
    export default {
        name:'fixed',
        data(){
            return{
                btnFlag:false
            }
        },
        mounted () {
            window.addEventListener('scroll', this.scrollToTop)
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop)
        },


        methods: {
            backTop () {
                document.getElementById("app").scrollIntoView();
            },
            // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
            scrollToTop () {
                const that = this
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                that.scrollTop = scrollTop
                if (that.scrollTop > 60) {
                    that.btnFlag = true
                } else {
                    that.btnFlag = false
                }
            }
        }
    }
</script>
<style scoped>
    .el-backtop >>> div{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
    }
</style>
<style lang="less" type="text/less" scoped>
    .fixedContent{
        position: fixed;
        bottom: 20px;
        right: 20px;
        .fixedNav{
            a{
                position: relative;
                display: block;
                width: 40px;
                height: 40px;
                margin-top: 2px;
                line-height: 40px;
                text-align: center;
                font-size: 26px;
                color: #666;
                background-color: #E1E1E1;
                border-radius: 4px;
                -webkit-transition: all .5s;
                transition: all .5s;
                cursor: pointer;
                i{font-size: 0.2rem;}
                &:hover{
                    background-color:#448BCB;
                    color: #fff;
                }
                div{
                    position: absolute;
                    top: 0;
                    right: 30px;
                    width: 0;
                    height: 40px;
                    line-height: 40px;
                    white-space: nowrap;
                    font-size: 14px;
                    background-color: #E1E1E1;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                    color: #fff;
                    z-index: -1;
                    -webkit-transition: all .3s;
                    transition: all .3s;
                    overflow: hidden;
                }
                &:hover div{
                    width: 100px;
                    background-color:#448BCB;
                    color: #fff;
                }
            }
        }
    }
</style>