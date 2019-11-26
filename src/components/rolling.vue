<template>
    <div class="overflow scroll-wrap">
        <div
                :style="{top}"
                class="scroll-content"
                @mouseenter="Stop()"
                @mouseleave="Up()"
        >
            <el-link v-for="(item,index) in list" target="_blank" :href="item.src">
                <i class="iconfont icon-triangle-down"></i>
                {{item.name}}
            </el-link>
        </div>
    </div>
</template>
<script>
    export default {
        name:'rolling',
        data(){
            return{
                list: [
                    { name: '城轨采购网',src:'http://www.railunique.com'},
                    { name: '天津地铁电子采购平台',src:'http://www.railunique.com' },
                    { name: '南昌地铁',src:'http://www.railunique.com' },
                    { name: '南昌地铁',src:'http://www.railunique.com' },
                    { name: '兰州地铁招标信息',src:'http://www.railunique.com' },
                    { name: '西安公共资源交易中心',src:'http://www.railunique.com' },
                ],
                activeIndex: 0,
                intnum: undefined,
            }
        },
        computed: {
            top() {
                return - this.activeIndex * 20 + 'px';
            }
        },
        created() {
            this.ScrollUp();
        },
        methods: {
            ScrollUp(){
                this.intnum = setInterval(_ => {
                    if (this.activeIndex < this.list.length) {
                        this.activeIndex += 1;
                    } else {
                        this.activeIndex = 0;
                    }
                }, 1200);
            },

            Stop(){
                clearInterval(this.intnum);
            },
            Up(){
                this.ScrollUp();
            }
        },
    }
</script>
<style type="text/less" lang="less" scoped>
    .scroll-wrap{
        width: 100%;
        height: .4rem;
        .scroll-content {
            position: relative;
            transition: top 1s;
            .el-link{
                text-align: left;
                display: block;
                font-size: 0.12rem;
                height: 0.2rem;
                line-height: 0.2rem;
                text-indent: .5em;
            }
        }
    }
</style>