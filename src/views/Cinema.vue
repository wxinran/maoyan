<template>
    <div class="cinema">
        <Header title="影院"></Header>
        <CinemaList />
        <TabBar></TabBar>
    </div>
</template>
<style>
.cinema {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
<script>
// 引入
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import CinemaList from '@/components/CinemaList'
export default {
    //注册组件
    components: { Header, TabBar, CinemaList }
}
</script>
