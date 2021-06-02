# InfinityBots-Votes.js
Official NPM Module for viewing the 5 most recent votes for your Bot on the Infinity Bot List [Website](https://infinitybotlist.com)

---

## GET Bot Info

### Constructor

```
IBLVotes(botID, token)
```

---

###### Args
Arguement | Type | Required | Description
|--------------|----------|--------------|--------------|
botID | Snowflake | Yes | The bots Discord Client ID.
token | String | Yes | The bots IBL Auth Token. 

--- 

###### Params
Parameter | Type |  Description
|--------------|--------------|--------------|
botID | Snowflake | The bots Discord Client ID.
userID | Snowflake | The users Discord Client ID.
date | Number | The date the vote was recieved. 

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
     if(message.content == (prefix + "stats")){

        voteData.votes(client.user.id, function(data){

        let embed = new MessageEmbed()
          .setTitle('Recent Votes for [BOT NAME HERE]')
          .addField("Most Recent", data);

         return  message.channel.send(embed)

         /**
          * CHECK IF USER HAS VOTED 
         */
         if (data.userID.includes(message.author.id)) {

             return message.channel.send('User has voted recently');

         } else {
             return message.channel.send('User has not voted recently');
         }

         /**
          * IF THE CHECK ABOVE DOESNT WORK TRY THIS
          */
        if (data.includes(message.author.id)) {

             return message.channel.send('User has voted recently');

         } else {
             return message.channel.send('User has not voted recently');
         }
       })
    }
})
 
 
client.login("token")
```