<template>
  <div>
    <div class="field">
      <label class="label">Book</label>
      <div class="control">
        <div class="control">
          <div class="select">
            <select v-model="bookId">
              <option
                v-for="book in this.books"
                v-bind:key="book.book_id"
                v-bind:value="book.book_id"
              >
                {{ book.book_name + ": " + book.genre_name }}
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
      books: [],
      bookId: "",
      reviewText: "",
      userId: "",
    };
  },

  created() {
    this.getBooks();
  },

  methods: {
    async getBooks() {
      try {
        const response = await axios.get("http://localhost:5000/books");
        this.books = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Create New review
    async saveReview() {
      try {
        await axios.post("http://localhost:5000/reviews", {
          book_id: this.bookId,
          review_text: this.reviewText,
          user_id: 2, // hardcoded, get from context after login
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