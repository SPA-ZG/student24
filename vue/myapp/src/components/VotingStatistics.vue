<template>
  <div>
    <h3>Voting Statistics:</h3>
    <p>Total Votes: {{ totalVotes }}</p>
    
  </div>
</template>

<script>
export default {
  props: {
    selectedLanguages: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      totalVotes: 0,
      
    };
  },
  watch: {
    selectedLanguages: {
      immediate: true,
      handler() {
        this.updateVoteStatistics();
      }
    }
  },
  methods: {
    updateVoteStatistics() {
      this.totalVotes++;

      
    }
  }
};
</script>

<style scoped>
/* Scoped styles for VotingStatistics component */
p {
  margin-bottom: 10px;
}
</style>
