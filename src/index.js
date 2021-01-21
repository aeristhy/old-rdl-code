const rovel = require("rovel.js");
rovel.env.config();
const mongoose = require('mongoose');
const Discord = require("discord.js");
 let client = new Discord.Client();
 
 client.once("ready", () => {
  console.log("[BOT] online"+` as ${client.user.tag}`);
  client.user.setPresence({ activity: { name: 'Watching RDL' }, status: 'idle' });
 })
 
mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("[DB] We're connected to database!");
});

const port = process.env.PORT || 3000;
var express = require("express");
var compression = require("compression");
var app = express();
app.use(compression());
module.exports = {app, rovel};
require("./app.js");
app.get("*", (req, res)=>{
 res.send("RDL under Development (⌐■-■) Please come back later. Until then, join our discord server https://discord.gg/953XCpHbKF");
});

app.listen(port, () => {
  console.log(`[SERVER] Started on PORT:${port}`)
})
client.login(process.env.TOKEN);