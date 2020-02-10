<template>
    <div class="home">
        <Header title="猫眼电影"></Header>
        <DownloadApp></DownloadApp>
        <div class="nav">
            <div class="city">
                <span>{{data.city}}</span>
                <i class="iconfont icon-lower-triangle"></i>
            </div>
            <div class="nav-title">
                <span class="now">正在热映</span>
                <span class="future">即将上映</span>
            </div>
            <div class="search">
                <i class="iconfont icon-sousuo"></i>
            </div>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<style lang="scss">
.nav {
    height: 50px;
    border-bottom: 1px solid #E6E6E6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    z-index: 10;
    .city {
        margin-left: 20px;
        height: 100%;
        line-height: 45px;
        i {
            color: #B0B0B0;
        }  
    }
    .nav-title {
        display: flex;
        height: 100%;
        line-height: 45px;
        span {
            display: inline-block;
            font-size: 15px;
            color:#666; width:80px;
            text-align:center;
            margin:0 12px;
            font-weight:700;
        }
    }
    .search {
        margin-right:20px;
        height:100%;
        line-height: 45px;
        i {
            font-size:24px;
            color:red;
        }
    }

}
</style>
<script>
import Header from '@/components/Header';
import DownloadApp from '@/components/DownloadApp';
import TabBar from '@/components/TabBar';
export default {
    // 注册组件
    components: { Header, DownloadApp, TabBar },
    // 数据
    data() {
        return {
            data: {
                city: "上海"
            }
        }
    }
};
</script>
