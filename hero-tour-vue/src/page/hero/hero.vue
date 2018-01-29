<template>
  <div>
      <ul class="default-list-container">
          <ClickableItem v-for="hero in heroes"
          :key="hero.id"
          :id="hero.id"
          :name="hero.name"
          :selectHander="viewHeroDetail"
          />
      </ul>
  </div>
</template>

<script>
import {ClickableItem} from '../../components/index.js'
export default {
  computed: {
    heroes: function () {
      return this.$store.state.heroes
    }
  },
  methods: {
    viewHeroDetail: function (id) {
      this.$router.push('/hero-detail/' + id)
    }
  },
  components: {
    ClickableItem
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
