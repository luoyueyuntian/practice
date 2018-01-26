<template>
<div>
    <ul class="default-list-container">
      <AddItem :addBtnCallback="addHero"/>
      <EditableItem
      v-for="hero in heroes"
      :key="hero.id"
      :id="hero.id"
      :name="hero.name"
      :delBtnCallback="deleteHero"
      :checkCallback="selectHero"
      />
    </ul>
    <div class="search-panel">

    </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import {AddItem, EditableItem} from '../../../components'
import {ADD_HERO, DELETE_HERO, MODIFY_HERO} from '../../../vuex/constant'
export default {
  data: function () {
    return {
      selectedHeroId: null
    }
  },
  computed: {
    heroes: function () {
      return this.$store.state.heroes
    }
  },
  components: {
    AddItem,
    EditableItem
  },
  methods: {
    ...mapMutations({
      deleteHero: DELETE_HERO,
      addHero: ADD_HERO,
      modifyHero: MODIFY_HERO
    }),
    selectHero: function (heroId) {
      this.selectHeroId = heroId
    }
  }
}
</script>

<style>

</style>
