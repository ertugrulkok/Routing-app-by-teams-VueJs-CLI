<template>
  <div class="main-container">
    <the-navigation></the-navigation>
    <header>
      <router-view name="header"></router-view>
    </header>
    <main>
      <router-view default></router-view>
      <!-- first sibling router default --top -->
    </main>
    <!-- second sibling router -top -->
    <footer>
      <router-view name="footer"></router-view>
    </footer>
  </div>
</template>

<script>
import TheNavigation from "./components/navigation/TheNavigation.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
  },
  data() {
    return {
      teams: [
        {
          id: "team1",
          name: "Frontend Team",
          members: ["user5", "user6", "user3"],
        },
        {
          id: "team2",
          name: "Backend Team",
          members: ["user2", "user4", "user1", "user3"],
        },
        { id: "team3", name: "Consulting Team", members: ["user7", "user1"] },
      ],
      users: [
        { id: "user1", fullname: "Metehan Adanur", role: "Fullstack" },
        { id: "user2", fullname: "Mehmet Ulga", role: "Backend" },
        { id: "user3", fullname: "Hasan Sakalli", role: "Fullstack" },
        { id: "user4", fullname: "Basri Konuskan", role: "Backend" },
        { id: "user5", fullname: "Ertugrul Kök", role: "Frontend" },
        { id: "user6", fullname: "Sadeddin Ertosun", role: "Frontend" },
        { id: "user7", fullname: "Eman Al-Enasy", role: "Consultant" },
      ],
    };
  },
  provide() {
    return {
      usersP: this.users,
      teamsP: this.teams,
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: center;
}
</style>
