<template>
<div>
  <div class="back-btn" @click="back"><i class="fa fa-arrow-left" aria-hidden="true"></i>Back</div>
  <HeroDetail
  :name="name"
  :id="id"
  :receiveMsg="receiveMsg"
  :save="saveHero"
  :back="back"
  />
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import {HeroDetail} from '../../components'
import { MODIFY_HERO } from '../../vuex/constant'
export default {
  computed: {
    id: function () {
      return parseInt(this.$route.params.id, 10)
    },
    name: function () {
      let destHeroName = ''
      const heroId = parseInt(this.$route.params.id)
      this.$store.state.heroes.forEach(hero => {
        if (hero.id === heroId) {
          destHeroName = hero.name
        }
      })
      return destHeroName
    },
    receiveMsg: function () {
      const destMsg = []
      const heroId = parseInt(this.$route.params.id)
      this.$store.state.msgs.forEach(message => {
        if (message.addressee === '0') {
          destMsg.push(message)
        }
        if (message.addressee === heroId) {
          destMsg.push(message)
        }
      })
      return destMsg
    }
  },
  methods: {
    back: function () {
      this.$router.back()
    },
    ...mapMutations({
      saveHero: MODIFY_HERO
    })
  },
  components: {
    HeroDetail
  }
}
</script>

<style>
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
