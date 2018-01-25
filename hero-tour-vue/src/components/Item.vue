<template>
  <li class="item-container"><span class="badge">{{id}}</span>{{name}}</li>
</template>

<script>
export default {
  props: ['id', 'name']
}
</script>

<style>
.item-container {
  width: 100%;
  height: 32px;
  margin: 5px 0;
  overflow: hidden;
  line-height: 32px;
  border-radius: 6px;
  border: 1px solid #ddd;
  list-style: none;
}
.item-container .badge {
  display: inline-block;
  width: 60px;
  margin-right: 4px;
  text-align: center;
  background-color: #095872;
  color: #fff;
}
</style>
