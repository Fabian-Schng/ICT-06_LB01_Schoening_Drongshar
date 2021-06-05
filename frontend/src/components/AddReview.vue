<template>
  <div>
    <div class="field">
      <label class="label">Review Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Review Name"
          v-model="reviewName"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="reviewPrice"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="saveReview">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddReview",
  data() {
    return {
      reviewName: "",
      reviewPrice: "",
    };
  },
  methods: {
    // Create New review
    async saveReview() {
      try {
        await axios.post("http://localhost:5000/reviews", {
          review_name: this.reviewName,
          review_price: this.reviewPrice,
        });
        this.reviewName = "";
        this.reviewPrice = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>