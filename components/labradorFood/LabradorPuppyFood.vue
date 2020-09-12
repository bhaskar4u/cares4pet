<template>
  <div class="card-columns">
    <!-- <div v-for="(t,index) in $store.state.posts" :key="index"></div> -->
    <!-- {{ this.$store.state.list }} -->
    <div>
      <ul v-for="p  in posts" :key="p.id">
        <li class="card" style="width:200px;">
          <img v-bind:src="p.imageUrl" />
          <h1>{{p.price}}</h1>
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
      image: ""
      // count: 0
    };
  },
  async created() {
    const dta = await axios.get("http://localhost:8000/user/listP");
    this.posts = dta.data;
    this.image = dta.data.imageUrl;
    console.log(`BackandData ${dta}`);
    // console.log(dta.data);
    // .then(doc => {
    //   const postss = doc.data;
    //   console.log(postss);
    //   this.posts = { postss };
    // })
    // .catch(e => {
    //   console.log(e);
    // });
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
