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
      @selectItem="selectHero"
      />
    </ul>
    <div class="hero-detail-panal" v-if="selectedHeroId!==-1">
      <HeroDetail
      :name="selectedHeroName"
      :id="selectedHeroId"
      :receiveMsg="receiveMsg"
      :save="modifyHero"
      :back="back"
      />
    </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import {AddItem, EditableItem, HeroDetail} from '../../../components'
import {ADD_HERO, DELETE_HERO, MODIFY_HERO} from '../../../vuex/constant'
export default {
  data: function () {
    return {
      selectedHeroId: -1
    }
  },
  computed: {
    heroes: function () {
      return this.$store.state.heroes
    },
    selectedHeroName: function () {
      let name = ''
      if (this.selectedHeroId === -1) {
        return name
      }
      this.$store.state.heroes.forEach(hero => {
        if (hero.id === this.selectedHeroId) {
          name = hero.name
        }
      })
      return name
    },
    receiveMsg: function () {
      let receiveMsg = []
      this.$store.state.msgs.forEach(message => {
        if (message.addressee === 0) {
          receiveMsg.push(message)
        }
        if (message.addressee === this.selectedHeroId) {
          receiveMsg.push(message)
        }
      })
      return receiveMsg
    }
  },
  components: {
    AddItem,
    EditableItem,
    HeroDetail
  },
  methods: {
    ...mapMutations({
      deleteHero: DELETE_HERO,
      addHero: ADD_HERO,
      modifyHero: MODIFY_HERO
    }),
    selectHero: function (heroId) {
      this.selectedHeroId = heroId
    },
    back: function () {
      this.selectedHeroId = -1
    }
  }
}
</script>

<style>
.hero-detail-panal{
  width: 400px;
  display: inline-block;
  vertical-align: top;
}
</style>
