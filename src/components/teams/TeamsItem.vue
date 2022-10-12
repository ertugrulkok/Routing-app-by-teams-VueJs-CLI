<template>
  <li>
    <h3>{{ nameP }}</h3>
    <div class="team-members">{{ memberZahl }} Members</div>
    <router-link :to="openTeam">View Members</router-link>
  </li>
</template>

<script>
export default {
  props: ["idP", "nameP", "memberZahl"],
  computed: {
    openTeam() {
      //  return '/teams/' + this.idP + '/?sort=asc'
      return {
        name: "team-members",
        params: { teamIDp: this.idP },
        // query: { sort: "asc" },
      };
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  width: 400px;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>
