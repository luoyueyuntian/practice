<template>
  <div>
      <ul class="default-list-container">
          <Item v-for="crisis in crisisLibary" :key="crisis.id" :id="crisis.id" :name="crisis.name" />
      </ul>
  </div>
</template>

<script>
import {Item} from '../../components/index.js'
export default {
  computed: {
    crisisLibary: function () {
      return this.$store.state.crisisLibary
    }
  },
  components: {
    Item
  }
}
</script>

<style>
.search-panel {
    width: 400px;
}

.back-btn {
    display: inline-block;
    padding: 5px 8px;
    margin-right: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    font-size: 16px;
}
</style>
