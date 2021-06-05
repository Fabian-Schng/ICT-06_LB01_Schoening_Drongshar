<template>
  <div>
    <div class="field">
      <label class="label">Book</label>
      <div class="control">
        <div class="control">
          <div class="select">
            <select v-model="bookId">
              <option
                v-for="book in [
                  { id: '3', name: '1984' },
                  { id: '4', name: 'Royal Holiday' },
                ]" v-bind:key="book.id" v-bind:value="book.id" 
              >
                {{ book.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Review</label>
      <div class="control">
        <textarea
          class="input"
          rows="10"
          cols="80"
          type="text"
          placeholder="Review"
          v-model="reviewText"
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
      bookId: "",
      reviewText: "",
    };
  },
  methods: {
    // Create New review
    async saveReview() {
      try {
          console.log(this.bookId)
          console.log(this.reviewText)
        await axios.post("http://localhost:5000/reviews", {
          book_id: this.bookId,
          review_text: this.reviewText,
          user_id: 2  // hardcoded
        });
        this.bookId = "";
        this.reviewText = "";
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