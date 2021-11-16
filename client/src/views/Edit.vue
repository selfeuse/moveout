<template>
  <div>
    <h1>Edit furniture</h1>
    <furniture-form
      @createOrUpdate="createOrUpdate"
      :furniture="this.furniture"
    ></furniture-form>
  </div>
</template>

<script>
import furnituresForm from "../components/FurnituresForm.vue";
import { api } from "../helpers/helpers";

export default {
  name: "edit",
  components: {
    "furniture-form": furnituresForm,
  },
  data: function () {
    return {
      furniture: {},
    };
  },
  methods: {
    createOrUpdate: async function (furniture) {
      await api
        .updatefurniture(furniture)
        .then(() => {
          this.$router.push("/furnitures");
        })
        .catch(function (error) {
          console.log(JSON.stringify(error));
        });
    },
  },
  async mounted() {
    this.furniture = await api.getfurniture(this.$route.params.id);
  },
};
</script>