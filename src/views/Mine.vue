<template>
    <div class="mine">
        <Header title="我的"></Header>
        <p>mine page</p>
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