<template>
    <div class="overflow scroll-wrap">
        <div
                :style="{top}"
                class="scroll-content"
                @mouseenter="Stop()"
                @mouseleave="Up()"
        >
            <el-link v-for="(item,index) in list" target="_blank" :href=" '/notice?id='+ item.id">
                <i class="iconfont icon-triangle-down"></i>
                {{item.title}}
            </el-link>
        </div>
    </div>
</template>
<script>
    export default {
        name:'rolling',
        data(){
            return{
                list: [],
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
            },

            async getInfo(){
                let response = await this.$api.ads()
                console.log(response);
                this.list = response.ads
            },
        },
        mounted(){
            this.getInfo()
        }
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