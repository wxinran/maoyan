<template>
    <div class="home">
        <!-- 头部 -->
        <Header title="猫眼电影"></Header>
        <!-- 下载程序 -->
        <DownloadApp></DownloadApp>
        <!-- 导航 -->
        <div class="nav">
            <div class="city">
                <router-link tag="span" to="/movie/city">{{data.city}}</router-link>
                <i class="iconfont icon-lower-triangle"></i>
            </div>
            <div class="nav-title">
                <router-link tag="span" to="/movie/showingup" class="now">正在热映</router-link>
                <router-link tag="span" to="/movie/comingsoon" class="future">即将上映</router-link>
            </div>
            <router-link tag="div" to="/movie/search" class="search">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
        </div>
        <keep-alive>
            <router-view />
        </keep-alive>
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
            &.router-link-active {
                color: #ef4238;
                border-bottom: 2px #ef4238 solid;
        }
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
