const twit= require('twit')

const t = new twit({
    consumer_key:process.env.API_key,
    consumer_secret:process.env.API_key_SECRET,
    access_token:process.env.ACCESS_token,
    access_token_secret:process.env.ACCESS_token_secret
})





module.exports = t