<template>
<div class="message-container">
    <span class="close-icon" @click="hideContactPanel">&times;</span>
    <div class="form-section">
        <span class="message-label">To:</span>
        <select class="hero-list" v-model="addressee">
            <option value="0">All</option>
            <option v-for="hero in heroes" :key="hero.id" :value="hero">
                {{hero.name}}
            </option>
      </select>
    </div>
    <div class="form-section">
        <span class="message-label">Info:</span>
        <textarea class="message-input" cols="30" rows="10" v-model="message"></textarea>
    </div>
    <div class="edit-container">
        <button @click="send">Send</button>
        <button @click="hideContactPanel">Cancel</button>
    </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import {SEND_MESSAGE, HIDE_CONTACT_PANEL} from '../../vuex/constant'
export default {
  data: function () {
    return {
      addressee: '0',
      message: '',
      showContact: true
    }
  },
  computed: {
    heroes: function () {
      return this.$store.state.heroes
    },
    isLogin: function () {
      return this.$store.state.loginStatus
    }
  },
  methods: {
    send: function () {
      this.sendMessage({
        author: this.isLogin ? 'admin' : 'visitor',
        message: this.message,
        addressee: this.addressee
      })
      this.message = ''
    },
    ...mapMutations({
      sendMessage: SEND_MESSAGE,
      hideContactPanel: HIDE_CONTACT_PANEL
    })
  }
}
</script>

<style>
.message-container {
    width: 500px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.form-section {
    margin: 8px 0;
}

.form-section textarea {
    vertical-align: top;
    box-sizing: border-box;
    resize: none;
}

.message-input {
    width: 300px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.message-input:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
}

.message-label {
    display: inline-block;
    width: 80px;
    height: 26px;
    padding-right: 5px;
    line-height: 26px;
    text-align: right;
}

.hero-list {
    width: 300px;
    height: 26px;
    line-height: 26px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.hero-list:foucs {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
}

.edit-container {
    text-align: center;
}

.edit-container button {
    padding: 4px 6px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
}

.close-icon {
    float: right;
    cursor: pointer;
    color: #666;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 1px 0 #fff;
}
</style>
