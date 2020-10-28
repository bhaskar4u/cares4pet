<template>
  <div>
     <div class="card-columns">
      <ul v-for="post in posts" :key="post.id">
        <li>
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
      posts: []
    };
  },
  mounted() {
    Axios.get("http://65.0.80.131:8000/user/list-puppy-lab-food").then(
      resData => {
        const usePost = resData.data;
        this.posts = usePost;
        console.log(usePost);
      }
    );
  }
};
</script>

<style>
</style>