<template>
    <keep-alive>
        <router-view />
    </keep-alive>
</template>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
    list-style: none;
    &::-webkit-scrollbar {
    display: none;
}
}
html,body {
    height: 100%;
}
</style>
