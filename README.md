# InfinityBots-Votes.js
Official NPM Module for handling voting on Infinity Bot List [Website](https://infinitybotlist.com)

---

## GET Bot Info

### Constructor

```
IBLVotes(token)
```

---

###### Args
Arguement | Type | Required | Description
|--------------|----------|--------------|--------------|
userID | Snowflake | Yes | The user ID
botID | Snowflake | Yes | The bots Discord Client ID.
callback | Function | Yes | The callback that the vote module will call
--- 

### Example
```js
const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "!";
const IBLVotes = require("infinitybots-votes.js")
const voteData = new IBLVotes('token')
 
client.on("message", message => { 
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(message.content == (prefix + "ping")){
        message.reply(`Pong ${client.ws.ping}ms`)
    }    
     if(message.content == (prefix + "votecheck")){
        voteData.votes(userIDHERE, client.user.id, function(data){

         /**
          * CHECK IF USER HAS VOTED 
         */
         if (data.has_voted) {
             return message.channel.send('User has voted recently');
         } else {
             return message.channel.send('User has not voted recently');
         }
       })
    }
})
 
 
client.login("token")
```
