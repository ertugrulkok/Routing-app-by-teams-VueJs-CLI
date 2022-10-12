<template>
  <div class="flex-container">
    <!-- für child elemente von TeamList route -->
    <router-view></router-view>
    <ul>
      <teams-item
        v-for="team in teamsP"
        :key="team.id"
        :idP="team.id"
        :nameP="team.name"
        :memberZahl="team.members.length"
      ></teams-item>
    </ul>

    <!--   <router-view name="sibling"></router-view> -->
  </div>
</template>

<script>
import TeamsItem from "@/components/teams/TeamsItem.vue";
export default {
  components: {
    TeamsItem,
  },
  inject: ["teamsP"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0.5rem;
}
/* .flex-container {
  display: flex;
  align-items: center;
  justify-items: stretch;
  width: 100%;
} */
</style>
