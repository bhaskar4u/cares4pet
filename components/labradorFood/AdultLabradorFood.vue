<template>
  <div class="row">
    <div class="col-2">
      <h3>Adult Labrador</h3>
      <div>
        <button @click="clktst1">Adult</button>
        <button @click="clktst2">Puppy</button>
        <button @click="clktst3">Mature</button>
      </div>
    </div>
    <div class="col-10">
      <div v-if="test1 === true">
        <h3>Adult Lab List</h3>
      </div>
      <div v-else-if="test2 ===true">
        <h3>Puppy Lab List</h3>
      </div>
      <div v-else-if="test3 === true">
        <h3>Mature Lab List</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test1: false,
      test2: false,
      test3: false
    };
  },
  methods: {
    clktst1() {
      this.test1 = true;
    },
    clktst2() {
      this.test2 = true;
      this.test1 = false;
    },
    clktst3() {
      this.test3 = true;
      this.test1 = false;
      this.test2 = false;
    }
  }
};
</script>

<style>
</style>