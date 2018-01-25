<template>
<div>
    <nav class="manage-nav-container">
    <router-link to="/admin/dashboard" active-class="active">Dashboard</router-link>
    <router-link to="/admin/crisis-manage" active-class="active">CrisisManage</router-link>
    <router-link to="/admin/hero-manage" active-class="active">HeroManage</router-link>
    <router-link to="/admin/message-center" active-class="active">MessageCenter</router-link>
    </nav>
    <router-view/>
</div>
</template>

<script>
export default {

}
</script>

<style>
.manage-nav-container {
    height: 33px;
    padding-left: 10px;
    border-bottom: 1px solid #ddd;
}

.manage-nav-container a {
    display: inline-block;
    padding: 4px 8px;
    text-decoration: none;
    color: #333;
}

.manage-nav-container a.active {
    border-width: 4px 1px 1px 1px;
    border-style: solid;
    border-color: #0099ff #ddd #fff #ddd;
    border-radius: 6px 6px 0 0;
}

/*英雄管理*/
.manage-panel-container {
    width: 400px;
    margin-left: 15px;
    margin-right: 15px;
    display: inline-block;
}
</style>
