<template>
    <el-container style="height: :100%;">
    <el-aside width="auto">
        <common-aside></common-aside>
    </el-aside>
    <el-container>
        <el-header>
            <common-header/>
        </el-header>
        <!-- <ConmmonTag></ConmmonTag> -->
        <el-main>
         
            <router-view></router-view>
        </el-main>
    </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHeader from '../src/components/CommonHeader.vue'
import ConmmonTag from '@/components/ConmmonTag.vue'

export default{
    name:'home',
    components:{
    CommonAside,
    CommonHeader,
    ConmmonTag
},
    data(){
        return 
    }   
}
</script>

<style lang="less" scoped>
.el-header{
    background-color: #333;
}
.el-main{
    padding-top: 0;
}
</style>