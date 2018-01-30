<template>
<div>
    <table class="msg-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>FROM</th>
                <th>TO</th>
                <th>MESSAGE</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="message in msgs" :key="message.id">
                <td>{{message.id}}</td>
                <td>{{message.auth}}</td>
                <td>{{message.addressee}}</td>
                <td>{{message.message}}</td>
            </tr>
        </tbody>
    </table>
    <div v-if="msgs.length===0">no message</div>
</div>
</template>

<script>
export default {
  computed: {
    msgs: function () {
      return this.$store.state.msgs
    }
  }
}
</script>

<style>
/*消息中心*/
.msg-table{
    width: 500px;
    margin-top: 15px;
    border-spacing: 0;
    border-collapse: collapse;
}

.msg-table thead tr th{
    padding: 8px;
    border-bottom: 2px solid #ddd;
    font-weight: 500;
    font-size: 16px;
    text-align:left;
    color: #333;
}

.msg-table thead tr th:first-child{
    width: 40px;
}

.msg-table thead tr th:nth-child(2){
    width: 80px;
}

.msg-table thead tr th:nth-child(3){
    width: 80px;
}

.msg-table thead tr th:nth-child(4){
    width: 300px;
}

.msg-table tbody tr td{
    padding: 5px 8px;
    border-bottom: 1px solid #ddd;
    color: #333;
    vertical-align: top;
}
</style>
