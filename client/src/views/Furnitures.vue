<template>
  <div>
    <h1>Furnitures</h1>
    <table id="furnitures" class="ui celled compact table">
      <thead>
        <tr>
         <th>  <i class="calendar plus icon"></i>Furniture</th>
                    <th> <i class="lock open icon"></i></th>
                   <th> <i class="edit icon"></i></th>
                    <th> <i class="trash icon"></i></th>



          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(furniture, i) in furnitures" :key="i">
        <td>{{ furniture.name }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: furniture._id }}">Show</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: furniture._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(furniture._id)">
          <a :href="`/furnitures/${furniture._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'furnitures',
  data() {
    return {
      furnitures: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deletefurniture(id);
      this.flash('furniture deleted sucessfully!', 'success');
      const newfurnitures = this.furnitures.filter(furniture => furniture._id !== id);
      this.furnitures = newfurnitures;
    }
  },
  async mounted() {
    this.furnitures = await api.getfurnitures();
  }
};
</script>