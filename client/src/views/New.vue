<template>
  <div>
    <h1>New furniture</h1>
    <furniture-form @createOrUpdate="createOrUpdate"></furniture-form>
  </div>
</template>

<script>
import furnituresForm from '../components/FurnituresForm.vue';
import { api } from '../helpers/helpers';
export default {
  name: 'new-furniture',
  components: {
    'furniture-form': furnituresForm
  },
  methods: {
    createOrUpdate: async function(furniture) {
      const res = await api.createfurniture(furniture);
      this.flash('furniture created', 'success');
      this.$router.push(`/furniture/${res._id}`);
    }
  }
};
</script>