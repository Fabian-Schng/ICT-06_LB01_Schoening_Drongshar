<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Image</th>
          <th>Book Name</th>
          <th>Book Author</th>
          <th>Genre</th>
          <th>Reviewer</th>
          <th>Review</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.review_id">
          <td><img :src="item.image_path" /></td>
          <td>{{ item.book_name }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.genre_name }}</td>
          <td>{{ item.first_name }} {{ item.last_name }}</td>
          <td>{{ item.review_text }}</td>
          <td class="has-text-centered">
            <!--
            <router-link
              :to="{ name: 'Edit', params: { id: item.review_id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
             -->
            <a
              class="button is-danger is-small"
              @click="deleteReview(item.review_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";

export default {
  name: "ReviewList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getReviews();
  },

  methods: {
    // Get All Reviews
    async getReviews() {
      try {
        const response = await axios.get("http://localhost:5000/reviews");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Review
    async deleteReview(id) {
      try {
        await axios.delete(`http://localhost:5000/reviews/${id}`);
        this.getReviews();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>