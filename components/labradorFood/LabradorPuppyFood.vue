<template>
  <div class="card-columns">
    <div class="card" v-for="post in posts" :key="post.id">
      <ul>
        <li>
          <div class="name">
            <h3>{{ post.ProductName }}</h3>
          </div>
          <div>
            <img :src="`${post.ImageUrl}`" />
          </div>
          <div class="price">
            <h3>
              Price:
              {{ post.Price }}
            </h3>
          </div>
          <p>Qty:{{count}}</p>
          <p class="control">
            <a class="button is-primary" @click.prevent="decrementCounter">-</a>
            <a class="button is-danger" @click.prevent="incrementCounter">+</a>
          </p>

          <!-- <button @click.prevent="decrementCounter">-</button>
          <button @click.prevent="incrementCounter">+</button>

          <button @click="click">AddTocart</button>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      count: 0
    };
  },
  created() {
    axios
      .get("http://localhost:3800/user/getlabpuppyfood")
      .then(doc => {
        const postss = doc.data;
        this.posts = postss;
      })
      .catch(e => {
        console.log(e);
      });
    // axios.get("http://localhost:3800/user/getlabpuppyfood").then(doc => {
    //   var doci = doc.data;
    //   var i;
    //   for (i = 0; i < doci.length; i++) {
    //     this.ImageUrl = doci[i].ImageUrl;
    //   }
    // });
  },
  methods: {
    click() {
      alert("item added");
    },
    incrementCounter: function() {
      this.count += 1;
    },
    decrementCounter: function() {
      this.count -= 1;
    }
  }

  // async fetch() {
  //   this.posts = await this.$axios.$get("http://localhost:3800/user/list");
  //   this.ImageUrl = await this.$axios
  //     .$get("http://localhost:3800/user/list")
  //     .then(doc => {
  //       var i;
  //       for (i = 0; i < doc.length; i++) {
  //         return doc[i].ImageUrl;
  //       }
  //     });
  // },
  // fetchOnServer: false
};
</script>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
