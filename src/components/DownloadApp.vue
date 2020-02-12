<template>
    <div class="downloadapp">
        <div class="logo-img">
            <img src="@/../public/logo.png" alt="">
        </div>
        <div class="title">
            <h3>猫眼</h3>
            <p>在线选座，热门影讯，爱上看电影</p>
        </div>
        <div class="btn">
            <button>立即打开</button>
        </div>
    </div>
</template>
<style lang="scss">
.downloadapp {
    padding: 5px 15px 0;
    height: 56px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E6E6E6;
    .logo-img img {
        width: 44px;
    }
    .title {
        margin-left: 10px;
        h3 {
            font-weight: normal;
            font-size: 17px;
        }
        p {
            font-size: 12px;
            color: #999999;
        }
    }
    .btn {
            padding-left: 40px;
            button {
                width: 70px;
                height: 30px;
                font-size: 13px;
                background-color: #EF4238;
                border: none;
                outline: none;
                color: #ffffff;
                border-radius: 5px;
            }
        }
}
</style>
<script>
export default {
    data() {
        return {}
    }
}
</script>