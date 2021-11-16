<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

    <div class="ui labeled input fluid">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="furniture.name" />
    </div>

    <div class="ui labeled input fluid">
      <label for="room">Room</label>
      <input type="text" id="room" v-model="furniture.room" />
    </div>

    <div class="ui labeled input fluid">
      <label for="category">Category</label>
      <input type="text" v-model="furniture.category" list="categories" />
      <datalist id="categories">
        <option v-for="category in furniture.categories" :key="category" :value="category" >{{ category }}</option>
      </datalist>
    </div>

    <div class="ui labeled input fluid">
      <label for="buyedPrice">Buyed price</label>
      <input type="number" id="buyedPrice" v-model="furniture.buyedPrice" />
    </div>

    <div class="ui labeled input fluid">
      <label for="wantedPrice">Wanted price</label>
      <input type="number" id="wantedPrice" v-model="furniture.wantedPrice" />
    </div>
    
    <div class="ui labeled input fluid">
      <label for="note">Note</label>
      <input type="text" id="note" v-model="furniture.note" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="furnitures icon"></i>Sold</div>
      <input type="checkbox" id="sold" v-model="furniture.sold"/>
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "task-form",
  props: {
    furniture: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: "",
          room: "",
          buyedPrice: 0,
          wantedPrice: 0,
          sold: false,
          note: "",
          category: "",
          categories: ["To give", "To sell", "To keep"],
        };
      },
    },
  },
  data() {
    return {
      errorsPresent: false,
    };
  },
  methods: {
    onSubmit: function () {
      if (this.furniture.name === "") {
        this.errorsPresent = true;
      } else {
        this.$emit("createOrUpdate", this.furniture);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>