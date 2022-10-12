<template>
  <button @click="confirmInput">Bestätigen</button>
  <button @click="saveData">Speichern</button>
  <ul>
    <user-item
      v-for="user in usersP"
      :key="user.id"
      :nameP="user.fullname"
      :roleP="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "@/components/users/UserItem.vue";
export default {
  components: {
    UserItem,
  },
  data() {
    return {
      dataIsSaved: false,
    };
  },
  inject: ["usersP"],
  methods: {
    confirmInput() {
      // ...
      alert("Daten erfolgreich übermittelt");
      this.$router.push("/teams");
    },
    saveData() {
      this.dataIsSaved = true;
    },
  },
  // vue js hook
  beforeRouteEnter(to, from, next) {
    console.log("UsersList beforeRouterEnter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("before Route Leave UserList");
    console.log(to, from);
    if (this.dataIsSaved) {
      next();
    } else {
      const confirmMsg = confirm(
        "Deine Daten wurde nicht gespeichert. Trotzdem verlassen ?"
      );
      console.log(confirmMsg)
      next(confirmMsg);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
}
</style>
