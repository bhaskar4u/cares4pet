<template>
  <div>
    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
      style="min-width:320px; top:50px;"
    >
      <li class="nav-item dropdown">
        <nuxt-link
          class="nav-item dropdown-toggle"
          to="/cart"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-cart"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            />
          </svg>
        </nuxt-link>

        <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="min-width:200px;">
          <div>
            <ul>
              <li>
                <h5>helllooooo</h5>
                <br />Qty:1 x 200
                <br />
                <button>Total=200</button>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  //   computed: {
  //     counter() {
  //       return this.$store.state.cart;
  //     }
  //   }
  methods: {
    sendCart() {
      this.$store.dispatch("addToCart", { name: this.name, age: 21 });
    }
  }
};
</script>

<style>
</style>