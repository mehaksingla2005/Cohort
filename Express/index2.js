require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;

const githubdata={
    "login": "mehaksingla2005",
    "id": 124077325,
    "node_id": "U_kgDOB2VFDQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/124077325?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mehaksingla2005",
    "html_url": "https://github.com/mehaksingla2005",
    "followers_url": "https://api.github.com/users/mehaksingla2005/followers",
    "following_url": "https://api.github.com/users/mehaksingla2005/following{/other_user}",
    "gists_url": "https://api.github.com/users/mehaksingla2005/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mehaksingla2005/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mehaksingla2005/subscriptions",
    "organizations_url": "https://api.github.com/users/mehaksingla2005/orgs",
    "repos_url": "https://api.github.com/users/mehaksingla2005/repos",
    "events_url": "https://api.github.com/users/mehaksingla2005/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mehaksingla2005/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Mehak Singla",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 17,
    "public_gists": 0,
    "followers": 0,
    "following": 6,
    "created_at": "2023-01-31T16:54:24Z",
    "updated_at": "2024-06-22T11:09:45Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("singlamehak2005.com")

})
app.get('/login',(req,res)=>{
    res.send("<h1>Please login with ur email</h1>")
})
app.get('/github',(req,res)=>{
    res.json(githubdata)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})