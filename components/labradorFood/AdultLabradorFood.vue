<template>
  <div class="row">
    <div class="row">
      <ul v-for="post in posts" :key="post.id">
        <li class="lis">
          <div class="card" style="width:200px;">
            <img :src="`${post.imageUrl}`" alt="card-image" v-bind="ImageUrl" />
            <div>
              <h3>Price:{{post.price}}</h3>
            </div>

            <button @click="AddToCart()">+Add</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      posts: [],
      ImageUrl: "",
      Price: null
    };
  },
  mounted() {
    Axios.get("http://65.0.80.131:8000/user/list-adult-lab-food").then(
      resData => {
        const usePost = resData.data;
        this.posts = usePost;
        console.log(usePost);
      }
    );
  },
  methods: {
    AddToCart() {
      this.$store.dispatch("AddToCart", {
        ImageUrl: "Royal canine",
        Price: 2500
      });
      // this.$store.$state.dispatch("AddToCart", {
      //   ImageUrl: this.ImageUrl,
      //   Price: this.Price
      // });
      // console.log(`helloo ${this.ImageUrl}`);
    }
  }
};
</script>

<style>
#li{
  float: left;
}
</style>