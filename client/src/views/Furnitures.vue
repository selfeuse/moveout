<template>
  <div>
    <h1>Furnitures</h1>
    <div id="app">
      <div v-for="(furnitures, index) in groupedCategories" :key="index">
        <h3>{{ index }}</h3>
        <table id="furnitures" class="ui celled compact table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Room</th>
              <th>Buyed price</th>
              <th>Wanted price</th>
              <th>Price I get</th>
              <th><i class="edit icon"></i></th>
              <th><i class="trash icon"></i></th>

              <th colspan="3"></th>
            </tr>
          </thead>
          <tr v-for="(furniture, innerIndex) in furnitures" :key="innerIndex">
            <td>{{ furniture.name }}</td>
            <td>{{ furniture.category }}</td>
            <td>{{ furniture.room }}</td>
            <td>{{ furniture.buyedPrice }}</td>
            <td>{{ furniture.wantedPrice }}</td>
            <td>{{ furniture.price }}</td>
            <td width="75" class="center aligned">
              <router-link :to="{ name: 'show', params: { id: furniture._id } }"
                >Show</router-link
              >
            </td>
            <td width="75" class="center aligned">
              <router-link :to="{ name: 'edit', params: { id: furniture._id } }"
                >Edit</router-link
              >
            </td>
            <td
              width="75"
              class="center aligned"
              @click.prevent="onDestroy(furniture._id)"
            >
              <a :href="`/furnitures/${furniture._id}`">Delete</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  name: "furnitures",
  data() {
    return {
      furnitures: [],
    };
  },
  computed: {
    groupedCategories() {
      var furnitures = {};
      this.furnitures.forEach((furniture) => {
        if (furnitures[furniture.room] == undefined) {
          furnitures[furniture.room] = [];
          furnitures[furniture.room].push(furniture);
        } else {
          furnitures[furniture.room].push(furniture);
        }
      });
      return furnitures;
    },
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm("Are you sure?");
      if (!sure) return;
      await api.deletefurniture(id);
      this.flash("Furniture deleted sucessfully!", "success");
      const newfurnitures = this.furnitures.filter(
        (furniture) => furniture._id !== id
      );
      this.furnitures = newfurnitures;
    },
  },
  async mounted() {
    this.furnitures = await api.getfurnitures();
  },
};
</script>