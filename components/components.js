import Vue from 'vue'
import VueResource from 'vue-resource'
import GitHubAPI from 'vue-github-api'

// vue-resource is needed too
Vue.use(VueResource)

// import vue-github-api
Vue.use(GitHubAPI, {
  token: '79b73b8389220f8b561fe36a495d13753238d629'
})
