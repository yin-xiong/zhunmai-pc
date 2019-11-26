<template>
    <div class="sorting">
        <div class="flex">
            <div>
                <span>综合排序</span>
                <span class="fz0">
                    <i class="iconfont icon-zonghepaixu-shang"></i>
                    <i class="iconfont icon-zonghepaixu-xia"></i>
                </span>
            </div>
            <div>
                <span>价格排序</span>
                <span  class="fz0">
                    <i class="iconfont icon-zonghepaixu-shang"></i>
                    <i class="iconfont icon-zonghepaixu-xia"></i>
                </span>
            </div>
            <div>
                <span>权重排序</span>
                <span  class="fz0">
                    <i class="iconfont icon-zonghepaixu-shang"></i>
                    <i class="iconfont icon-zonghepaixu-xia"></i>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'sorting',
        data(){
            return{

            }
        }
    }
</script>
<style type="text/less" lang="less" scoped>
    .sorting{
        height: .46rem;
        margin: .2rem auto;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 .3rem;
        .flex{
            height: 100%;
            align-items: center;
            >div{
                cursor: pointer;
                margin-right: .4rem;
                display: flex;
                align-items: center;
                transition: all .4s;
                .fz0{
                    margin-left: 4px;
                    i{
                        display: block;
                        font-size: .12rem;
                        color: #999;
                        transform: scale(.6);
                        position: relative;
                        top: 4px;
                        &:last-child{
                            top: -4px;
                        }
                    }

                }
                &:hover{
                    color: #FF5D24;
                }
            }

        }
    }
</style>