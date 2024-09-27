
<template>
  <button @click="vote">Vote</button>
</template>

<script>
export default {
  methods: {
    vote() {
      // Emit an event named 'vote'
      this.$emit('vote', { postId: 123, voteType: 'up' });
    }
  }
};
</script>

<style scoped>
/* Scoped styles for VoteButton component */
button {
  background-color: #28a745; 
  color: #fff; 
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}
</style>
