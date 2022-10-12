<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :nameP="member.fullname"
        :roleP="member.role"
      ></user-item>
    </ul>
    <!--   <router-link to="/teams/team2">Gehe zum Team2</router-link> -->
  </section>
</template>

<script>
import UserItem from "@/components/users/UserItem.vue";

export default {
  inject: ["teamsP", "usersP"],
  props: ["teamIDp"],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: "",
      members: [],
    };
  },

  methods: {
    loadTeam(teamRoute) {
      const selectedTeam = this.teamsP.find((team) => team.id === teamRoute);
      console.log(selectedTeam);
      const members = selectedTeam.members;

      const selectedMembers = [];
      console.log(teamRoute);

      for (const member of members) {
        const selectedUser = this.usersP.find((user) => user.id === member);

        selectedMembers.push(selectedUser);
        // console.log(member)
        // console.log(selectedUser);
      }
      // console.log(members);
      // console.log("###############");
      // console.log(selectedMembers);
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    this.loadTeam(this.teamIDp);
    // console.log(this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    this.loadTeam(to.params.teamIDp )
    console.log("team members beforeUpdate");
    console.log(to, from);
    next();
  },
  watch: {
    // $route(newValue) {
    //   this.loadTeam(newValue);
    // },
    teamIDp(newValue) {
      this.loadTeam(newValue);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.293);
  padding: 1rem;
  border-radius: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

h2 {
  margin: 10px 0px;
}
</style>
