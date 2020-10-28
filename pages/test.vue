<template>
  <div>
    <div class="d-inline-flex flex-row">
      <ul class="pagination">
        <li v-for="post in posts" :key="post.id">
          <div class="card" style="width:100px;">
            <img :src="`${post.image[0].location}`" alt="card-image" />
            <div>
              <p>Price:{{ post.price }}</p>
              <p>{{ post.name }}</p>
              <button @click="AddToCart()">+</button>
              <button @click="AddToCart()">-</button>
            </div>
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
    Axios.get("http://localhost:8000/user/listpro").then(resData => {
      const usePost = resData.data;
      this.posts = usePost;
      console.log(usePost);
    });
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
      console.log(`helloo ${this.ImageUrl}`);
    }
  }
};
</script>

<style>
</style>