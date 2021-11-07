<template>
  <div id="header">
    <div class="flex-item">
      <router-link to="/"><h4 id="logo">novatos</h4></router-link>
      <img src="./../assets/icons/menu.svg" class="menu" />
    </div>

    <div class="links">
      <!--<img src="close-menu.svg" class="close-menu"/>-->
      <ul>
        <li>
          <a href="/" class="nav-link">Home</a>
        </li>
        <li>
          <a href="#boxes" class="nav-link">Careers</a>
        </li>

        <li>
          <a href="#about" class="nav-link">About</a>
        </li>

        <li>
          <a href="#articles" class="nav-link">Articles</a>
        </li>

        <li>
          <router-link to="/open-source" class="nav-link open-source"
            >Open source</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navBar from "../header.js";

export default {
  methods: {
    navBar,
  },

  mounted() {
    navBar();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@600&display=swap");

a {
  text-decoration: none;
  cursor: pointer;
}

.flex-item {
  display: flex;
  padding-top: 1rem;
}

#logo {
  font-family: "Stick No Bills", sans-serif;
  color: #e63a18;
  /**padding: 0.5rem 1rem;**/
  margin: auto 1rem;
  font-size: 1.5rem;
}

.menu {
  position: absolute;
  /*bottom: 0;
    top: 30px;*/
  right: 40px;
  width: 25px;
  height: 25px;
  z-index: 9;
  margin-top: 0.2rem;
}

.close-menu {
  margin-right: 0;
}

.close-menu {
  margin-right: 0;
}
@media (min-width: 700px) {
  .links {
    overflow: hidden;
    height: 100vh;
    width: 70vw;
    background-color: #e4e4e4;
    position: absolute;
    z-index: 10;
    transition: 0.5s transform ease;
    top: 0;
    left: 0;
    transform: translateX(-100vw);
  }
  .show-links {
    transform: translateX(0);
  }
}
ul {
  list-style-type: none;
  padding: 14rem 0 0 3rem;
}

li a {
  font-weight: 500;
  color: #111010;
  font-size: 14px;
}

li {
  margin: 1rem 0;
}

li > a:hover {
  border-bottom: 2px solid #e63a18;
}

header {
  height: 10vw;
}

@media screen and (min-width: 700px) {
  .menu {
    display: none;
  }

  .links {
    overflow: visible;
  }
  .close-menu {
    display: none;
  }
  ul {
    display: flex;
    justify-content: end;
    padding: 0 4rem 0 0;
    margin-top: -2rem;
  }

  li {
    margin: 0 1rem;
  }

  .open-source {
    border: 2px solid #e63a18;
    padding: 0.4rem;
    border-radius: 5px;
  }

  .open-source:hover {
    color: #fff;
    background-color: #e63a18;
  }
}
</style>
