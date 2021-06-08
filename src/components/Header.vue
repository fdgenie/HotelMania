<template>
  <header>
    <nav>
      <p
        class="title"
        @click="$route.path !== '/' ? $router.push({ path: '/' }) : ''"
      >
        HotelMania
      </p>
      <div class="menu">
        <button
          @click="$route.path !== '/' ? $router.push({ path: '/' }) : ''"
          class="btns"
          :class="$route.path === '/' ? 'activeMenuBtn' : ''"
        >
          Home
        </button>
        <button
          @click="
            $route.path !== '/statistics'
              ? $router.push({ path: '/statistics' })
              : ''
          "
          class="btns"
          :class="$route.path === '/statistics' ? 'activeMenuBtn' : ''"
        >
          Statistics
        </button>
        <button type="submit" class="btns">Register</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
nav {
  height: 90px;
  background: $primary;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 40px;

  @media screen and (min-width: 992px) {
    justify-content: space-between;
  }
}

.menu {
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
  }
}
.btns {
  color: $text;
}

.btns:hover {
  color: black;
}

.activeMenuBtn {
  text-decoration: underline;
  font-weight: bold;
}

.title {
  font-weight: bold;
  font-size: 2em;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
