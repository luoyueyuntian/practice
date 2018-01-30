<template>
<li class="editable-item-container">
    <span class="add-btn" @click="addItemHander">Add</span>
    <input type="text" v-model="newItemName"/>
</li>
</template>

<script>
export default {
  data () {
    return {
      newItemName: ''
    }
  },
  props: {
    addBtnCallback: Function
  },
  methods: {
    addItemHander: function () {
      this.addBtnCallback({name: this.newItemName})
    }
  }
}
</script>

<style>
.editable-item-container input {
  margin-left: 8px;
  width: 320px;
  height: 28px;
  padding-left: 5px;
  line-height: 28px;
  border-width: 0;
  vertical-align: top;
  outline: 0;
}

.editable-item-container .add-btn {
  float: right;
  width: 60px;
  height: 28px;
  line-height: 28px;
  color: #fff;
  background-color: #095872;
  text-align: center;
}
</style>
