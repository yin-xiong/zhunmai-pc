<template>
    <div class="sorting">
        <div class="flex">

            <div
                    v-for="(item,index) in sortings"
                    :class="[isActive == item.index ? 'active' : '',isSort ]"
                    @click="sortHands(item.index)"
            >
                <span>{{item.title}}</span>
                <span class="fz0">
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
                isActive:-1,
                isSort:'',
                num:1, // 1 代表升序，2代表降序
                lists:[],// 获取请求的数据
            }
        },
        props:{
            sortings:Array
        },
        methods:{
            async sortHands(index){
                this.isActive = index

                // 参数==》time 综合   price 价格  weight 权重
                if(this.num == 1){
                    //  降序
                    this.num = 2
                    this.isSort = 'up'
                }else if(this.num == 2){
                    // 升序
                    this.num = 1
                    this.isSort = 'down'
                }
                // index=0 综合  index=1 价格 index=2 权重
                let data = {}
                if(index == 0){
                     data = {
                        time:this.num,
                        price:'',
                        weight:'',
                    }
                }else if(index == 1){
                     data = {
                        time:'',
                        price:this.num,
                        weight:'',
                    }
                }else if(index == 2){
                     data = {
                        time:'',
                        price:'',
                        weight:this.num,
                    }
                }
                let response = await this.$api.officialwebsitesort(data)
                this.lists = response.list
                // 讲数据传回父组件
                this.$emit('sortData',this.lists)
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
            >div.active{
                color: #FF5D24;
            }
            >div.active.up{
                i.icon-zonghepaixu-shang{
                    color: #FF5D24;
                }
            }
            >div.active.down{
                i.icon-zonghepaixu-xia{
                    color: #FF5D24;
                }
            }

        }
    }
</style>