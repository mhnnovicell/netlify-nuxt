<template>
  <div class="container">
    <p>Repositories grabbed: {{ repositoriesCount }}</p>
    <NuxtLink to="/">
      Go to /
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myGitHubData: {}
    }
  },
  mounted: function () {
    this.GitHubAPI.get('/user/repos', {}, [this.myGitHubData, 'repositories'])
  },
  computed: {
    repositoriesCount: function () {
      if (this.myGitHubData.repositories) {
        return this.myGitHubData.repositories.length
      }
      return 'none yet...'
    }
  }
}
</script>

<style scoped>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
