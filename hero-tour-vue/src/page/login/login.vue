<template>
<div>
    <ul class="login-container" v-if="!loginStatus">
        <li class="login-form">
            <span class="login-label">Username:</span>
            <input type="text" placeholder="please input you name" />
        </li>
        <li class="login-form">
            <span class="login-label">Password:</span>
            <input type="text" placeholder="please input password" />
        </li>
    </ul>
    <div class="log_in_tip" v-if="showLogIn&&!loginStatus">Trying to log in ...</div>
    <div>
        <button class="login-btn" :disabled="loginStatus" @click="login">Login</button>
        <button class="login-btn" :disabled="!loginStatus" @click="logoutAction">Logout</button>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      showLogIn: false
    }
  },
  computed: {
    loginStatus: function () {
      return this.$store.state.loginStatus
    }
  },
  methods: {
    showLogInTip: function () {
      return !this.loginStatus && this.showLogIn
    },
    login: function () {
      this.showLogIn = true
      this.loginAction().then(
        res => {
          this.showLogIn = false
          let redirt = this.$route.query.redirect
          if (redirt !== undefined) {
            this.$router.push(redirt)
          }
        },
        () => {
          this.showLogIn = false
        }
      )
    },
    ...mapActions([
      'loginAction',
      'logoutAction'
    ])
  }
}
</script>

<style>
.login-container {
    margin-left: 20px;
}

.login-form {
    height: 26px;
    margin: 8px 0;
    font-size: 16px;
    line-height: 26px;
    vertical-align: middle;
    list-style: none;
}

.login-form .login-label {
    display: inline-block;
    width: 100px;
    padding-right: 4px;
    text-align: right;
}

.login-form input {
    width: 250px;
    height: 26px;
    padding-left: 4px;
    line-height: 26px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

.login-form input:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
}

.log_in_tip{
    width: 400px;
    margin: 15px 0;
    color:red;
    text-align: center;
}

.login-btn {
    width: 120px;
    height: 32px;
    text-align: center;
    font-size: 16px;
    line-height: 32px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    color: #0099ff;
    cursor: pointer;
}

.login-btn[disabled] {
    cursor: default;
    opacity: 0.5;
}
</style>
