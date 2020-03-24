
<template>
    <body>
      
        <h2>Dogs</h2>
        <Dog />
        <h2>Cats</h2>
        <Cat />
      
    </body>
</template>

<script>

import Cat from "~/components/Cat"
import Dog from "~/components/Dog"

export default {
  components:{
    
    Cat,
    Dog
  }
}
</script>