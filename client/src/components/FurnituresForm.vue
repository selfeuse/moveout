<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i>Furniture
      </div>
      <input type="text" placeholder="Enter furniture..." v-model="furniture.name" />
    </div>    

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'furniture-form',
  props: {
    furniture: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.tfurniture.name === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.furniture);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>