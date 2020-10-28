<template>
  <div>
     <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="password">
  </div>
  <!-- <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> -->
  <button type="submit" class="btn btn-primary" @click="send()">Submit</button>
</form>
  </div>
</template>

<script>
export default {
data(){
    return{
email:'',
password:''
    }
},methods:{
send(){
    console.log(`name:${this.email}, password:${this.password}`);
}
}
}
</script>

<style>

</style>