<template>
<div class="hero-detail-container">
    <h3>
        <span class="title">Hero Detail Info</span>
    </h3>
    <ul class=" edit-form-container ">
        <li class="edit-blocking ">
            <span>id:</span>{{id}}
        </li>
        <li class="edit-blocking ">
            <span>name:</span>
            <input type="text" v-model="newName" />
        </li>
        <li class="edit-btn-container ">
            <button class="edit-btn " @click="saveModify() ">Save</button>
            <button class="edit-btn " @click="cancel() ">cancel</button>
        </li>
    </ul>
    <h3>
        <span class="title">Recevied Message</span>
    </h3>
    <ul class="message-list-container ">
        <li v-if="receiveMsg.length===0 " class="empty-message ">none message!</li>
        <li v-for="msg in receiveMsg" :key="msg.id">
            <span class="msg-author ">{{msg.auth}}</span>
            <span class="msg-content ">{{msg.message}}</span>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  props: {
    name: String,
    id: Number,
    receiveMsg: Array,
    save: Function,
    back: Function
  },
  data: function () {
    return {
      newName: this.name
    }
  },
  methods: {
    saveModify: function () {
      this.save({
        newName: this.newName,
        id: this.id
      })
      this.back()
    },
    cancel: function () {
      this.back()
    }
  },
  updated: function () {
    this.newName = this.name
  }
}
</script>

<style>
.hero-detail-container {
    width: 500px;
    display: inline-block;
    vertical-align: top;
}

.edit-form-container {
    padding-left: 15px;
    margin: 10px 0;
}

.edit-form-container li {
    height: 26px;
    line-height: 26px;
    list-style: none;
}

.edit-blocking span {
    display: inline-block;
    width: 60px;
    margin-right: 5px;
    text-align: right;
}

.edit-blocking input {
    width: 300px;
    height: 26px;
    line-height: 26px;
    padding-left: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.edit-blocking input:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
}

.edit-btn-container {
    margin-top: 12px;
    text-align: center;
}

.edit-btn {
    padding: 5px 6px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    cursor: pointer;
}

.message-list-container {
    padding-left: 15px;
}

.message-list-container li {
    margin: 5px 0;
    height: 26px;
    overflow: hidden;
    list-style: none;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.message-list-container li:after {
    content: '.';
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
}

.message-list-container li.empty-message {
    border: 0;
    text-align: center;
    color: red;
}

.message-list-container li .msg-author {
    box-sizing: border-box;
    float: left;
    width: 80px;
    height: 26px;
    line-height: 26px;
    border-right: 1px solid #ddd;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-spacing: 0;
}

.message-list-container li .msg-content {
    box-sizing: border-box;
    float: left;
    padding-left: 8px;
    width: 403px;
    height: 26px;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-spacing: 0;
}
</style>
