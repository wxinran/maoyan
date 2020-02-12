<template>
    <div class="header">
        <h1>{{title}}</h1>
    </div>
</template>
<style lang="scss">
.header {
    height: 52px;
    width: 100%;
    background-color: #E54847;
    color: white;
    h1 {
        font-size: 18px;
        font-weight: normal;
        text-align: center;
        line-height: 52px;
    }
}
</style>
<script>
export default {
    data() {
        return {}
    },
    // 
    props : {
        title : {
            type : String,
            default : '猫眼电影'
        }
    }
}
</script>