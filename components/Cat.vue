<template>
<body>
  <div>
  <div>
    <form>
      <input type="text" v-model="name">
      <button @click="add()">add</button>
    </form>
  </div>
  </div>
  <div class="card-columns">
    <div class="card" style="width:300px">
      <div class="card-header">
        
        <h5>Cat1</h5>
      </div>
      <img src="img/cat/cat1.png" alt />
      <div class="card-body">
        <p></p>
      </div>
      <div class="card-footer">
        <h3>labDog</h3>
      </div>
    </div>

    <div class="card" style="width:300px">
      <div class="card-header">
        <h5>Cat2</h5>
      </div>
      <img src="img/cat/cat2.png" alt />
      <div class="card-body">
        <p></p>
      </div>
      <div class="card-footer">
        <h3>labDog</h3>
      </div>
    </div>

    <div class="card" style="width:300px">
      <div class="card-header">
        <h5>Cat3


        </h5>
      </div>
      <img src="img/cat/cat3.png" alt />
      <div class="card-body">
        <p></p>
      </div>
      <div class="card-footer">
        <h3>labDog</h3>
      </div>
    </div>
  </div>
</body>
</template>

<script>
export default {
  data(){
    return{
name:''
    }
  },
  methods:{
  addName(){
   this.$store.state.dispatch('storelist',this.name)
    }
  }
}
</script>
