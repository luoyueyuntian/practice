<template>
<div>
    <ul class="default-list-container">
      <AddItem :addBtnCallback="addCrisis"/>
      <EditableItem
      v-for="crisis in crisisLibary"
      :key="crisis.id"
      :id="crisis.id"
      :name="crisis.name"
      :delBtnCallback="deleteCrisis"
      :checkCallback="selectCrisis"
      />
    </ul>
    <div class="search-panel">

    </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import {AddItem, EditableItem} from '../../../components'
import {ADD_CRISIS, DELETE_CRISIS, MODIFY_CRISIS} from '../../../vuex/constant'
export default {
  data: function () {
    return {
      selectedCrisisId: null
    }
  },
  computed: {
    crisisLibary: function () {
      return this.$store.state.crisisLibary
    }
  },
  components: {
    AddItem,
    EditableItem
  },
  methods: {
    ...mapMutations({
      deleteCrisis: DELETE_CRISIS,
      addCrisis: ADD_CRISIS,
      modifyCrisis: MODIFY_CRISIS
    }),
    selectCrisis: function (id) {
      this.selectedCrisisId = id
    }
  }
}
</script>

<style>

</style>
