<template>
<li class="editable-item-container">
    <div class="badge">{{id}}</div>
    <div class="del-btn" @click="deleteItem">Delete</div>
    <div class="content" @click="checkItem">{{name}}</div>
</li>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    delBtnCallback: Function,
    checkCallback: Function
  },
  methods: {
    checkItem: function () {
      this.checkCallback(this.id)
    },
    deleteItem: function () {
      this.delBtnCallback({id: this.id})
    }
  }
}
</script>

<style>
.editable-item-container {
    box-sizing: border-box;
    height: 28px;
    margin: 8px 0;
    line-height: 28px;
    overflow: hidden;
    border: 1px solid #095872;
    border-radius: 8px;
    cursor: pointer;
    list-style: none;
}

.editable-item-container::after {
    content: '.';
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
}

.editable-item-container div.badge {
    float: left;
    width: 60px;
    text-align: center;
    background-color: #095872;
    color: #fff;
}

.editable-item-container .content {
    margin-left: 60px;
    margin-right: 100px;
    padding-left: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-spacing: 0;
}

.editable-item-container div.del-btn {
    float: right;
    width: 100px;
    text-align: center;
    background-color: #095872;
    color: #fff;
}
</style>
