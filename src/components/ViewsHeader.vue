<template>
    <div class="flex-item">
        <router-link to="/">
            <h4 id="logo">novatos</h4>
        </router-link>  
      </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@600&display=swap');
a {
    text-decoration: none;
    cursor: pointer;
  }

  .flex-item {
    display: flex;
    padding-top: 1rem;
  }
  
  #logo{
    font-family: 'Stick No Bills', sans-serif;
    color:#e63a18;
   /**padding: 0.5rem 1rem;**/
   margin: auto 1rem;
    font-size: 2rem;
  }
  
</style>