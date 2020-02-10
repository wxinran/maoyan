<template>
    <div class="cinema">
        <Header title="影院"></Header>
        <p>cinema page</p>
        <TabBar></TabBar>
    </div>
</template>

<script>
// 引入
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
    //注册组件
    components: { Header, TabBar }
}
</script>
