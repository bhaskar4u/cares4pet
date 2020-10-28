<template>
  <div class="row">
    <div class="col-sm-6">
    <!-- <div class="col-2" style="width:200px;"> -->
      <h3>Labrador</h3>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVvSeeHk0UgGries33y3PQXmvafPPM-doQlw&usqp=CAU"
        alt
      />
      <div class="card-columns">
        <button @click="clktst1">Adult</button>
        <button @click="clktst2">Puppy</button>
        <button @click="clktst3">Mature</button>
      </div>
    <!-- </div> -->
    </div>
    <div class="col-sm-6">
      <div v-if="test1 === true">
        <h3>Adult Lab Food</h3>
        <AdultLabradorFood />
      </div>
      <div v-else-if="test2 ===true">
        <h3>PuppyFood</h3>
        <PuppyLabradorFood />
      </div>
      <div v-else-if="test3 === true">
        <h3>Mature-Lab Food</h3>
        <MatureLabradorFood />
      </div>
      <!-- <div>
        <form>
          <input type="text" name="imageUrl" v-model="imageUrl" />
          <input type="text" name="price" v-model="price" />
          <button @click="postData">post</button>
        </form>
      </div>-->
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import AdultLabradorFood from "~/components/labradorFood/AdultLabradorFood";
import PuppyLabradorFood from "~/components/labradorFood/PuppyLabradorFood";
import MatureLabradorFood from "~/components/labradorFood/MatureLabradorFood";

export default {
  components: {
    AdultLabradorFood,
    PuppyLabradorFood,
    MatureLabradorFood
  },
  data() {
    return {
      test1: true,
      test2: false,
      test3: false
      // imageUrl: "",
      // price: null
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
    // postData() {
    //   let payload = {
    //     imageUrl: this.imageUrl,
    //     price: this.price
    //   };
    //   Axios.post(
    //     "http://13.234.66.240:8000/user/add-adult-lab-food",
    //     payload
    //   ).then(location.reload());
    // }
  }
};
</script>

<style>
</style>
