<template>
  <div>
    <h1>New furniture</h1>
    <furniture-form @createOrUpdate="createOrUpdate"></furniture-form>
  </div>
</template>

<script>
import furnituresForm from "../components/FurnituresForm.vue";
import { api } from "../helpers/helpers";
export default {
  name: "new-furniture",
  components: {
    "furniture-form": furnituresForm,
  },
  methods: {
    createOrUpdate: async function (furniture) {
      await api.createfurniture(furniture)
        .then(() => {
          this.$router.push("/furnitures");
        })
        .catch(function (error) {
          console.log(JSON.stringify(error));
        });
    },
  },
};
</script>