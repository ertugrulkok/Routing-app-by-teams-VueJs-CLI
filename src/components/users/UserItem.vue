<template>
  <li>
    <h3>{{ nameP }}</h3>
    <div class="role" :class="roleClass">{{ roleP }}</div>
  </li>
</template>

<script>
export default {
  name: "UserItem",
  props: ["nameP", "roleP"],
  computed: {
    roleClass() {
      if (this.roleP === "Frontend") {
        return "role--frontend";
      }

      if (this.roleP === "Backend") {
        return "role--backend";
      }
      if (this.roleP === "Fullstack") {
        return "role--fullstack";
      }
      if (this.roleP === "Consultant") {
        return "role--consultant";
      }

      return null;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0rem;
  border: 1px solid white;
  padding: 1rem;
}
.role {
  border-radius: 20px;
  background-color: black;
  color: white;
  padding: 4px 16px;
  display: inline-block;
}

.role--frontend {
  background-color: rgb(16, 135, 161);
  color: white;
}
.role--backend {
  background-color: rgb(40, 3, 72);
  color: white;
}
.role--fullstack {
  background-color: rgb(127, 0, 0);
  color: white;
}
.role--consultant {
  background-color: rgb(4, 81, 5);
  color: white;
}
</style>
