<template>
  <div>
    <h1>Show furniture</h1>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="furnitures icon"></i> Furniture</div>
      <input type="text" readonly :value="furniture.name" />
    </div>
    
    <div class="ui labeled input fluid">
      <div class="ui label"><i class="furnitures icon"></i>Note</div>
      <input type="text" readonly :value="furniture.note" />
    </div>

    <div class="actions">
      <router-link
        :to="{ name: 'edit', params: { id: this.$route.params.id } }"
      >
        Edit furniture
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  name: "show",
  data() {
    return {
      furniture: "",
    };
  },
  async mounted() {
    this.furniture = await api.getfurniture(this.$route.params.id);
  },
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>